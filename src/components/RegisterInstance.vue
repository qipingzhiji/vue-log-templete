<template>
	<div id="app">
		<monitor-header></monitor-header>
		{{msg}}
		<monitor-footor></monitor-footor>
	</div>
</template>

<script>
	import Header from './Header.vue';
	import Footor from './Footor.vue';
	export default {
		data() {
			return {
				msg: '注册实例'
			}
		},components: {
			'monitor-header':Header,
			'monitor-footor':Footor
		},
	}
</script>

<style>
</style>
