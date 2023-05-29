<template lang="">
    <div class="mx-auto my-10 justify-center">
        <div class="w-[1000px]">
            <div class="flex justify-between mb-10">
                <!-- 상단 - 왼쪽 영역 -->
                <div class="flex gap-x-5">
                    <router-link to="/cs/notice/list" class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md text-xs sm:text-sm mt-5">목록</router-link>
                </div>
                <!-- 상단 - 오른쪽 영역 -->
                <div v-if="$store.state.loginToken != null" class="flex gap-x-5">
                    <router-link to="/cs/notice/modify" class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md text-xs sm:text-sm mt-5">수정</router-link>
                    <button @click="Delete" class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md text-xs sm:text-sm mt-5">삭제</button>
                </div>
            </div>
            <!-- 작성자 -->
            <div class="flex w-full">
                <p class="w-28 text-center text-white bg-[#20293C] py-2">작성자</p>
                <div class="border w-full inline-block basis-[40%] leading-[40px] pl-3">{{ BoardContent.name }}</div>
                <p class="w-28 text-center text-white bg-[#20293C] py-2">날짜</p>
                <div class="border w-full inline-block basis-[30%] leading-[40px] pl-3">{{dateTime}}</div>
                <p class="w-28 text-center text-white bg-[#20293C] py-2">조회수</p>
                <div class="border w-full inline-block basis-[10%] leading-[40px] text-center">{{BoardContent.hit}}</div>
            </div>
            <!-- 제목 -->
            <div class="mt-5 flex w-full">
                <p class="w-28 text-center text-white bg-[#20293C] py-2">제목</p>
                <div class="border w-full pl-3 leading-[40px]">{{ BoardContent.title }}</div>
            </div>
            <!-- 내용 -->
            <div class="mt-5 flex w-full">
                <p class="w-28 text-center text-white bg-[#20293C] py-2 leading-[680px]">내용</p>
                <div class="border w-full h-[700px] pl-3 leading-[40px]">{{ BoardContent.content }}
                    <img v-if="BoardContent.file" :src="BoardContent.file" :alt="BoardContent.title" class="mx-auto"/>
                </div>
            </div>
            <!-- 하단 영역 -->
            <div class="flex justify-end mt-7 mb-24">
                <div class="flex gap-x-5">
                    <button @click="GoodChk" class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md text-xs sm:text-sm mt-5">
                        <font-awesome-icon icon="fa-thumbs-up" class="text-xl"></font-awesome-icon> : {{BoardContent.good}}
                    </button>
                    <button @click="noGoodChk" class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md text-xs sm:text-sm mt-5">
                        <font-awesome-icon icon="fa-thumbs-down" class="text-xl"></font-awesome-icon> : {{BoardContent.bad}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {db} from "../../firebase"

export default {
    name: "NoticeRead",
    data() {
        return {
            BoardContent: [],
            dataList: [],
            dataId: [],
            oriDate: '',
            dateTime: ""
        }
    },
    methods: {
        Delete(){
            let msg = confirm("삭제된 데이터는 복구할 수 없습니다. \r\r 삭제하시겠습니까?");
            // 역슬러시 "\r\r"
            if(msg){
                console.log("!!")
                db.collection("notice").doc(this.$route.query.docId).delete().then(()=>{
                    alert("삭제가 완료 되었습니다.");
                    this.$router.replace("/cs/notice")
                })
            }
        },
        BoardDate(index){
            const date = this.dataList[index].date.seconds * 1000 + this.dataList[index].date.nanoseconds / 1000000
            // 밀리세컨드초를 date 객체로 변환
            const new_date = new Date(date);
            const formattedDate = (''+new_date.getFullYear()).slice(-2)+'-'
            +('0'+ (new_date.getMonth() + 1)).slice(-2)+'-'
            +('0'+ new_date.getDate()).slice(-2)+''
            return formattedDate
        },
        GoodChk(){
            if(this.BoardContent.goodChk){
                alert("이미 추천 혹은 비추천 하셨습니다.");
                return;
            }

            db.collection("notice").doc(this.$route.query.docId).update({
                good: this.BoardContent.good + 1,
                goodChk : true
            }).then(()=>{
                db.collection("notice").doc(this.$route.query.docId).get().then((data=>{
                    this.BoardContent = data.data()
                }))
            })
        },
        noGoodChk(){
            if(this.BoardContent.goodChk){
                alert("이미 추천 혹은 비추천 하셨습니다.");
                return;
            }

            db.collection("notice").doc(this.$route.query.docId).update({
                bad: this.BoardContent.bad + 1,
                goodChk : true
            }).then(()=>{
                db.collection("notice").doc(this.$route.query.docId).get().then((data=>{
                    this.BoardContent = data.data()
                }))
            })
        }
    },
    mounted() {
        if(this.$route.query.docId == null){
            this.$router.replace("/cs/notice")
        }
        db.collection("notice").doc(this.$route.query.docId).get().then((data)=>{
            this.BoardContent = data.data()
            if(data.data().isUpdate){
                return;
            }

            this.oriDate = this.BoardContent.date

            db.collection("notice").doc(this.$route.query.docId).update({
                hit: data.data().hit + 1,
                // isUpdate: true
            })
        }).then(()=>{
            db.collection("notice").doc(this.$route.query.docId).get().then((update)=>{
                this.BoardContent = update.data();
                const milliseconds = this.BoardContent.date.seconds * 1000 + this.BoardContent.date.nanoseconds / 1000000

                const new_date = new Date(milliseconds); //date

                const formattedDate = (''+new_date.getFullYear()).slice(-2)+'-'
                    +('0'+ (new_date.getMonth() + 1)).slice(-2)+'-'
                    +('0'+ new_date.getDate()).slice(-2)+''
                    +('0'+ new_date.getHours()).slice(-2)+':'
                    +('0'+ new_date.getMinutes()).slice(-2)+':'
                    +('0'+ new_date.getSeconds()).slice(-2)+''
                    return this.dateTime = formattedDate;
            })
        })


    },
    computed: {
        formattedDate(){
            const date = this.oriDate.seconds * 1000 + this.oriDate.nanoseconds/1000000
            const formattingDate = new Date(date).toLocaleDateString()
            return formattingDate
        }
    }
}
</script>
<style lang="">
    
</style>