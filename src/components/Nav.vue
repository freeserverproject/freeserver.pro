<template>
	<nav class="global-nav">
		<span class="logo">
			<img src="/assets/logo.png" alt="FREESERVER Logo">
		</span>
		<div class="links">
			<hash-match-link :to="{name: 'Home'}">Home</hash-match-link>
			<hash-match-link :to="{name: 'Home', hash: '#wiki'}">Wiki</hash-match-link>
			<hash-match-link :to="{name: 'Home', hash: '#maps'}">Maps</hash-match-link>
			<hash-match-link :to="{name: 'Home', hash: '#sns'}">SNS</hash-match-link>
		</div>
	</nav>
</template>
<script>
import HashMatchLink from './HashMatchLink.vue';

export default {
	name: 'FNav',
	components: {
		HashMatchLink
	}
}
</script>
<style scoped>
.global-nav {
	align-items: center;
	box-sizing: border-box;
	display: flex;
	background-color: #00000085;
	padding: 0 10px;
	backdrop-filter: blur(5px);
	z-index: 900;
}

.logo {
	margin-right: auto;
}

.logo img {
	height: 70px;
	transition: all 300ms 0s ease;
}

.global-nav.zoom .logo img {
	height: 100px;
}

.global-nav .links {
	display: flex;
}

.global-nav .links a.router-link-hash-match::before,
.global-nav .links a:hover::before {
	width: calc(100% + 5px);
}

</style>