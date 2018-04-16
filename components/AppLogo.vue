<template>
  <a class="logo" @click="goToTop"><img src="~assets/logo.png"></a>
</template>

<script>
export default {
  methods: {
    goToTop() {
      this.$router.push("/")
    }
  }
}
</script>

<style>
a.logo > img {
  max-width: 30%;
}
</style>
