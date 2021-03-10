import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import store from './js/store'
import vuetify from './js/plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')