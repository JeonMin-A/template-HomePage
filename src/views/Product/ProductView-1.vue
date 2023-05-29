<template lang="">
    <div class="py-24 pt-48 text-center basis-full">
        <h3
        class="text-3xl font-bold mb-5 relative after:absolute inline-block after:w-[80%] after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">
        {{ title[0] }}</h3>
        <p class="text-gray-400">{{ desc[0] }}</p>
        <div class="pt-24 basis-full flex flex-wrap justify-between">
            <div v-for="e in dataList" :key="e" class="basis-full sm:basis-[49.5%] lg:basis-[23.5%] relative mb-3 sm:mb-5 lg:mb-0 overflow-hidden group mt-20">
                <!-- 이미지 영역 -->
                <img :src="e.img" :alt="e.name" class="w-full hover:scale-125 transition duration-500 ease-in-out">
                <!-- 텍스트 -->
                <div class="absolute bottom-0 py-4 bg-white/40 px-5 text-center w-full opacity-60 text-sm">
                    <h3 class="font-bold mb-2">{{e.name}}</h3>
                    <p class="line-clamp-2">{{e.price}}</p>
                    </div>
            </div>
        </div>
    </div>
    <!-- <button @click="$store.commit('NumberPlus')">버튼</button>
    <button @click="$store.commit('NumberPlus')">버튼</button> -->
<!-- {{ dataList }} -->
</template>
<script>
import {db} from "../../firebase"

export default {
    name: "ProductView_1",
    props: {
        title: Array,
        desc: Array
    },
    data() {
        return {
            dataList: [],
            BoardContent: [],
        }
    },
    mounted() {
        // db.콜렉션("디비이름").get().then((데이터)=>{반복문 실행})
        db.collection("product").get().then((data)=>{
            data.forEach((e)=>{
                console.log(e.data())
                this.dataList.push(e.data())
            })
        })
    },
}
</script>
<style lang="">
    
</style>