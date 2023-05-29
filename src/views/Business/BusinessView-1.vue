<template lang="">
    <div class="py-24 pt-48 text-center basis-full">
        <h3 class="text-3xl font-bold mb-5 relative after:absolute inline-block after:w-[80%] after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">{{ title[0] }}</h3>
        <p class="text-gray-400">{{ desc[0] }}</p>
    </div>
    <div class="pb-24 basis-full flex flex-wrap gap-x-3.5">
        <div v-for="e in dataList" :key="e" class="basis-full sm:basis-[49%] lg:basis-[32.5%] text-center border rounded-md mb-5">
            <img :src="e.img" :alt="e.title">
            <h3 class="py-5 font-bold">{{ e.title }}</h3>
            <p class="pb-5">{{ e.desc }}</p>
            <!-- router link 가 a 로 바뀌는거라서 a 태그로 해도 가능 결과는 같지만 router link 는 일부 필요한 부분만 렌더링 되는 효과 -->
            <router-link to="/cs/onlinechat" class="bg-slate-800 px-5 py-2 text-white rounded-md inline-block mb-5">온라인 문의</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "BusinessView_1",
    props: {
        title: Array,
        desc: Array
    },
    data() {
        return {
            dataList: [
            {
            title: '홈페이지 제작1',
            desc: '홈페이지 제작관련 설명',
            img: 'https://via.placeholder.com/700x350'
          },
          {
            title: '홈페이지 제작2',
            desc: '홈페이지 제작관련 설명',
            img: 'https://via.placeholder.com/700x350'
          },
          {
            title: '홈페이지 제작3',
            desc: '홈페이지 제작관련 설명',
            img: 'https://via.placeholder.com/700x350'
          },
          {
            title: '홈페이지 제작4',
            desc: '홈페이지 제작관련 설명',
            img: 'https://via.placeholder.com/700x350'
          },
          {
            title: '홈페이지 제작5',
            desc: '홈페이지 제작관련 설명',
            img: 'https://via.placeholder.com/700x350'
          },
          {
            title: '홈페이지 제작6',
            desc: '홈페이지 제작관련 설명',
            img: 'https://via.placeholder.com/700x350'
          },
          {
            title: '홈페이지 제작7',
            desc: '홈페이지 제작관련 설명',
            img: 'https://via.placeholder.com/700x350'
          },
            ]
        }
    },
}
</script>
<style lang="">
    
</style>