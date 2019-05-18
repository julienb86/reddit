import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify'

Vue.use(Vuetify);

Vue.use(VeeValidate);

Vue.config.productionTip = false

const authData = localStorage.getItem('auth');

new Vue({
  router,
  data: {
    auth : authData ? JSON.parse(authData) : {}
},
  render: h => h(App),
}).$mount('#app')
