import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";


Vue.use(VeeValidate);
Vue.use(wysiwyg, {});



Vue.config.productionTip = false

const authData = localStorage.getItem('auth');

new Vue({
  router,
  data: {
    auth : authData ? JSON.parse(authData) : {}
},
  render: h => h(App),
}).$mount('#app')
