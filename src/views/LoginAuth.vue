<template>
    <div>
        {{ $store.state.loginToken }}
        {{ $store.state.kakaoArray }}
    </div>
</template>

<!-- 	e39a7a6172201f01362df1991d011618 -->

<script>
import axios from 'axios';

export default {
    name: "LoginAuth",
    data() {
        return {
            code: this.$route.query.code,
            client_secret: 'n8dqBIttrGg5hq9lwhPfVCe4pzvbawlr',
            // 클라이언트 id는 보여줘도 상관없는 거라 환경변수로 굳이 숨기지 않아도 됨
            client_id: 'e39a7a6172201f01362df1991d011618',
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:8080/auth'
        }
    },
    mounted() {
        axios.get("https://kauth.kakao.com/oauth/token",{ // axios.post로 작성해도 됨
            params: {
                code: this.code,
                grant_type: this.grant_type,
                redirect_uri: this.redirect_uri,
                client_id: this.client_id,
                client_secret: this.client_secret
            }
        }).then((res)=>{
            // 커밋으로 날려줌
            this.$store.commit("kakaoLogin", {res})
            sessionStorage.setItem("refreshToken", res.data.access_token)
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
                        success: ((e)=>{
                            console.log(e)
                            sessionStorage.setItem("displayName", e.kakao_account.profile.nickname);
                            sessionStorage.setItem("uid", e.id)
                            debugger;
                            this.$store.commit("loginState", {
                                displayName: sessionStorage.getItem("displayName"), 
                                uid: sessionStorage.getItem('uid')
                            })
                            // debbuger;
                        }),
                        fail:((error)=>{
                            console.log(error)
                        })
                    })
                    // this.LoginState()
                },
                // fail: function(){
                //     // console.log(error)
                // }
                })
            })
    },
}
</script>

<style>

</style>