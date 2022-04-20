<script lang="ts" setup>
</script>
<template>
	<footer>
		<section class="links">
			<router-link :to="{name: 'PrivacyPolicy'}">プライバシーポリシー</router-link>
			<router-link :to="{name: 'TOS'}">Minecraftサーバー利用規約</router-link>
			<router-link :to="{name: 'TOP'}">Webページ利用規約</router-link>
			<router-link :to="{name: 'JoinUs'}">運営募集</router-link>
		</section>
		<section>
			Minecraft 公式ではありません。 Mojang から承認されておらず、 Mojang とは関係ありません。<br>
			Minecraft は Mojang の商標です。
		</section>
		<section class="copyright">&copy;{{ new Date().getFullYear() }} FREESERVER Project</section>
	</footer>
</template>
<style scoped lang="scss">
footer {
	background-color: #121212;
	display: flex;
	flex-direction: column;
	padding: 60px 50px;
	width: 100%;
	font-size: 1.5rem;
	color: white;
	box-sizing: border-box;

	a {
		color: #ababab;
		margin: 4px 0;
		margin-right: 10px;
	}

	section {
		width: fit-content;
		margin: 18px 0;
		display: inline-flex;
	}

	.copyright {
		line-height: 26px;
	}
}

@media screen and (max-width: 869px) {
	footer {
		section {
			box-sizing: border-box;
			flex-direction: column;
		}
		padding: 50px;
	}
}
</style>
