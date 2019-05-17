import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

// 引入路由的源目录

import routes from './routeConfig.js'

//实例化vue-router
const router = new VueRouter({
	routes
})

export default router