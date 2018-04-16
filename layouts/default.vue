<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <app-logo></app-logo>
          <h2 class="subtitle">
            KPT board on Nuxt.js + Firebase
          </h2>
        </div>
      </div>
    </section>
    <nuxt/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import MyFooter from '~/components/MyFooter.vue'

export default {
  components: { AppLogo, MyFooter }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h2.subtitle {
  margin-left: 10px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
