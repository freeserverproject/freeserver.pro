<template>
	<router-view/>
	<fall-snow></fall-snow>
</template>
<script setup>
import FallSnow from './components/FallSnow.vue';
</script>
<style>

html {
	font-size: 62.5%;
}

body {
	margin: 0;
	font-size: 1.6em;
	background-color: #292929;
}

#app {
	font-family: 'Montserrat', 'M PLUS 1p', 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
}

a {
	display: inline-block;
	text-decoration: none;
	margin: 5px 10px;
	color: white;
	position: relative;
}

a::before {
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

a:hover:not(.no-underline)::before,
a.router-link-exact-active:not(.no-underline)::before {
	width: calc(100% + 5px);
}
</style>
