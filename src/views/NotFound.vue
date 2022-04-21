<script lang="ts" setup>
import VArticle from './Article.vue'

</script>
<template>
  <VArticle noRouter>
    <div class="not-found">
      <h2>すみません！ページが見当たりませんでした！</h2>
      <img src="https://http.cat/404" alt="404 cat">
    </div>
  </VArticle>
</template>
<style lang="scss" scoped>
.not-found {
  text-align: center;

  img {
    width: 100%;
  }
}
</style>
