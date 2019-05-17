<template>
	<div id="app">
		<center>
			<el-container>
				<el-header>
					<h1>欢迎登录本系统,当前登录用户为：{{user}}</h1>
				</el-header>
				<el-main>
						<router-link to="applicationManager">应用管理</router-link>&nbsp;&nbsp;&nbsp;
						<router-link to="instanceManager"> 实例管理</router-link>&nbsp;&nbsp;&nbsp;
						<router-link to="informationManager"> 个人信息管理</router-link>&nbsp;&nbsp;&nbsp;
				</el-main>
				<el-footer>
					<monitor-footor></monitor-footor>
				</el-footer>
			</el-container>
		</center>
	</div>
</template>

<script>
	import Footor from './Footor.vue';
	import storage from '../storage/storage.js'
	export default {
		data() {
			return {
				user: storage.get('loginUser')
			}
		},
		components: {
			'monitor-footor': Footor
		},
	}
</script>

<style>
</style>
