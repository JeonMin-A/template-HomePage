<template lang="">
    <div class="basis-full">
        <div class="max-w-7xl mx-auto my-10">
            <!-- 게시판 -->
            <ul class="flex justify-between border-[#20293C] border-t-2 p-4 py-2 bg-[#a6acb9] text-xs sm:text-sm text-center">
                <li class="basis-[7%]">번호</li>
                <li class="basis-[15%] md:basis-[20%]">제목</li>
                <li class="basis-[14%] md:basis-[13%]">글쓴이</li>
                <li class="basis-[15%] md:basis-[15%]">날짜</li>
            </ul>
            <!-- 게시판 목록 -->
            <template v-for="(e, index) in dataList.slice()" :key="index">
                <!-- 실제 개수만 가져옴 / v-for, v-if 는 같이 못쓰기에 템플릿으로 묶고  -->
                <ul v-if="calculatorNumber(totalLength, perPage, page, index) > 0" class="flex justify-between border-b text-center px-4 py-2 even:bg-gray-50 text-xs sm:text-sm">
                    <!-- 게시글 번호 -->
                    <li class="basis-[4.44444%]">{{calculatorNumber(totalLength, perPage, page, index)}}</li> 
                    <!-- 제목 -->
                    <li class="basis-[12%]">
                        <router-link :to="{name: 'OnlineChatRead', query:{docId: dataId[index]}}" @click="$store.commit('OnlineChatRead', dataId[index])" class="truncate block w-[150px] mx-auto">{{e.title}}</router-link>
                    </li>
                    <!-- 글쓴이 -->
                    <li class="basis-[11%]">
                        <span class="truncate block w-[70px] mx-auto">{{e.name}}</span>
                    </li>
                    <!-- 날짜 -->
                    <li class="basis-[15%] truncate block">{{BoardDate(index)}}</li>
                </ul>
            </template>
            <div v-if="$store.state.loginToken != null" class="flex justify-end pb-24 mt-5">
                <router-link to="/cs/onlinechat/write" class="bg-[#a6acb9] text-black hover:bg-[#20293C] duration-200 py-2 px-4 hover:text-white font-semibold rounded shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 text-xs sm:text-sm ">글쓰기</router-link>
            </div>
        </div>
    </div>
    <!-- 페이지 네이션 -->
    <div class="flex justify-center basis-full gap-x-8 mb-24">
        <button @click="prevPage" :disabled="currentPage <= 1" class="text-sm">&lt;&nbsp;이전</button>
        <button @click="goToPage(e)" v-for="e in pageCount.pagination" :key="e" :class="page == e && 'font-bold text-white border rounded px-[10px] py-1 bg-slate-600 text-sm'" class="text-sm">{{e}}</button>
        <button @click="nextPage" :disabled="currentPage >= pageCount.totalPage / block" class="text-sm">다음&nbsp;&gt;</button>
    </div>
</template>
<script>
import {db} from "../../firebase"

export default {
    name: "OnlineChatList",
    data() {
        return {
            dataList: [],
            dataId: [],
            posts: [],
            page: 1,
            perPage: 10,
            lastVisible: null,
            totalLength: 0,
            block: 5,
            currentPage: 1
        }
    },
    computed:{
        pageCount(){
            const totalPage = Math.ceil(this.totalLength / this.perPage); // 전체 페이지수 계산 전체 게시물 / 페이지당 개수 나눈 뒤 올림 처림
            const start = (this.currentPage - 1) * this.perPage; // 현재 페이지에 보여질 게시물의 시작 인덱스를 계산
            const end = start + this.perPage; // 현재 페이지에 보여질 게시물의 끝 인덱스를 계산
            const pagination = []; // 페이지 번호를 저장할 배열을 선언

            for(let i = start + 1; i <= end && i <= totalPage; i++){
                // 시작 인덱스에서 끝 인덱스까지 반복문을 사용하며, 페이지 번호를 배열에 추가한다. 이때 추가 되는 페이지 번호는 전체 페이지 수를 넘지 않도록 설정
                pagination.push(i)
            }
            if(pagination.length === 0 && totalPage > 0){
                pagination.push(totalPage);
            }
            // 만약 페이지 번호 배열이 비어있고 전체 페이지 수가 0보다 크다면 마지막 페이지 번호만 배열에 추가한다.
            return {totalPage, start, end, pagination}
        }
    },
    methods: {
        goToPage(e){
            this.page = e; // 클릭하는 번호(페이지 번호)로 설정
            this.fetchPost() // 해당 번호의 게시물을 가져오도록 다시 게시물 호출
        },
        // 이전 페이지
        prevPage(){
            this.currentPage = this.currentPage - 1;
            // this.page++; <<< 얘는 하나씩
            this.page = this.pageCount.pagination[0];
            this.fetchPost();
        },
        // 다음 페이지
        nextPage(){
            this.currentPage = this.currentPage + 1; // 현재 블록 페이지 번호를 1 증감 시킨다.
            // this.page++; <<< 얘는 하나씩
            this.page = this.pageCount.pagination[0]; // 배열에 추가된 첫 번째 번호를 페이지를 이동
            this.fetchPost(); // 이동된 페이지의 게시글을 다시 호출
        },
        // 날짜 출력
        BoardDate(index){
            const date = this.dataList[index].date.seconds * 1000 + this.dataList[index].date.nanoseconds / 1000000
            // 밀리세컨드초를 date 객체로 변환
            const new_date = new Date(date);
            const formattedDate = (''+new_date.getFullYear()).slice(-2)+'-'
            +('0'+ (new_date.getMonth() + 1)).slice(-2)+'-'
            +('0'+ new_date.getDate()).slice(-2)+''
            return formattedDate
        },
        fetchTotalLength(){
            db.collection("onlinechat").get().then((data)=>{
                // 모든 onlinechat의 문서를 가지고 와서 개수를 지정한다.
                // size >개수
                this.totalLength = data.size
                console.log(data)
            })
        },
        // 게시물 
        fetchPost(){
            let query = db.collection("onlinechat").orderBy("date", "desc").limit(this.perPage)

            if(this.page > 1 && this.lastVisible){
                query = query.startAfter(this.lastVisible); //파이어베이스 함수
            }
            query.get().then((data)=>{
                const items = [];
                const ids = [];

                data.forEach((e)=>{
                    ids.push(e.id);
                    items.push(e.data())
                })
                this.dataId = ids;
                this.dataList = items;
                this.lastVisible = data.docs[data.docs.length - 1]
                // -1 >>> 0부터 시작하기 때문
                console.log(this.lastVisible)
            })
        },
        calculatorNumber(totalLength, perPage, page, index){
            const totalPages = perPage * (page -1); //현재 페이지 이전에 있는 게시물 수 계산
            const postIndex = totalLength - (totalPages + index); // 게시물 인덱스 계산 - 전체 게시물에서 이전 게시물 수와 현재 게시물의 인덱스를 뺀다. 게시물 인덱스가 내림차순으로 표시
            if(postIndex <= 0){return} // 게산된 게시물의 인덱스가 0보다 작거나 같으면 함수를 종료 결국은 마지막 페이지에서 음수 값 혹은 0 값을 반환하지 않는다.
            return postIndex; // 게시물 인덱스를 반환 > 이 값은 게시물 번호로 사용

        }

    },
    mounted() {
        this.fetchTotalLength();
        this.fetchPost();
    },
}
</script>
<style lang="">
    
</style>