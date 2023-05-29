<template>
    <div class="mb-0">
        <img src="https://via.placeholder.com/1200x200/20293C" alt="img" class="w-full">
    </div>
    <div class="pt-24 py-12 text-center basis-full">
        <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-5 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">마이페이지</h3>
    </div>
    <form class="pb-24 flex flex-col items-center">
        <div>
            <input v-model="text" type="text" placeholder="&nbsp;&nbsp;닉네임 변경" class="border mt-3 w-72 py-1">
        </div>
        <div>
            <input v-model="password" type="password" placeholder="&nbsp;&nbsp;기존 비밀번호" class="border mt-3 w-72 py-1">
        </div>
        <div>
            <input v-model="password" type="password" placeholder="&nbsp;&nbsp;새 비밀번호" class="border mt-3 w-72 py-1">
        </div>
        <div>
            <input type="password" placeholder="&nbsp;&nbsp;새 비밀번호 확인" class="border mt-3 w-72 py-1 cursor-not-allowed">
        </div>
        <div>
            <button @click="signUp" class="border px-[113px] py-3 bg-slate-800 hover:bg-slate-700 focus:bg-slate-600 text-white m-5 relative">회원수정</button>
        </div>
    </form>
</template>
<script>
// import {auth} from "../firebase"

export default {
    name: "MyPageView",
    
}
</script>
<style>
    
</style>