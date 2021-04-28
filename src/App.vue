<template>
	<router-view/>
</template>

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
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

a {
	display: block;
	text-decoration: none;
	margin: 5px 10px;
	font-size: 2rem;
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
a.router-link-exact-match:not(.no-underline)::before {
	width: calc(100% + 5px);
}
</style>
