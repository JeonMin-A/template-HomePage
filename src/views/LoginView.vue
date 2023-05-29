<template>
    <div class="mb-0">
        <img src="https://via.placeholder.com/1200x200/20293C" alt="img" class="w-full">
    </div>
    <div class="pt-24 pb-10 text-center basis-full">
        <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-5 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">로그인</h3>
    </div>
    <div class="pb-24 flex flex-col items-center">
        <input v-model="email" type="email" required="" placeholder="E-mail" class="border w-72 py-1 p-2">
        <input @keyup.enter="login" v-model="password" type="password" placeholder="비밀번호" class="border mt-3 w-72 py-1 p-2">
        <div>
            <button @click="login" class="border px-[121px] py-3 bg-slate-800 hover:bg-slate-700 focus:bg-slate-600 text-white m-5 relative">로그인</button>

            <!-- 카카오 로그인 -->
            <div @click="kakaoLoginBtn" class="mb-10 cursor-pointer">카카오 로그인</div>
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=e39a7a6172201f01362df1991d011618&redirect_uri=http://localhost:8080/auth&response_type=code" class="mb-10 cursor-pointer">카카오 로그인2</a>
            <p class="absolute text-gray-400 text-sm text-right ml-5 -mt-2 cursor-pointer hover:text-gray-800">아이디/비밀번호 찾기</p>
        </div>
        <div>
            <router-link to="/member" class="absolute text-gray-400 text-sm text-right ml-8 -mt-2 hover:text-gray-800">회원이 아니신가요?</router-link>
        </div>
    </div>
</template>

<!-- 7aa1d3191d274ee2ca1ead4c40c87631 -->

<script>
import {auth} from "../firebase"

export default {
    name: "LoginView",
    data() {
        return {
            email: "",
            password: "",
            errorMsg: ""
        }
    },
    methods: {
        // 카카오 로그인
        kakaoLoginBtn(){
            window.Kakao.init('7aa1d3191d274ee2ca1ead4c40c87631')

            window.Kakao.Auth.login({
                success: function(){
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        data: {
                            property_keys: [
                                "kakao_account.profile",
                                "kakao_account.email"
                            ]
                        },
                        success: function(res){
                            console.log(res)
                        },
                        fail: function(error){
                            console.log(error)
                        }
                    })
                },
                fail: function(){
                    // console.log(error)
                }
            })
        },
        login(){
            if(!this.email){
                alert("이메일을 입력해주세요");
                return false;
            }
            if(!this.password){
                alert("비밀번호를 입력해주세요");
                return false;
            }
            auth.signInWithEmailAndPassword(this.email,this.password).then(((user)=>{
            
                
            // auth.signInWithEmailAndPassword('test6@naver.com','789456123').then(((user)=>{
            //     console.log('1')
                console.log(user)
                sessionStorage.setItem("refreshToken",user.user.refreshToken);
                sessionStorage.setItem("displayName", user.user.displayName);

                this.$store.commit("loginToken", {refreshToken: user.user.refreshToken, uid: user.user.uid})
                
                this.$router.replace('/')
            }),
            ((error)=>{
                this.errorMsg = error.message
                console.log(error)
            }))
        }
    },
}
</script>
<style>
    
</style>