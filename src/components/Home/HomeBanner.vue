<template>
    <swiper class="h-auto sm:h-[640px]" effect="fade" :modules="Modules" :autoplay="true && {delay: 3000}" :loop="true" :navigation="{prevEl:'.swiper-button-prev', nextEl:'.swiper-button-next'}" :pagination="{type:'fraction'}" @slideChange="onSlideChange">
        <swiper-slide v-for="(e, index) in 5" :key="index" class="relative">
            <img :src="require(`@/assets/images/banner-${index+1}.png`)" :alt="e" class="w-full h-full">
            <div class="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white">
                <h3 class="text-base sm:text-3xl lg:text-5xl wow animate__fadeInDown text-center" data-wow-duration="1s">강조하는 제목 {{index+1}}</h3>
                <p data-wow-duration="1s" class="wow animate__fadeInUp text-sm lg:text-2xl sm:text-xl text-center font-bold mt-4">부가적인 설명 .....</p>
                <p data-wow-duration="1s" class="wow animate__fadeInUp text-sm lg:text-2xl sm:text-xl text-center font-bold">내용이 더 있다면 보여주기</p>
                <router-link to="/" data-wow-duration="1s" class="bg-slate-400 px-10 py-2 block mx-auto w-32 mt-4 rounded-lg wow animate__fadeInUp text-center text-sm lg:text-base">More</router-link>
            </div>
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation, EffectFade, Autoplay, Pagination} from 'swiper'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import WOW from 'wowjs';
import 'animate.css'

export default {
    name: "HomeBanner",
    data() {
        return {
            Modules: [Navigation, EffectFade, Autoplay, Pagination]
        }
    },
    components:{
        Swiper,
        SwiperSlide
    },
    mounted() {
        new WOW.WOW({
            boxClass: "wow",
            animateClass: "animate__animated", // underbar 두개 꼭 해야됨
            live: false,
            mobile: true
        }).init();
    },
    methods: {
        onSlideChange(){
            new WOW.WOW({
                live: false
            }).init()
        }
    },
}
</script>

<style>
    .swiper-pagination.swiper-pagination-fraction{
        background-color: rgba(255, 255, 255, 0.5);
        width: auto;
        left: 50%;
        transform: translateX(-50%);
        padding: 2px 35px;
        letter-spacing: 3px;
        border-radius: 20px;
        font-weight: bold;
        /* color: #fff; */
    }

    /* 반응형 */
    @media screen and (max-width: 1024px){
        .swiper-pagination.swiper-pagination-fraction,
        .swiper-pagination.swiper-pagination-fraction span{
            font-size: 16px;
        }
    }
    @media screen and (max-width: 640px){
        .swiper-pagination.swiper-pagination-fraction,
        .swiper-pagination.swiper-pagination-fraction span{
            font-size: 14px;
        }
    }
    .swiper-button-next::after,
    .swiper-button-prev::after{
        color: #fff;

    }
</style>