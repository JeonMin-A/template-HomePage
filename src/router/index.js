import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MemberView from '../views/MemberView.vue'
import MyPageView from '../views/MyPageView.vue'
import AdminView from '../views/AdminView.vue'
import CompanyVue from '../views/CompanyView.vue'

// 회사소개
import GreetingsVue from '../views/Company/GreetingsView.vue'
import HistoryVue from '../views/Company/HistoryView.vue'
import InteriorVue from '../views/Company/InteriorView.vue'
import DirectionsVue from '../views/Company/DirectionsView.vue'

// 사업소개
import BusinessVue from '@/views/BusinessView.vue'
import BusinessVue_1 from '@/views/Business/BusinessView-1.vue'
import BusinessVue_2 from '@/views/Business/BusinessView-2.vue'
import BusinessVue_3 from '@/views/Business/BusinessView-3.vue'

// 제품소개
import ProductVue from '@/views/ProductView.vue'
import ProductVue_1 from '@/views/Product/ProductView-1.vue'
import ProductVue_2 from '@/views/Product/ProductView-2.vue'
import ProductVue_3 from '@/views/Product/ProductView-3.vue'

// 고객센터
import CsVue from '@/views/CsView.vue'

// 공지사항
import Notice from '@/views/Cs/NoticeView.vue'
// 공지사항 목록
import NoticeList from '@/views/Cs/NoticeList'
// 공지사항 본문 내용
import NoticeRead from '@/views/Cs/NoticeRead'
// 공지사항 글수정
import NoticeModify from '@/views/Cs/NoticeModify'
// 공지사항 글쓰기
import NoticeWrite from '@/views/Cs/NoticeWrite'

// 온라인상담
import OnlineChat from '@/views/Cs/OnlineChatView.vue'
// 온라인상담 목록
import OnlineChatList from '@/views/Cs/OnlineChatList' 
// 온라인상담 본문 내용
import OnlineChatRead from '@/views/Cs/OnlineChatRead' 
// 온라인상담 글수정
import OnlineChatModify from '@/views/Cs/OnlineChatModify' 
// 온라인상담 글쓰기
import OnlineChatWrite from '@/views/Cs/OnlineChatWrite' 

// 질문과답변
import QnA from '@/views/Cs/QnAView.vue'
// 질문과답변 목록
import QnAList from '@/views/Cs/QnAList'
// 질문과답변 본문 내용
import QnARead from '@/views/Cs/QnARead'
// 질문과답변 글수정
import QnAModify from '@/views/Cs/QnAModify'
// 질문과답변 글쓰기
import QnAWrite from '@/views/Cs/QnAWrite'

import Gallery from '@/views/Cs/GalleryView.vue'

import LoginAuth from '@/views/LoginAuth.vue'

