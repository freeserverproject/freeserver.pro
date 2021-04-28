<template>
	<nav class="global-nav" :class="{zoom}">
		<span class="logo">
			<router-link :to="{name: 'Home'}" class="no-underline">
				<img src="../assets/logo.png" alt="FREESERVER Logo">
			</router-link>
		</span>
		<div class="links">
			<hash-match-link :to="{name: 'Home'}">Home</hash-match-link>
			<hash-match-link :to="{name: 'Home', hash: '#wiki'}">Wiki</hash-match-link>
			<hash-match-link :to="{name: 'Home', hash: '#sns'}">Socials</hash-match-link>
			<a href="//maps.freeserver.pro/">Maps</a>
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
	props: {
		zooming: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		zoom () {
			return this.scroll <= 70 && this.zooming;
		}
	},
	mounted () {
		window.addEventListener('scroll', () => {
			this.scroll = window.scrollY
		});
	}
}
</script>
<style scoped>
.global-nav {
	font-weight: 200;
	align-items: center;
	box-sizing: border-box;
	display: flex;
	background-color: #00000085;
	padding: 0 100px;
	backdrop-filter: blur(5px);
	z-index: 900;
}

.logo {
	margin-right: auto;
}

.logo img {
	height: 65px;
	transition: height 300ms 0s ease;
	transform: scale(1.3)
}

.global-nav.zoom .logo img {
	height: 100px;
}

.global-nav .links {
	display: flex;
	font-size: 2rem;
}

.global-nav .links a.router-link-hash-match::before {
	width: calc(100% + 5px);
}

</style>