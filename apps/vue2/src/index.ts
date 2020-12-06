/*
 * @Author: your name
 * @Date: 2020-12-04 16:50:46
 * @LastEditTime: 2020-12-06 11:48:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/index.js
 */

import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ShowCount from './page/ShowCount/index.vue'
import Time from './page/Time/index.vue'

Vue.use(ElementUI)
new Vue({
  el: '#RootVue',
  store,
  components: {
    ShowCount,
    Time
  },
  template: '<div id="RootVue"><Time /></div>'
})
