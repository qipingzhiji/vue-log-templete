import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import RegisterApp from '../components/RegisterApp.vue'
import RegisterInstance from '../components/RegisterInstance.vue'
import ManagerApp from '../components/ManagerApp.vue'
import Context from '../components/Context.vue'
import ApplicationManager from '../components/ApplicationManager.vue'
import InstanceManager from '../components/InstanceManager.vue'
import InformationManager from '../components/InformationManager.vue'
//配置路由
const routes = [{
		path: '/login',
		component: Login
	},
	{
		path: '/register',
		component: Register
	},
	{
		path:'/registerApp',
		component:RegisterApp
	},
	{
		path:'/registerInstance',
		component:RegisterInstance
	},{
		path:'/managerApp',
		component: ManagerApp
	},{
		path:'/context',
		component: Context
	},{
		path:'/applicationManager',
		component: ApplicationManager
	},
	{
		path:'/instanceManager',
		component: InstanceManager
	},
	{
		path:'/informationManager',
		component: InformationManager
	}
]

export default routes