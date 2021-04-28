<template>
	<router-link :to="to" :class="{'router-link-hash-match': hashMatch}">
		<slot />
	</router-link>
</template>
<script>
export default {
	name: 'NavLink',
	props: {
		to: {
			type: Object,
			required: true
		}
	},
	computed: {
		hashMatch () {
			return this.$route.hash === this.$props.to.hash;
		}
	},
	mounted () {
	}
}
</script>
<style scoped>
a.router-link-exact-active:not(.no-underline)::before {
	width: 0;
}

a.router-link-hash-match:not(.no-underline)::before,
a:hover:not(.no-underline)::before {
	width: calc(100% + 5px);
}
</style>