<template>
    <div class="sticky bg-white top-0 w-full border-b-2 border-b-white/30 z-40">
        <div class="max-w-7xl mx-auto flex justify-between items-center py-2.5 px-[2%]">
            <div>
                <!-- 로고 영역 -->
                <router-link to="/">
                    <img src="https://via.placeholder.com/120x60" alt="로고">
                </router-link>
                <!-- 로고 영역 -->
            </div>
            <div class="hidden lg:flex justify-between basis-2/3">
        <ul class="flex basis-2/3 justify-between">
            <li v-for="(e,index) in NavList[0]" :key="e" class="relative basis-1/4 text-center" @mouseover="NavSelectIndex = index; SubMenu(index)" @mouseout="NavSelectIndex = null" :class="NavSelectIndex === index && 'font-bold'">
            <router-link :to="NavList[1][index]" class="text-base hover:font-bold">{{ e }}  <font-awesome-icon class="transition-all duration-500 text-xs align-baseline" :class="NavSelectIndex === index && 'rotate-180'" icon="chevron-down"/></router-link>
            <ul class="absolute w-36 bg-slate-800 h-0 overflow-hidden transition-all duration-500 nav_sub" :style="NavSelectIndex === index && isSubMenu">
                <li class="py-2.5 font-normal" v-for="(el,i) in SubList[index]" :key="el">
                <router-link :to="SubMenuLink[index][i]" class="text-sm text-white/90 hover:font-bold">{{ el }}</router-link>
                </li>
            </ul>
            </li>
        </ul>
                <!-- Nav 메뉴 영역 -->
                <!-- 유저 메뉴 영역 -->
                <ul class="flex gap-x-5">
                    <li v-if="!$store.state.loginChk"><router-link to="/login" class="text-sm "><font-awesome-icon icon="lock"/>&nbsp;로그인</router-link></li>
                    <!-- {{ LoginChk }} -->
                    <li v-else @click="logOut"><router-link to="/" class="text-sm"><font-awesome-icon icon="arrow-right-from-bracket"/>&nbsp;로그아웃</router-link></li>
                    <li v-if="!$store.state.loginChk"><router-link to="/member" class="text-sm"><font-awesome-icon icon="user"/>&nbsp;회원가입</router-link></li>
                    <li v-else>
                        <router-link to="/mypage" v-if="this.$store.state.uid != this.$store.state.adminUid" class="text-sm"><font-awesome-icon icon="user"/>&nbsp;마이페이지</router-link>
                        <router-link to="/admin" v-else>관리자 페이지</router-link>
                    </li>
                    <!-- 관리자 페이지 -->
                    <!-- <li><router-link to="/admin">관리자 페이지</router-link></li> -->
                </ul>
                <!-- 유저 메뉴 영역 -->
            </div>
        </div>
    <!-- 햄버거 -->
    <div class="absolute right-4 md:right-8 top-6 duration-1000 transition-all z-50 cursor-pointer lg:hidden" @click="isOpen == true ? isOpen = false : isOpen = true" :class="isOpen && 'on'">
        <div v-for="e in 3" :key="e" class="w-[30px] h-0.5 bg-black rounded m-1.5 transition-all duration-1000"></div>
    </div>
    <div class="w-80 h-full fixed bg-gray-100 z-40 -right-80 p-12 box-border transition-all duration-500 top-0 lg:hidden overflow-y-scroll" :class="isOpen && '!right-0'">
        <!-- 메뉴 -->
        <ul class="mt-12">
            <!-- 서브메뉴 -->
            <li class="py-5 border-b relative cursor-pointer font-bold" v-for="(e, index) in NavList[0]" :key="e" @click="NavSelectIndex = index; SubMenu(index)">{{ e }} <font-awesome-icon icon="chevron-down" class="transition-all duration-500 text-xs align-baseline absolute right-5 top-6" :class="NavSelectIndex === index && RotateClass" />
                <template v-for="(e, i) in SubList" :key="e">
                    <ul v-if="index === i" class="flex flex-wrap justify-between sub_list overflow-hidden transition-all duration-300" style="height: 0px;" :style="NavSelectIndex === index && `height: ${SubHeight}`">
                        <li v-for="(el, i) in e" :key="el" class="basis-full text-xs hover:text-[#37a2d7]">
                            <router-link @click="isOpen = false" :to="SubMenuLink[index][i]" class="first-of-type:pt-5 pl-5 pt-2 inline-block w-full">{{ el }}</router-link>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
import {auth} from "../firebase"

import NavData from '../assets/data.json'

export default {
    name: "NavCom",
    data() {
        return {
            NavList: NavData.Nav,
            SubList: NavData.SubMenu,
            SubMenuLink : NavData.SubMenuLink,
            LoginChk: false,
            NavSelectIndex: null,
            SubHeight: '0px',
            RotateClass: '',
            windowWidth: 0,
            isOpen: false,
            isSubMenu: false,
        }
    },
    methods: {
        windowUPdateWidth(){
            this.windowWidth = window.innerWidth;
        },
        SubMenu(e){
            
                const list = document.querySelectorAll(".sub_list")[e];
                const length = list.querySelectorAll("li").length;
                console.log(length)

                    this.isSubMenu = `height:${length*44}px`; //세로길이값

                    if(list.style.height === '0px'){
                    list.style.height = `${length*40}px`;
                    this.RotateClass = 'rotate-180'
                    }else{
                    list.style.height = '0px';
                    this.RotateClass = ''
                    }

                    this.SubHeight = list.style.height;
            
        },
        logOut(){
            auth.signOut();
            this.$store.commit('logOutToken')
        },
        // AdminLog(){
        //     auth.signOut();
        //     this.$store.commit('AdminLogOutToken')
        // }
    },
    // 요소가 바뀌는걸 체크해줌
    watch: {
        windowWidth(el){
            if(el < 1024){
                this.NavSelectIndex = null;
                this.isOpen = false
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.windowUPdateWidth)
        //마운트가 되었을 때 윈도우에 이벤트 추가 > 만약에 사이즈가 변경되면, 메소드 내 이벤트를 실행
    },
}
</script>

<style>
    .on div:nth-child(1){
        transform: rotate(45deg) translateY(12px);
    }
    .on div:nth-child(2){
        opacity: 0;
        transform: translateX(-30px) rotate(720deg);
    }
    .on div:nth-child(3){
        transform: rotate(-45deg) translateY(-12px);
    }
</style>