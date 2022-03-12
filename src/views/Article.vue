<template>
	<div class="wrapper">
		<f-nav />
		<article>
			<slot v-if="noRouter" />
			<router-view v-else />
		</article>
		<f-footer />
	</div>
</template>
<script>
import FNav from '../components/Nav.vue';
import FFooter from '../components/Footer.vue';

export default {
	name: 'Article',
	props: {
		noRouter: {
			type: Boolean,
			default: false
		}
	},
	components: { FNav, FFooter }
}
</script>
<style scoped>
.wrapper {
	width: 100%;
	color: white;
}

.wrapper .global-nav {
	position: sticky;
	top: 0;
}

.wrapper article {
	padding: 0 20px;
	max-width: 700px;
	width: 100%;
	box-sizing: border-box;
	margin: 20px auto;
	min-height: 70vh;
}
</style>
