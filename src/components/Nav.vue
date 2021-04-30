<template>
	<nav class="global-nav" :class="{zoom}">
		<span class="logo">
			<router-link :to="{name: 'Home'}" class="no-underline">
				<img src="../assets/logo.png" alt="FREESERVER Logo">
			</router-link>
		</span>
		<div class="links" :class="{open: drawerOpen}" @click="drawerOpen = false">
			<hash-match-link :to="{name: 'Home', hash: '#about'}">About</hash-match-link>
			<hash-match-link :to="{name: 'Home', hash: '#feature'}">Feature</hash-match-link>
			<hash-match-link :to="{name: 'Home', hash: '#wiki'}">Wiki</hash-match-link>
			<hash-match-link :to="{name: 'Home', hash: '#sns'}">Socials</hash-match-link>
			<a href="//maps.freeserver.pro/">Maps</a>
		</div>
		<hamburger-button v-model="drawerOpen"/>
	</nav>
</template>
<script>
import HashMatchLink from './HashMatchLink.vue';
import HamburgerButton from './HamburgerButton.vue';

export default {
	name: 'FNav',
	components: {
		HashMatchLink,
		HamburgerButton
	},
	data: () => ({
		zoom: true,
		drawerOpen: false
	}),
	props: {
		zooming: {
			type: Boolean,
			default: false
		}
	},
	computed: {
	},
	mounted () {
		window.addEventListener('scroll', () => {
			this.zoom = (window.scrollY <= 70 && this.zooming);
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
	padding: 0 80px;
	backdrop-filter: blur(5px);
	z-index: 900;
}

.logo {
	margin-right: auto;
}

.logo img {
	height: 65px;
	transition: height 300ms 0s ease;
	transform: scale(1.2)
}

.global-nav.zoom .logo img {
	height: 100px;
}

.global-nav .links {
	display: flex;
	font-size: 2rem;
}

.hamburger-button {
	display: none;
}

@media screen and (max-width: 739px) {
	.global-nav {
		padding: 0 20px;
	}
	.global-nav .links {
		font-size: 1.5rem;
	}
}


@media screen and (max-width: 611px) {
	.global-nav {
		padding: 0 20px;
		padding-left: 0;
	}
	.global-nav .links {
		background-color: #00000081;
		box-sizing: border-box;
		backdrop-filter: blur(10px);
		flex-direction: column;
		position: fixed;
		right: 0;
		top: 0;
		height: 100vh;
		width: 100%;
		padding: 30px;
		padding-top: 80px;
		right: -100%;

		transition: right 300ms 0s ease;
	}
	.global-nav .links.open {
		right: 0%;
	}

	.global-nav .links>* {
		display: block;
		font-size: 2.5rem;
	}
	.hamburger-button {
		display: initial;
	}
	.logo img {
		transform: scale(1)
	}
}

</style>