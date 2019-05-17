<template>
	<div id="app">
		<center>
			<el-container>
				<el-header>
					<monitor-header></monitor-header>
				</el-header>
				<el-main>
					<el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="monitor-registerForm">
						<el-form-item label="帐户名称" prop="account">
							<el-input v-model="registerForm.account" maxlength="16" show-word-limit></el-input>
						</el-form-item>
						<el-form-item label="帐号密码" prop="password">
							<el-input v-model="registerForm.password"></el-input>
						</el-form-item>
						<el-form-item label="身份证号" prop="idNum">
							<el-input v-model="registerForm.idNum" placeholder="请输入有效的身份证号"></el-input>
						</el-form-item>
						<el-form-item label="真实姓名" prop="perName">
							<el-input v-model="registerForm.perName"></el-input>
						</el-form-item>
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="registerForm.email"></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="phone">
							<el-input v-model="registerForm.phone"></el-input>
						</el-form-item>
						<el-form-item label="昵称" prop="nickName">
							<el-input v-model="registerForm.nickName"></el-input>
						</el-form-item>
						<el-form-item label="头像" prop="avatar">
							<el-input v-model="registerForm.avatar"></el-input>
						</el-form-item>
						<el-form-item label="工号" prop="empNo">
							<el-input v-model="registerForm.empNo"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm('registerForm')">立即注册</el-button>
							<el-button @click="resetForm('registerForm')">重置</el-button>
						</el-form-item>
					</el-form>
				</el-main>
				<el-footer>
					<monitor-footor></monitor-footor>
				</el-footer>
			</el-container>
		</center>
	</div>
</template>

<script>
	import Header from './Header.vue';
	import Footor from './Footor.vue';
	import Axios from 'axios';
	export default {
		data() {
			return {
				registerForm: {
					account: '',
					loginPassword: '',
					idnum: '',
					perName: '',
					email: '',
					phone:'',
					nickName:'',
					avatar:'',
					empNo:''
				},
				rules: {
					account: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 16,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					idNum:[
						{
							required:true,
							message:'请输入身份证号',
							trigger:'blur'
						},
						{
							
						}
					]
					}
			};
		},
		components: {
			'monitor-header': Header,
			'monitor-footor': Footor
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						var params = new URLSearchParams();
						params.append('account',this.registerForm.account);
						params.append('password',this.registerForm.loginPassword);
						params.append('idnum',this.registerForm.idNum);
						params.append('perName',this.registerForm.perName);
						params.append('email',this.registerForm.email);
						params.append('phone',this.registerForm.phone);
						params.append('nickName',this.registerForm.nickName);
						params.append('avatar',this.registerForm.avatar);
						params.append('empNo',this.registerForm.empNo);
						Axios.post('/apis/ma/monitorUser/register', params)
							.then(response=> {
								alert(response);
							})
							.catch(error=>{
								alert(error);
							});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped>
	.el-main {
		width: 62.5rem;
		height: 42rem;
	}
</style>
