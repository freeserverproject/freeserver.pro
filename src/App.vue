<template>
	<router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
	font-size: 62.5%;
}

body {
	margin: 0;
	font-size: 1.6em;
	background-color: #292929;
}

#app {
	font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
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
a.router-link-exact-match:not(.no-underline)::before {
	width: calc(100% + 5px);
}
</style>
