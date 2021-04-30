<template>
	<main class="home">
		<header>
			<div class="title">
				<h1>Welcome to FREESERVER</h1>
			</div>
			<scroll-to-see-more @click="$router.push({name: 'Home', hash: '#about'})"/>
		</header>
		<div class="card about" id="about">
			<h1><hash-match-link :to="{name: 'Home', hash: '#about'}">ABOUT</hash-match-link></h1>
			<div>
				FREESERVERは実家のような安心感を提供します<br>
				ゆるく、安心できる場所をお楽しみください。<br>
				<span>
					運営も積極的に参加していますので<br>
					わからないことはいつでも聞いてください
				</span>
			</div>
		</div>
		<div class="card feature" id="feature">
			<h1><hash-match-link :to="{name: 'Home', hash: '#feature'}">FEATURE</hash-match-link></h1>
			<div class="inner">
				FREESERVERではメインとなる生活鯖の他に<br>
				ミニゲームも定期開催しています。<br>
				<span>
					イベント日程等詳細につきましては<br>
					Discordにて随時発信しております、是非公式サーバーへご参加ください
				</span>
			</div>
		</div>
		<div class="card how-to-join" id="how-to-join">
			<h1><hash-match-link :to="{name: 'Home', hash: '#how-to-join'}">参加方法</hash-match-link></h1>
			<div class="inner">
				<h2>参加前に</h2>
				<div class="content">
					・人の建物を壊さない<br>
					・ユーザー同士でトラブルを起こさない<br>
					・みんなで仲良く<br>
				</div>
				<br>
				<can-copy-element text="play.freeserver.pro" />
				<div class="link">
					<router-link :to="{name: 'TOS'}">その他詳細な規約はこちら</router-link>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
import ScrollToSeeMore from '@/components/ScrollToSeeMore.vue';
import HashMatchLink from '@/components/HashMatchLink.vue';
import CanCopyElement from '@/components/CanCopyElement.vue';

export default {
	name: 'Home',
	components: {
		ScrollToSeeMore,
		HashMatchLink,
		CanCopyElement
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
}

.home header .scroll-to-see-more {
	position: absolute;
	bottom: 10px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
}

.card {
	background-position: center;
	background-size: cover;
	text-align: center;
	overflow: hidden;
	color: white;
	padding-bottom: 30px;
	font-weight: 400;
	margin: 20px;
}

.card>div {
	display: inline-block;
	background-color: #0000004b;
	border-radius: 3px;
	padding: 50px;
	backdrop-filter: blur(5px);
}

.card>div>span {
	display: inline-block;
	font-size: 1.3rem;
	padding: 30px;
	padding-bottom: 0;
}

.card.how-to-join>div {
	padding-top: 0;
}

.card.how-to-join div.content {
	text-align: left;
}

.card.about {
	background-image: url(../assets/pics/aboutBackground.png);
}
.card.feature {
	background-image: url(../assets/pics/featureBackground.png);
}
</style>