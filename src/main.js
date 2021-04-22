import Vue from 'vue'
import App from './login.vue'

// bootstrap vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// bootstrap vue

Vue.config.productionTip = false
//#ES6寫法
new Vue({
  render: h => h(App),
}).$mount('#app')
// #ES5寫法
//STEP1:
// render: function (createElement) {
//     return createElement(App);
// }

//STEP2:
// render (createElement) {
//   return createElement(App);
// }

//STEP3:
// render (h){
//   return h(App);
// }

//STEP4:
//ES6
// render: h => h(App)
// }

// h means It comes from the term 'hyperscript', which is commonly used in many virtual-dom implementations. 'Hyperscript' itself stands for 'script that generates HTML structures' because HTML is the acronym for 'hyper-text markup language'