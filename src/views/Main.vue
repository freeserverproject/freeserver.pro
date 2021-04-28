<template>
	<div class="wrapper">
		<f-nav />
		<router-view />
	</div>
</template>

<script>
import FNav from '@/components/Nav.vue';

export default {
	name: 'Main',
	components: { FNav }
}
</script>
