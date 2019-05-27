import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import {store} from './store/store';
import BootstrapVue from 'bootstrap-vue'



Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VeeValidate);
Vue.use(wysiwyg, {});
Vue.use(BootstrapVue);


Vue.config.productionTip = false

const authData = localStorage.getItem('auth');

new Vue({
  data:{
    auth : authData ? JSON.stringify(authData) : {}
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
