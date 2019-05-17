import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 使用ElementUI
Vue.use(ElementUI)
//引入系统路由配置
import router from './router/router.js'

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
