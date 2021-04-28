<template>
	<label class="hamburger-button">
		<input type="checkbox" @change="$emit('update:modelValue', $event.target.checked)" :checked="modelValue">
	</label>
</template>
<script>
export default {
	name: 'HamburgerButton',
	emits: ['update:modelValue'],
	props: {
		modelValue: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style scoped>
label {
	width: 40px;
	height: 34px;
	box-sizing: border-box;
	z-index: 1000;
	border-top: 2px solid white;
	border-bottom: 2px solid white;
	position: relative;
}

label::before {
	background-color: white;
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	left: 50%;
	top: 50%;
	-webkit-transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);
}

input[type="checkbox"] {
	display: none;
}
</style>