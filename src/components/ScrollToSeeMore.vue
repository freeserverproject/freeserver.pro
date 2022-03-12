<template>
	<span class="scroll-to-see-more"></span>
</template>
<script>
export default {
	name: 'ScrollToSeeMore'
}
</script>
<style scoped>
.scroll-to-see-more {
	border-radius: 32px;
	border:2px solid white;
	height: 48px;
	width: 32px;
	position: relative;
	overflow: hidden;
	cursor: pointer;
}

.scroll-to-see-more::before {
	background-color: white;
	position: absolute;
	content: "";
	height: 13px;
	width: 2px;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);

	animation-iteration-count: infinite;
	animation-duration: 1s;
	animation-name: wheel-anim;
}

@keyframes wheel-anim {
	from {
		top: -13px;
	}
	to {
		top: 100%;
	}
}
</style>
