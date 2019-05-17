<template>
	<div id="app">
		<monitor-header></monitor-header>
		<h2>请在此处注册应用</h2>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="应用名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="应用图标">
				<el-input v-model="form.icon"></el-input>
			</el-form-item>
			<el-form-item label="应用排序">
				<el-input v-model="form.disIndex"></el-input>
			</el-form-item>
			<el-form-item label="应用描述">
				<el-input v-model="form.remark"></el-input>
			</el-form-item>
			<el-form-item label="应用域名">
				<el-input v-model="form.appDomain"></el-input>
			</el-form-item>
			<el-form-item label="负责人帐号">
				<el-select v-model="temp" placeholder="请选择负责人帐号">
					<el-option value = "以后指定">
					</el-option>
					<el-option v-for="item in this.form.directorAccounts" :key="item.id" :label="item.account" :value="item.perName">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
		<monitor-footor></monitor-footor>
	</div>
</template>

<script>
	import Header from './Header.vue';
	import Footor from './Footor.vue';
	import Axios from 'axios';
	import storage from '../storage/storage.js'
	export default {
		data() {
			return {
				LoginUser: storage.get('loginUser'),
				temp:'',
				form: {
					name: '',
					icon: '',
					disIndex: '',
					remark: '',
					appDomain: '',
					directorAccount:'',
					directorAccounts: [],
					directorAccountTotal: 0
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
				var params = new URLSearchParams();
				params.append('name', this.form.name);
				params.append('icon', this.form.icon);
				params.append('disIndex', this.form.disIndex);
				params.append('remark', this.form.remark);
				params.append('appDomain', this.form.appDomain);
				params.append('directorAccount', this.temp)
				Axios.post('/apis/ma/monitorApp/registerApp', params)
					.then(response => {
						
					})
					.catch(error => {
						alert(error);
					});
			}
		},
		components: {
			'monitor-header': Header,
			'monitor-footor': Footor
		},
		beforeMount() {
			Axios.post('/apis/ma/monitorUser/loadMonitorUserDataSet', '')
				.then(response => {
					this.form.directorAccountTotal = response.data.data.dataSet.total;
					this.form.directorAccounts = response.data.data.dataSet.rows;

					console.log(this.form.directorAccounts);
				})
				.catch(error => {
					alert(error);
				});
		}
	}
</script>

<style>
</style>
