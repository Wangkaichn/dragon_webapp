/*
 * @Author: your name
 * @Date: 2020-12-06 11:44:33
 * @LastEditTime: 2020-12-06 11:58:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /DragonWebapp/dragon_webapp/apps/vue2/src/page/Time/index.module.js
 */
import moment from 'moment'
import styles from './index.module.scss'

export default {
  data() {
    return {
      time: null,
      timer: null,
      styles
    }
  },
  beforeMount: function () {
    this.timer = setInterval(() => {
      this.time = moment().format('hh:mm:ss')
    }, 500)
  },
  destroyed: () => {
    clearInterval(this.timer)
  }
}
