<template>
	<div class="wrapper">
		<f-nav zooming/>
		<router-view />
		<f-footer />
	</div>
</template>

<script>
import FNav from '../components/Nav.vue';
import FFooter from '../components/Footer.vue';

export default {
	name: 'Main',
	components: { FNav, FFooter }
}
</script>
<style scoped>
.wrapper .global-nav {
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
}
</style>
