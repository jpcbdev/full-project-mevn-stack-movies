import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import router from './routes/router';
import 'bulma/css/bulma.min.css';
import './plugins/aos.js'
import './plugins/sidenav.js'
import Toasted from 'vue-toasted';

Vue.use(VueRouter);
Vue.use(Toasted, {
  theme: "toasted-primary",
  position: "top-right",
  duration: 5000
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')