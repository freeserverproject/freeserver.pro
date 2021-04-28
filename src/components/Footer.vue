<template>
	<footer>
		<router-link :to="{path: '/privacy-policy'}">プライバシーポリシー</router-link>
		<router-link :to="{path: '/privacy-policy'}">Minecraftサーバー利用規約</router-link>
		<router-link :to="{path: '/privacy-policy'}">運営募集 | Join us</router-link>
		<span class="copyright">&copy;{{ new Date().getFullYear() }} FREESERVER PROJECT</span>
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
}

footer a {
	color: #ababab;
}

footer .copyright {
	color: white;
	font-size: 2rem;
}

footer>* {
	margin: 0 10px;
}
</style>