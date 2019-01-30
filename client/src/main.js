import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import router from './routes/router';
import 'bulma/css/bulma.min.css';
import './plugins/aos.js'
import './plugins/sidenav.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')