<template>
  <div class="modal is-clipped is-active" @click="$emit('click')">
    <div class="modal-background has-text-centered qr-code-container">
      <img :src="dataUrl" :alt="url" class="qr-code">
    </div>
  </div>
</template>

<style scoped>
.qr-code-container {
  padding: 32px;
}

img.qr-code {
  image-rendering: pixelated;
  object-fit: contain;
  width: auto;
  height: 100%;
}
</style>

<script>
import QRCode from 'qrcode'

export default {
  data() {
    return {
      url: '',
      dataUrl: ''
    }
  },

  async mounted() {
    this.url = window.location.href;
    this.dataUrl = await QRCode.toDataURL(this.url);
  }
}
</script>
