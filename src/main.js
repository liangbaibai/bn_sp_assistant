import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'nprogress/nprogress.css';
import moment from 'moment'

import axios from 'axios';
Vue.prototype.$axios = axios;

//ElementUi
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);
Vue.prototype.$moment = moment;//moment(时间格式化)
//vant
import Vant from 'vant';
import 'vant/lib/index.less'
Vue.use(Vant);


Vue.config.productionTip = false;
Vue.config.devtools = true;
window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
