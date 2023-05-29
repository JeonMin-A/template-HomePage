<template>
    <div class="w-full bg-slate-800 ">
      <div class="max-w-7xl p-5 border-b border-b-[rgba(255,255,255,0.07)] mx-auto flex justify-between flex-wrap relative after:absolute after:w-full after:h-0.5 after:bg-[rgba(255,255,255,0.07)] after:left-0 after:top-16 sm:after:w-0">
        <ul class="flex gap-x-5 basis-full sm:basis-auto justify-center">
          <li><router-link to="/" class="text-sm text-white/90">회사소개</router-link></li>
          <li><router-link to="/" class="text-sm text-white/90">개인정보처리방침</router-link></li>
          <li><router-link to="/" class="text-sm text-white/90">이메일무단수집거부</router-link></li>
        </ul>
        <ul class="flex gap-x-5 mt-10 sm:mt-0 basis-full sm:basis-auto justify-center">
          <li><a href="#" target="_blank"><img src="https://via.placeholder.com/30" alt="sns" class="rounded-full"></a></li>
          <li><a href="#" target="_blank"><img src="https://via.placeholder.com/30" alt="sns" class="rounded-full"></a></li>
          <li><a href="#" target="_blank"><img src="https://via.placeholder.com/30" alt="sns" class="rounded-full"></a></li>
          <li><a href="#" target="_blank"><img src="https://via.placeholder.com/30" alt="sns" class="rounded-full"></a></li>
        </ul>
      </div>
      <div class="max-w-7xl mx-auto p-5 flex justify-between flex-wrap">
        <div class="basis-full sm:basis-2/3">
          <h1 class="text-white font-bold tracking-widest">(주) 회사이름</h1>
          <p class="text-sm text-white/40 flex gap-x-2.5 mt-4 flex-wrap">
            <span class="basis-full sm:basis-auto text-xs sm:text-sm">주소: 대구광역시 중구 중앙대로 394 제일빌딩 5F</span>
            <span class="basis-full sm:basis-auto text-xs sm:text-sm ">사업자번호 : 000-000-000000</span>
            <span class="basis-full sm:basis-auto text-xs sm:text-sm ">대표자 : 홍길동</span>
          </p>
          <p class="text-sm text-white/40 flex gap-x-2.5 mt-4 flex-wrap">
            <span class="basis-full sm:basis-auto text-xs sm:text-sm ">TEL : 053-572-1005</span>
            <span class="basis-full sm:basis-auto text-xs sm:text-sm ">FAX : 053-572-1005</span>
            <span class="basis-full sm:basis-auto text-xs sm:text-sm ">E-mail : abcd@naver.com</span>
          </p>
          <p class="text-sm text-white/40 flex gap-x-2.5 mt-4">
            <span class="uppercase text-xs sm:text-sm">COPYRIGHT ©2023 (주)회사이름 all rights reserved.</span>
          </p>
        </div>
        <div class="basis-full sm:basis-[30%] lg:basis-[25%] bg-black/30 rounded-md pl-5 box-border mt-5 pb-5 ">
          <h2 class="text-white mb-5 mt-8">(주)회사이름</h2>
          <span class="text-sky-500 font-bold">대표전화: 053-572-1005</span>
        </div>
      </div>
    </div>
    <!-- 기본형 -->
    <!-- <button ref="TopBtn" class="fixed right-5 bottom-5 w-12 h-12 border-2 text-[#333] bg-white/50 z-50 rounded" @click="scrollTop" :class="TopBtnChk ? 'block' : 'hidden'">
      <font-awesome-icon icon="circle-arrow-up" class="text-2xl"/>
    </button> -->
    <!--  
      opcity - 투명도
      visible hidden - 공간은 차지 하는데 화면에 안보이는거
      display none -  영역 x
    -->
    <!-- transition 준거 -->
    <button class="fixed right-5 bottom-5 w-12 h-12 border-2 text-[#333] bg-white transition-all duration-1000 z-50 rounded" @click="scrollTop" :class="TopBtnChk ? 'visible opacity-100' : 'invisible opacity-0'">
      <font-awesome-icon icon="circle-arrow-up" class="text-2xl"/>
    </button>
  </template>
  <script>
  export default {
    name:"FooterCom",
    data() {
      return {
        windowScroll: window.scrollY,
        TopBtnChk: false
      }
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll)
    },
    methods: {
      scrollTop(){
        window.scrollTo({top: 0, behavior: 'smooth'}) // window. - javascript 문법 
        // document.body.scrollHeight - 문서 전체 세로 길이 값 가져오는 법 (아래로 )
      },
      updateScroll(){
        this.windowScroll = window.scrollY;
        // console.log(this.windowScroll)
        if(this.windowScroll > 500){
          this.TopBtnChk = true
        }else{
          this.TopBtnChk = false
        }
      }
    },
  }
  </script>
  <style lang="">
    
  </style>