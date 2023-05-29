import { createStore } from 'vuex'

export default createStore({
  state(){
    // 프롭스
    return{
      number: 100,
      number2: 1000,
      loginChk: false,
      displayName: "",
      loginToken: null,
      uid: "",
      noticeId: 0,
      onlinechatId: 0,
      qnaId:  0, 
      kakaoArray: [], // 카카오
      adminUid: '864daWv2B4Uu4MNG4J6sSaYP0A62',
      chkManager: false, //true로 주면 관리자가 아닌 모든 사용자들도 접근이 가능하게 됨 >> 관리자가 로그인을 했을 때는 얘가 true가 되어야 함.


    }
  },
  mutations: {
    NoticeRead(state, payload){
      state.noticeId = payload
    },
    OnlineChatRead(state, payload){
      state.onlinechatId = payload
    },
    QnARead(state, payload){
      state.qnaId = payload
    },
    // 데이터 변경할 때
    NumberPlus(state){
      state.number++
    },
    NumberMinus(state){
      state.number2--
    },
    // loginView.vue
    loginToken(state, payload){
      state.loginToken = payload.refreshToken
      state.loginChk = true
      state.uid = payload.uid
      // 여기다가 조건문
      if(state.uid === state.adminUid){
        console.log(state.uid)
        state.chkManager = true
      } else {
        state.chkManager = false
      }
    },
    // Nav.vue
    logOutToken(state){
      state.loginChk = false
      state.loginToken = null
      state.displayName = ''
      state.uid = ''
      state.chkManager = false
      sessionStorage.removeItem("refreshToken")
      sessionStorage.removeItem("displayName")
    },
    // App.vue
    loginState(state, payload){
      state.loginToken = sessionStorage.getItem("refreshToken")
      state.displayName = payload.displayName
      state.uid = payload.uid
      state.loginChk = true
    },
    kakaoLogin(state, payload){
      state.kakaoArray = payload,
      state.loginToken = payload.res.data.access_token
      state.loginChk = true // 데이터 받아서(로그인 데이터가 받아왔다는 뜻) 로그아웃이 떠짐
    }
  },
  actions: {
    // ajex 데이터 가져올 때
  },
})
