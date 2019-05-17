<template>

	<div id="app">
		<monitor-header></monitor-header>
		<center>
			<el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="monitor-loginForm"
			 size="medium">
				<el-form-item label="登录帐号" prop="loginName" style="width: 22.5rem;">
					<el-input type="input" v-model="loginForm.loginName" autocomplete="off" autofocus="true"></el-input>
				</el-form-item>
				<el-form-item label="登录密码" prop="loginPassword" style="width: 22.5rem;">
					<el-input type="password" v-model="loginForm.loginPassword" autocomplete="off" @keydown.native="enterLogin($event)"></el-input>
				</el-form-item>
				<el-form-item style="width: 22.5rem;">
					<el-button type="primary" @click="userLogin('loginForm')">登录</el-button>
					<el-button @click="register('loginForm')">注册新帐号</el-button>
				</el-form-item>
			</el-form>
		</center>
		<monitor-footor></monitor-footor>
	</div>

</template>
<script>
	import Header from './LoginBackground.vue';
	import Footor from './Footor.vue';
	import Axios from 'axios';
	import storage from '../storage/storage.js';
	export default {
		data() {
			var validateLoginName = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入登录帐号'));
				} else {
					if (this.loginForm.loginPassword !== '') {
						this.$refs.loginForm.validateField('loginPassword');
					}
					callback();
				}
			};
			var validatePassword = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					callback();
				}
			};
			return {
				loginForm: {
					loginName: '',
					loginPassword: ''
				},
				rules: {
					loginName: [{
						validator: validateLoginName,
						trigger: 'blur'
					}],
					loginPassword: [{
						validator: validatePassword,
						trigger: 'blur'
					}]
				}
			};
		},
		components: {
			'monitor-header': Header,
			'monitor-footor': Footor
		},
		methods: {
			userLogin(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						var params = new URLSearchParams();
						params.append('account', this.loginForm.loginName);
						params.append('password', this.loginForm.loginPassword);
						Axios.post('/apis/ma/monitorUser/login', params)
							.then(response => {
								console.log(response.data.message);
								if (response.data.message === '登录成功') {
									storage.set('loginUser', this.loginForm.loginName);
									console.log(storage.get('loginUser'));
									this.$router.push({
										path: 'context'
									});
								}
							})
							.catch(error => {
								alert(error);
							});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			register(formName) {
				this.$router.push({
					path: 'register'
				});
			},
			enterLogin(e) {
				if(e.keyCode === 13) {
					this.userLogin('loginForm');
				}
			}
		}
	}
</script>

<style scoped>

</style>
