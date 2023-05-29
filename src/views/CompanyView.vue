<template>
    <div class="w-full">
        <div class="max-7xl mx-auto flex flex-wrap px-[2%]">
            <router-view :title="ArrayTitle" :desc="ArrayDesc"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompanyView",
    data() {
        return {
            ArrayTitle: ["인사말", "연혁", "내부전경", "오시는길"],
            ArrayDesc: ["인사말 서브메세지", "연혁 서브메세지", "내부전경 메세지", "오시는길 메세지" ]
        }
    },
}
</script>

<style>
    
</style>