import Vue from 'vue'
import App from './App.vue'
import router from './router'
import getintouchnav from './components/getintouchnav.vue'
import footer from './components/footer.vue'

Vue.config.productionTip = false

Vue.component('get-in-touch-nav', getintouchnav);
Vue.component('footer-bar', footer);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
