import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'

import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: process.env.VUE_APP_BAIDU_MAP_AK
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
