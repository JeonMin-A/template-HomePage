<template lang="">
    <div class="py-24 pt-48 text-center basis-full">
        <h3 class="text-3xl font-bold mb-5 relative after:absolute after:w-5 after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">{{title[3]}}</h3>
        <p class="text-gray-400">{{desc[3]}}</p>
    </div>
    <div class="basis-full pb-24">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.2107484881926!2d128.59147864080384!3d35.86835191978546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3c3dd62828f%3A0xb36b33bf2f38782a!2z6re466aw7Lu07ZOo7YSw7JWE7Yq47ZWZ7JuQIOuMgOq1rOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1682581645127!5m2!1sko!2skr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="basis-full pb-24">
        <div class="mt-5">
            <p><span class="text-lg font-bold">A. </span>대구광역시 중구 중앙대로 394 제일 빌딩 5F</p>
            <p><span class="text-lg font-bold">T. </span>053-572-1005</p>
        </div>
        <div class="mt-5 border-t">
            <h3 class="py-5 font-bold text-xl">버스 이용시</h3>
            <p>급행 1번 중앙로역 하차 걸어오기</p>
            <p>급행 3번 중앙로역 하차 걸어오기</p>
            <p>급행 4번 중앙로역 하차 걸어오기</p>
            <p>급행 5번 중앙로역 하차 걸어오기</p>
        </div>
        <div class="mt-5 border-t">
            <h3 class="py-5 font-bold text-xl">지하철 이용시</h3>
            <p>1호선 반월당역 하차 - 몇번 출구 - 도보 2km</p>
            <p>1호선 반월당역 하차 - 몇번 출구 - 도보 2km</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "DirectionsView",
    props: {
        title: Array,
        desc: Array
    }
}
</script>
<style lang="">
    
</style>