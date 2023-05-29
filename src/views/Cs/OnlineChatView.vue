<template>
    <div class="py-24 pt-48 text-center basis-full">
      <img :src="require(`@/assets/images/Consulting.png`)" alt="온라인상담" class="w-[150px] mx-auto mb-10">
      <h3
        class="text-3xl font-bold mb-5 relative after:absolute inline-block after:w-[80%] after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">
        {{ title[1] }}</h3>
      <p class="text-gray-400">{{ desc[1] }}</p>
    </div>
    <router-view></router-view>
  </template>
  
  <script>
    export default {
      name: 'OnlineChatView',
      props: {
        title: Array,
        desc: Array
      }
    }
  </script>
  
  <style>
  
  </style>