<template>
	<div id="app">
		<monitor-header></monitor-header>
		<h1>{{msg}}</h1>
		<monitor-footor></monitor-footor>
	</div>
</template>

<script>
	import Header from './Header.vue';
	import Footor from './Footor.vue';
	export default {
		data() {
			return {
				msg: '管理用户应用'
			}
		},
		components: {
			'monitor-header': Header,
			'monitor-footor': Footor
		},
	}
</script>

<style>
</style>
