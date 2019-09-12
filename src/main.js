import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.component('game',require('./components/Game.vue').default);
Vue.component('app',require('./App.vue').default);
new Vue({
  render: h => h(App),
}).$mount('#app')
