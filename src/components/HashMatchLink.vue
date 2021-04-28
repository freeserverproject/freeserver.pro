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