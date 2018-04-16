<template>
  <article class="tile is-child notification is-default">
    <p class="title">{{ upperCase }}</p>
    <!-- <p class="subtitle">{{ description }}</p> -->

    <post-content 
      v-bind:kpt-type-name="kpt_type_name" 
      v-bind:board-key="board_name"></post-content>
    <br>
    <content-list 
      v-bind:board-name="board_name" 
      v-bind:kpt-type-name="kpt_type_name" 
      v-bind:content-list="content_list"></content-list>
  </article>
</template>

<script>
import PostContent from '~/components/PostContent.vue'
import ContentList from '~/components/ContentList.vue'

export default {
  name: "kpt-panel",
  components: {
    PostContent, ContentList
  },
  props: ["board_name", "kpt_type_name", "content_list"],
  computed: {
    upperCase(){
      return (this.kpt_type_name != undefined) ? this.kpt_type_name.toUpperCase() : "";
    },
    description() {
      switch(this.kpt_type_name){
        case "keep":
          return "What is good that you did?";
        case "problem":
          return "What is bad?";
        case "try":
          return "What do you want to improve for next time?";
        default: 
          return "";
      }
    }
  },
}
</script>

<style scoped>
article.tile {
  background-color:#ffff;
  border: 1px solid lightgray;
  margin: 10px !important;
  padding: 15px 15px;
}

.subtitle {
  font-size: 1rem;
} 
</style>
