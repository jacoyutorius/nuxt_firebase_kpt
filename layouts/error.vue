<template>
  <section class="section">
    <div class="content">
      <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
      <h1 v-else>エラーが発生しました</h1>
    </div>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>