<template lang="">
    <div class="py-24 pt-48 text-center basis-full">
        <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-5 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">{{title[2]}}</h3>
        <p class="text-gray-400">{{desc[2]}}</p>
    </div>
    <div class="pb-24 basis-full flex flex-wrap gap-x-3">
        <div v-for="e in dataList" :key="e" class="basis-full sm:basis-[49%] lg:basis-[32.5%]">
            <img :src="e.img" :alt="e.tiele" class="w-full">
            <p class="py-5">{{e.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "InteriorView",
    props: {
        title: Array,
        desc: Array
    },
    data() {
        return {
            dataList: [
                {
                    img: "https://via.placeholder.com/500",
                    title: "사무실 내부"
                },
                {
                    img: "https://via.placeholder.com/500",
                    title: "사무실 내부"
                },
                {
                    img: "https://via.placeholder.com/500",
                    title: "사무실 내부"
                },
                {
                    img: "https://via.placeholder.com/500",
                    title: "사무실 내부"
                },
                {
                    img: "https://via.placeholder.com/500",
                    title: "사무실 내부"
                },
                {
                    img: "https://via.placeholder.com/500",
                    title: "사무실 내부"
                }
            ]
        }
    },
}
</script>
<style lang="">
    
</style>