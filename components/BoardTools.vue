<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="tools" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-normal is-primary is-outlined" @click="showQrCode">
              <span class="icon">
                <i class="fa fa-qrcode"></i>
              </span>
              <span>QR Code</span>
            </a>
            <a class="button is-normal is-primary is-outlined" @click="exportBoard">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
      <current-url-qr-code v-if="showsQrCode" @click="hideQrCode"/>
    </div>
  </nav>
</template>

<script>
import firebase from "~/plugins/firebase";
import CurrentUrlQrCode from "./CurrentUrlQrCode.vue"

export default {
  name: "BoardTools",
  components: {CurrentUrlQrCode},

  data() {
    return {
      showsQrCode: false
    }
  },

  methods: {
    buildMarkdown(data) {
      return [
        "keep_content_list",
        "problem_content_list",
        "try_content_list"
      ].reduce(
        (reducer, key) => {
          const title = key.replace(/\_content\_list/g, "").toUpperCase();
          let list = [];

          if (Object.keys(data).includes(key)) {
            list = Object.values(data[key]).reduce(
              (reducer, v) => {
                const content = v.content.replace(/\r?\n/g, "");
                reducer.push(`- ${content}\t${v.star > 0 ? "★" + v.star : ""}`);
                return reducer;
              },
              [`## ${title}`]
            );
          }

          return reducer.concat(list);
        },
        [`# ${data.title}`]
      );
    },

    exportBoard() {
      const boardRef = firebase
        .database()
        .ref("boards/" + this.$route.query.id);

      boardRef.on("value", snapshot => {
        const data = snapshot.val();
        const markdownArray = this.buildMarkdown(data);
        const blob = new Blob([markdownArray.join("\r\n")], {
          type: "text/plain"
        });

        if (window.navigator.msSaveBlob) {
        } else {
          const obj = document.createElement("a");
          obj.download = `${data.title}.md`;
          obj.href = window.URL.createObjectURL(blob);
          obj.click();
        }
      });
    },

    showQrCode() {
      this.showsQrCode = true;
    },

    hideQrCode() {
      this.showsQrCode = false;
    }
  }
};
</script>
