<script lang="ts" setup>
import { computed } from 'vue';
import { RouteLocationRaw, useRoute } from 'vue-router'

const props = defineProps<{
	to: RouteLocationRaw;
}>();

const route = useRoute();

const hashMatch = computed(() => typeof props.to !== 'string' && route.hash === props.to.hash);

</script>
<template>
	<router-link :to="to" :class="{'router-link-hash-match': hashMatch}">
		<slot />
	</router-link>
</template>
<style scoped>
a.router-link-exact-active:not(.no-underline)::before {
	width: 0;
}

a.router-link-hash-match:not(.no-underline)::before,
a:hover:not(.no-underline)::before {
	width: calc(100% + 5px);
}
</style>
