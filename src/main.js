import Vue from 'vue';
import ReadMore from 'vue-read-more';
import App from './App.vue';
import router from './router';
 
Vue.use(ReadMore);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
