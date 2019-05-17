<template>
	<div id="app">
		<center>
			<el-container>
				<el-header>当前登录用户为:{{user}}</el-header>
				<el-main>
					
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
	import storage from '../storage/storage.js';
	export default {
		data() {
			return {
				user:storage.get('loginUser')
			}
		},components:{
			'monitor-footor':Footor
		},mounted() {
			
		}
	}
</script>

<style>
</style>
