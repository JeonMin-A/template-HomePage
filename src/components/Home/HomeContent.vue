<template>
    <div class="basis-full mt-24 text-center mb-5">
        <h3 class="text-2xl font-bold mb-4">컨텐츠 제목 구간</h3>
        <p class="text-sm text-gray-400">해당 컨텐츠 설명 구간</p>
    </div>
    <div class="basis-full flex flex-wrap justify-between">
        <div v-for="e in HomeContent" :key="e" class="basis-full sm:basis-[49.5%] lg:basis-[23.5%] relative mb-3 sm:mb-5 lg:mb-0">
            <img :src="e.img" :alt="e.title" class="w-full">
            <div class="absolute bottom-0 py-4 bg-white/20 px-5 text-center">
                <h3 class="font-bold mb-2">{{ e.title }}</h3>
                <p class="line-clamp-2">{{ e.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import HomeContent from "../../assets/data.json"

export default {
    name: "HomeContent",
    data() {
        return {
            HomeContent: HomeContent.Content_1
        }
    },
}
</script>

<style>
    
</style>