<template lang="">
    <div class="mx-auto my-10 justify-center">
        <div class="w-[1000px]">
            <!-- 작정자 -->
            <div class="flex w-full">
                <p class="w-28 text-center text-white bg-[#20293C] py-2">작성자</p>
                <input v-model="name" type="text" placeholder="&nbsp;&nbsp;작성자" class="border w-full inline-block">
            </div>
            <!-- 제목 -->
            <div class="mt-5 flex w-full">
                <p class="w-28 text-center text-white bg-[#20293C] py-2">제목</p>
                <input v-model="title" type="text" placeholder="&nbsp;&nbsp;제목" class="border w-full">
            </div>
            <!-- 내용 -->
            <div class="mt-5 flex w-full">
                <p class="w-28 text-center text-white bg-[#20293C] py-2 leading-[480px]">내용</p>
                <textarea v-model="content" class="border w-full h-[500px]"></textarea>
            </div>
            <div class="mt-5 flex w-full">
                <p class="w-28 text-center text-white bg-[#20293C] py-2 leading-8">파일 첨부</p>
                <input class="appearance-none border w-full py-2 px-3 text-gray-700" type="file" id="image">
                <button class="" id="send"></button>
            </div>
            <div class="flex justify-end gap-x-2">
                <div class="mt-7 mr-5">
                    <input type="checkbox" name="secret">
                    <label for="secret" class="ml-2">비밀글 설정하기</label>
                </div>
                <button class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm mt-5" @click="write()">올리기</button>
            </div>
        </div>
    </div>
</template>
<script>
import {db, storage} from "../../firebase"

export default {
    name: "QnAWrite",
    data() {
        return {
            title: '',
            content: '',
            name: this.$store.state.displayName,
            file: "",
            date: new Date(),
            fileRandom: null
        }
    },
    mounted() {
        const formattedDate = this.GetDate();
        this.fileRandom = formattedDate
    },
    methods: {
        GetDate(){
            const date = new Date();
            const RandNum = Math.floor(Math.random()*999) + 100;

            const formattedDate = ('' + date.getFullYear())+''
            +('0'+ (date.getMonth() + 1)).slice(-2)+''
            +('0'+ date.getDate()).slice(-2)+'_'
            +('0'+date.getHours()).slice(-2)+''
            +('0'+date.getMinutes()).slice(-2)+''
            +('0'+date.getSeconds()).slice(-2)+'' + RandNum
            return formattedDate
        },
        write(){

            this.file = document.querySelector("#image").files[0];
            if(this.file){
                
                storage.ref().child("images/" + this.fileRandom).put(this.file)
                .then(()=>{
                    //파일경로 가지고 오기
                    storage.ref().child("images/" + this.fileRandom).getDownloadURL().then((url)=>{
                        db.collection("qna").add({
                    "name": this.name,
                    "title": this.title,
                    "content": this.content,
                    "date": this.date,
                    "hit": 1,
                    "good": 0,
                    "bad": 0,
                    "uid": this.$store.state.uid,
                    "file": url
                    
                })
                this.$router.replace("/cs/qna")
                    })
                })
            }else{
                db.collection("qna").add({
                    "name": this.name,
                    "title": this.title,
                    "content": this.content,
                    "date": this.date,
                    "hit": 1,
                    "good": 0,
                    "bad": 0,
                    "uid": this.$store.state.uid
                    
                })
                this.$router.replace("/cs/qna")
            }
        }
    },
}
</script>
<style lang="">
    
</style>