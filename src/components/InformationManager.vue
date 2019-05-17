<template>
	<div id="app">
		<el-container>
			<el-header>
				<h1>当前登录用户：{{user}}</h1>
			</el-header>
			<el-main>Main</el-main>
			<el-footer>
				<monitor-footor></monitor-footor>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import Footer from './Footor.vue';
	import storage from '../storage/storage.js';
	export default{
		data() {
			return {
				user: storage.get('loginUser')
			}
		},components:{
			'monitor-footor': Footer
		},
		
	}
</script>

<style>
</style>
