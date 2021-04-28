<template>
	<div class="wrapper">
		<f-nav :class="{zoom}" />
		<router-view />
		<f-footer />
	</div>
</template>

<script>
import FNav from '@/components/Nav.vue';
import FFooter from '@/components/Footer.vue';

export default {
	name: 'Main',
	components: { FNav, FFooter },
	data: () => ({
		scroll: 0
	}),
	computed: {
		zoom () {
			return this.scroll <= 70;
		}
	},
	mounted () {
		window.addEventListener('scroll', () => {
			this.scroll = window.scrollY
		})
	}
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