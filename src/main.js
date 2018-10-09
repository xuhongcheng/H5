import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/index.styl'
import '@/permission.js'//路由守卫
import store from './store'
import utils from '@/utils/index.js'
Vue.use(utils);
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