const routes = [
  {
    path: '/auth',
    name: 'LoginAuth',
    component: LoginAuth
  },
  {
    // 홈
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 로그인
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    // 회원가입
    path: '/member',
    name: 'MemberView',
    component: MemberView,
  },
  {
    // 관리자
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
    meta: {
      manager: true // 매니저들만 접근 >> 여기는 건들일 필요 ㄴㄴ
    }
  },
  {
    // 회원가입
    path: '/mypage',
    name: 'MyPageView',
    component: MyPageView,
    meta: {
      manager: true // 매니저들만 접근 >> 여기는 건들일 필요 ㄴㄴ
    }
  },
  {
    // 회사소개
    path: '/company',
    name: 'CompanyVue',
    component: CompanyVue,
    redirect: "/company/greetings", //리다이렉트 시킴
    children: [
      {
        // 인사말
        path: '/company/greetings',
        name: 'GreetingsVue',
        component: GreetingsVue
      },
      {
        // 연혁
        path: '/company/history',
        name: 'HistoryVue',
        component: HistoryVue
      },
      {
        // 전경
        path: '/company/interior',
        name: 'InteriorVue',
        component: InteriorVue
      },
      {
        // 오시는 길
        path: '/company/directions',
        name: 'DirectionsVue',
        component: DirectionsVue
      }
    ]
  },
  {
    // 사업소개
    path: '/business',
    name: 'BusinessVue',
    component: BusinessVue,
    redirect: "/business/businessVue_1",
    children: [
      {
        // 사업소개1
        path: '/business/businessVue_1',
        name: 'BusinessVue_1',
        component: BusinessVue_1
      },
      {
        // 사업소개2
        path: '/business/businessVue_2',
        name: 'BusinessVue_2',
        component: BusinessVue_2
      },
      {
        // 사업소개3
        path: '/business/businessVue_3',
        name: 'BusinessVue_3',
        component: BusinessVue_3
      }
    ]
  },
  {
    // 제품소개
    path: '/product',
    name: 'ProductVue',
    component: ProductVue,
    redirect: "/business/productVue_1",
    children: [
      {
        // 제품소개1
        path: '/product/productVue_1',
        name: 'ProductVue_1',
        component: ProductVue_1
      },
      {
        // 제품소개2
        path: '/product/productVue_2',
        name: 'ProductVue_2',
        component: ProductVue_2
      },
      {
        // 제품소개3
        path: '/product/productVue_3',
        name: 'ProductVue_3',
        component: ProductVue_3
      },
    ]
  },
  {
    // 고객센터
    path: '/cs',
    name: 'CsVue',
    component: CsVue,
    redirect: "/cs/notice",
    children: [
      {
        // 공지사항
        path: '/cs/notice',
        name: 'Notice',
        redirect: "/cs/notice/list",
        component: Notice,
        children: [
          {
            // 공지사항 목록
            path: '/cs/notice/list',
            name: 'NoticeList',
            component: NoticeList
          },
          {
            // 공지사항 수정
            path: '/cs/notice/modify',
            name: 'NoticeModify',
            component: NoticeModify
          },
          {
            // 공지사항 본문 내용
            path: '/cs/notice/read',
            name: 'NoticeRead',
            component: NoticeRead
          },
          {
            // 공지사항 글쓰기
            path: '/cs/notice/write',
            name: 'NoticeWrite',
            component: NoticeWrite
          }
        ]
      },
      {
        // 온라인 상담
        path: '/cs/onlinechat',
        name: 'OnlineChat',
        redirect: "/cs/onlinechat/list",
        component: OnlineChat,
        children: [
          {
            // 온라인 상담 목록
            path: '/cs/onlinechat/list',
            name: 'OnlineChatList',
            component: OnlineChatList
          },
          {
            // 온라인 상담 수정
            path: '/cs/onlinechat/modify',
            name: 'OnlineChatModify',
            component: OnlineChatModify
          },
          {
            // 온라인 상담 본문 내용
            path: '/cs/onlinechat/read',
            name: 'OnlineChatRead',
            component: OnlineChatRead
          },
          {
            // 온라인 상담 글쓰기
            path: '/cs/onlinechat/write',
            name: 'OnlineChatWrite',
            component: OnlineChatWrite
          },
        ]
      },
      {
        // 질문과답변
        path: '/cs/qna',
        name: 'QnA',
        redirect: "/cs/qna/list",
        component: QnA,
        children: [
          {
            // 온라인 상담 목록
            path: '/cs/qna/list',
            name: 'QnAList',
            component: QnAList
          },
          {
            // 온라인 상담 수정
            path: '/cs/qna/modify',
            name: 'QnAModify',
            component: QnAModify
          },
          {
            // 온라인 상담 본문 내용
            path: '/cs/qna/read',
            name: 'QnARead',
            component: QnARead
          },
          {
            // 온라인 상담 글쓰기
            path: '/cs/qna/write',
            name: 'QnAWrite',
            component: QnAWrite
          },
        ]
      },
      {
        // 갤러리
        path: '/cs/gallery',
        name: 'Gallery',
        component: Gallery
      }
    ]
  }

  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

import store from "@/store"

router.beforeEach((to, from, next)=>{
  if(to.meta.manager && !store.state.chkManager){
    alert('접근 권한이 없습니다.');
    next('/');
    return;
  }
  next();
});

export default router
