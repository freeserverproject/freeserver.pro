<template>
	<div class="copy" @click="copy()">
		<span class="text">{{text}}</span>
		<button>{{buttonText}}</button>
	</div>
</template>
<script>
import { copyElementText } from '@/util/Util.js';

export default {
	name: 'how-to-join',
	data: () => ({
		buttonText: 'Copy'
	}),
	props: {
		text: {
			type: String,
			default: ''
		}
	},
	methods: {
		copy () {
			this.buttonText = 'Copied!!';
			setTimeout(() => this.buttonText = 'Copy', 2 * 1000)
			copyElementText(this.$el.querySelector('.copy .text'));
		}
	},
	mounted () {
	}
}
</script>
<style scoped>
.copy {
	text-align: center;
	cursor: pointer;
	background-color: #C4C4C4;
	display: flex;
	color: #141414;
	border-radius: 3px;
}

.copy .text {
	display: inline-block;
	width: auto;
	flex: 1;
	padding: 8px;
	font-weight: 800;
}

.copy button {
	margin: 0;
	border: 0;
	cursor: pointer;
	background-color: #fefefe;
	border-radius: 3px;
}
</style>