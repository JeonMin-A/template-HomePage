<template>
    <div class="mb-0">
        <img src="https://via.placeholder.com/1200x200/20293C" alt="img" class="w-full">
    </div>
    <div class="pt-24 py-12 text-center basis-full">
        <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-5 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">회원가입</h3>
    </div>
    <form class="pb-24 flex flex-col items-center">
        <div class="relative">
            <input v-model="nickname" type="text" placeholder="닉네임" class="border w-72 py-1 cursor-not-allowed p-2">
            <button class="absolute w-16 border p-1 text-xs ml-3 text-slate-800 hover:border-slate-800 transition-all duration-300 mt-1">중복 확인</button>
        </div>
        <div>
            <input v-model="email" type="text" placeholder="E-mail" class="border w-72 py-1 mt-3 p-2">
        </div>
        <div class="relative">
            <input type="text" placeholder="전화번호 ' - ' 없이 입력해주세요." class="border w-72 mt-3 cursor-not-allowed p-2">
            <button class="absolute w-16 border p-1 text-xs ml-3 text-slate-800 hover:border-slate-800 transition-all duration-300 mt-5">인증 확인</button>
        </div>
        <div>
            <input v-model="password" type="password" placeholder="비밀번호" class="border mt-3 w-72 py-1 p-2">
        </div>
        <div>
            <input type="password" placeholder="비밀번호 확인" class="border mt-3 w-72 py-1 cursor-not-allowed p-2">
        </div>
        <div>
            <button @click="signUp" class="border px-[113px] py-3 bg-slate-800 hover:bg-slate-700 focus:bg-slate-600 text-white m-5 relative">회원가입</button>
        </div>
        <div>
            <router-link to="/login" class="text-gray-400 hover:text-gray-800 text-sm">이미 계정이 있으신가요?</router-link>
        </div>
    </form>
</template>

<script>
import {auth} from "../firebase"

export default {
    name: "MemberView",
    data() {
        return {
            email: "",
            password: "",
            nickname: "",
            
        }
    },
    methods: {
        signUp(){
            auth.createUserWithEmailAndPassword(this.email, this.password).then((result)=>{
                result.user.updateProfile({displayName: this.nickname}) //닉네임
                console.log(result)
                console.log(result.user)
            })
        }
    },
}
</script>

<style>
    
</style>