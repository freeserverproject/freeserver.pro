<template>
	<div class="copy" @click="copy()" ref="rootEl">
		<span class="text">{{text}}</span>
		<button>{{buttonText}}</button>
	</div>
</template>
<script>
import { copyElementText } from '../util/Util.js';
import { ref } from 'vue';

export default {
	name: 'how-to-join',
	props: {
		text: {
			type: String,
			default: ''
		}
	},
	setup () {
		const rootEl = ref(null);
		const buttonText = ref('Copy');

		const copy = () => {
			buttonText.value = 'Copied!!';
			setTimeout(() => buttonText.value = 'Copy', 2 * 1000);
			copyElementText(rootEl.value.querySelector('.copy .text'));
		};

		return { copy, rootEl, buttonText };
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
