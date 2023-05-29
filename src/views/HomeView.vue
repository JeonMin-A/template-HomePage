<template>
  <Banner/>
  <div class="w-full py-24">
    <div class="max-w-7xl mx-auto flex flex-wrap px-[2%]">
      <Company/>
      <Content/>
      <Management/>
    </div>
  </div>
  <Different/>
  <Online/>
</template>

<script>
import Banner from '@/components/Home/HomeBanner.vue'
import Company from '@/components/Home/HomeCompany.vue'
import Content from '@/components/Home/HomeContent.vue'
import Different from '@/components/Home/HomeDifferent.vue'
import Management from '@/components/Home/HomeManagement.vue'
import Online from '@/components/Home/HomeOnline.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Company,
    Content,
    Different,
    Management,
    Online
  }
}
</script>
