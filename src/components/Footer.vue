<template>
	<footer>
		<router-link :to="{path: '/privacy-policy'}">プライバシーポリシー</router-link>
		<router-link :to="{path: '/privacy-policy'}">Minecraftサーバー利用規約</router-link>
		<router-link :to="{path: '/join-us'}">運営募集</router-link>
		<span class="copyright">&copy;{{ new Date().getFullYear() }} FREESERVER Project</span>
	</footer>
</template>
<script>
export default {
	name: 'FFotter'
}
</script>
<style scoped>
footer {
	background-color: #121212;
	justify-content: center;
	display: flex;
	padding: 70px 0;
	width: 100%;
	font-size: 1.8rem;
}

footer a {
	color: #ababab;
}

footer .copyright {
	color: white;
	line-height: 26px;
}

footer>* {
	margin: 0 10px;
}
</style>