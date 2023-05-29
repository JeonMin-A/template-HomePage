<template>
  <NavCom />
  <router-view/>
  <FooterCom />
</template>

<script>
import {auth} from "./firebase"

import NavCom from '../src/components/NavCom.vue'
import FooterCom from '../src/components/FooterCom.vue'

export default {
  name: 'App',
  components: {
    NavCom,
    FooterCom,
  },
  data() {
    return {
      displayName: sessionStorage.getItem("displayName"),
      uid: sessionStorage.getItem("uid")
    }
  },
  mounted() {
   
    auth.onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
        this.$store.commit('loginState', {displayName:user.displayName, uid:user.uid}); //
      }
    })
  },
}
</script>

<style>

</style>
