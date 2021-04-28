<template>
	<nav class="global-nav">
		<span class="logo" :class="{zoom}">
			<img src="/assets/logo.png" alt="FREESERVER Logo">
		</span>
		<div class="links">
			<hash-match-link :to="{name: 'Home', hash: '#about'}">Home</hash-match-link>
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
	},
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
.global-nav {
	align-items: center;
	box-sizing: border-box;
	position: fixed;
	display: flex;
	background-color: #00000085;
	padding: 0 10px;
	width: 100%;
	left: 0;
	top: 0;
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

.logo.zoom img {
	height: 100px;
}

.global-nav .links {
	display: flex;
}

.global-nav .links a {
	display: block;
	text-decoration: none;
	margin: 5px 10px;
	font-size: 2rem;
	color: white;
	position: relative;
}

.global-nav .links a::before {
	content: '';
	position: absolute;
	top: 100%;
	height: 1px;
	width: 0%;
	left: 50%;
	transform: translateX(-50%);
	background-color: white;
	transition: all 300ms 0s ease;
}
.global-nav .links a.router-link-hash-match::before,
.global-nav .links a:hover::before {
	width: calc(100% + 5px);
}

</style>