<script lang="ts" setup>
import { reactive } from 'vue';
import { ParticlesComponent as VParticle } from 'particles.vue3';

const particles = reactive({
  number: {
    value: 200
  },
  shape: {
    type: 'circle',
  },
  move: {
    enable: true,
    direction: 'bottom',
    outMode: 'out',
    random: false,
    speed: 6,
    straight: false
  },
  size: {
    random: true,
    value: 6
  }
});
</script>
<template>
  <div id="fall-snow">
    <v-particle 
      id="fall-snow"
      :options="{
        particles
      }"
    />
  </div>
</template>
<style lang="scss">
.fall-snow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
  overflow: hidden;
}
</style>
