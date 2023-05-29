<template>
    <div class="py-24 pt-48 text-center basis-full">
      <h3
        class="text-3xl font-bold mb-5 relative after:absolute inline-block after:w-[80%] after:h-0.5 after:bg-slate-800 after:-bottom-2 after:left-2/4 after:-translate-x-2/4">
        {{ title[2] }}</h3>
      <p class="text-gray-400">{{ desc[2] }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductView_3',
    props: {
      title: Array,
      desc: Array
    },
    data() {
        return {
            dataList: []
        }
    },
  }
  </script>
  
  <style lang="scss" scoped></style>