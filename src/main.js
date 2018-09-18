import Vue from 'vue'


//按需导入mint-ui组件Header
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

//按需导入mint-ui组件Tabbar
import './lib/mui/css/mui.min.css'


import app from './App.vue'

var vm=new Vue({

  el:"#app",
  render: c=>c(app)

})