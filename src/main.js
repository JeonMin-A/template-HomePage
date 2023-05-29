import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./index.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightFromBracket, faBuilding, faChevronDown, faCircleArrowUp, faPaperPlane, faUser,faHistory, faLock, faMedal, faDesktop, faComment, faTaxi, faMobile, faThumbsUp, faThumbsDown, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueNumber from 'vue-number-animation'

library.add(faChevronDown, faBuilding, faHistory, faPaperPlane, faMedal, faLock, faUser, faArrowRightFromBracket, faCircleArrowUp, faDesktop, faComment, faTaxi, faMobile, faThumbsUp, faThumbsDown )

VueNumber

createApp(App).use(VueNumber).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
