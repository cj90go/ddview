import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'
import mavonEditor from 'mavon-editor'
import VueParticles from 'vue-particles'



Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(mavonEditor)
Vue.use(VueParticles)

new Vue({
  render: h => h(App),
}).$mount('#app')
