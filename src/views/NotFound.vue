<template>
  <v-article noRouter>
    <div class="not-found">
      <h2>すみません！ページが見当たりませんでした！</h2>
      <img src="https://http.cat/404" alt="404 cat">
    </div>
  </v-article>
</template>
<script>
import VArticle from './Article.vue'

export default {
  name: 'NotFound',
  components: { VArticle },
  setup () {
  },
}
</script>
<style lang="scss" scoped>
.not-found {
  text-align: center;

  img {
    width: 100%;
  }
}
</style>