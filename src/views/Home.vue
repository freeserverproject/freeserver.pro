<template>
	<main class="home">
		<header>
			<div class="title">
				<h1>Welcome to FREESERVER</h1>
			</div>
			<scroll-to-see-more @click="$router.push({name: 'Home', hash: '#about'})"/>
		</header>
		<div id="about">About</div>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<div id="wiki">Wiki</div>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	</main>
</template>
<script>
import ScrollToSeeMore from '@/components/ScrollToSeeMore.vue';

export default {
	name: 'Home',
	components: {
		ScrollToSeeMore
	}
}
</script>
<style scoped>
.home {
	width: 100%;
}

.home header {
	height: 100vh;
	background-size: cover;
	background-image: url(../assets/pics/mainBackground3.png);
	color: white;
	position: relative;
}

.home header .title {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);
}

.home header .title h1 {
	font-weight: 500;
	display: inline-block;
	font-family: 'Montserrat', sans-serif;
}

.home header .scroll-to-see-more {
	position: absolute;
	bottom: 10px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}
</style>