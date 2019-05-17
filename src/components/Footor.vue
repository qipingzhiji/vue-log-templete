<template>
	<div id="app">
		<center>
			<h4>这是页脚----{{msg}}</h4>
		</center>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '自定义展示'
			}
		},
	}
</script>

<style scoped>
	#app {
		font-size: 1.25;
		text-align: center;
		color: blue(color: #000000)
	}
</style>
