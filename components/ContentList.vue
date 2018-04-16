<template>
  <nav class="panel">
    <div v-for="key in Object.keys(contentList)" v-bind:key="key">
      <a class="panel-block">

        {{ contentList[key].content }}

        <span class="tag is-rounded" @click="applyStar(key)">
          <small v-if="contentList[key].star == 0">
            <i class="fa fa-star-o"></i> {{ contentList[key].star }}
          </small>
          <small v-else-if="contentList[key].star < 10">
            <i v-for="(r, index) in contentList[key].star" v-bind:key="index" class="fa fa-star"></i>
          </small>
          <small v-else-if="contentList[key].star >= 10">
            <i class="fa fa-star"></i> {{ contentList[key].star }}
          </small>
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
import firebase from "~/plugins/firebase"

export default {
  props: ["boardName", "kptTypeName", "contentList"],
  computed: {
    kptContentTypeName() {
      return this.kptTypeName + "_content_list";
    }
  },
  methods: {
    applyStar(key) {
      var content = this.contentList[key];
      var postKeyBase = 'boards/' + this.boardName + "/" + this.kptContentTypeName + "/" + key;
      var params = {
        content: content.content,
        star: content.star + 1,
        timestamp: Date.now()
      };

      firebase.database().ref(postKeyBase).set(params);
    }
  }
}
</script>

<style>
.notification a:not(.button) {
  text-decoration: none;
}
a:hover {
  border-left: 2px solid;
  border-left-color: #00d1b2;
}
.panel-block {
  border-left: none;
  border-right: none;
  border-bottom: none;
}

span.tag {
  margin-left: 10px;
}
i.fa-star {
  color: gold;
}
</style>
