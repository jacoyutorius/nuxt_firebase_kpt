<template>
  <div class="modal is-clipped is-active" @click="$emit('click')">
    <div class="modal-background has-text-centered" style="padding: 32px;">
      <img :src="dataUrl" :alt="url" style="image-rendering: pixelated; object-fit: contain; width: auto; height: 100%;">
    </div>
  </div>
</template>

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
