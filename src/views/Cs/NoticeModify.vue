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
            <div class="flex justify-end gap-x-5">
                <router-link to="/cs/notice/list" class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm mt-5">취소</router-link>
                <button class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm mt-5" @click="Modify">완료</button>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from "../../firebase"

export default {
    name: "NoticeModify",
    data() {
        return {
            BoardContent: [],
            name: this.$store.state.displayName,
            title: "",
            content: "",
            date: new Date()
        }
    },
    methods: {
        Modify(){
            db.collection("notice").doc(this.$store.state.noticeId).update({
                "name": this.name,
                "title": this.title,
                "content": this.content,
                "date": this.date
            }).then(()=>{
                alert("수정이 완료되었습니다.");
                this.$router.replace("/cs/notice")
            })
        }
    },
    mounted() {
        if(this.$store.state.noticeId == 0){
            this.$router.replace("/cs/notice")
        }
        db.collection("notice").doc(this.$store.state.noticeId).get().then((data)=>{
            this.BoardContent = data.data()
            // 원래 있는 내용 게시물 수정
            this.name = this.BoardContent.name
            this.title = this.BoardContent.title
            this.content = this.BoardContent.content
        })
    },
}
</script>
<style lang="">
    
</style>