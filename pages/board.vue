<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <kpt-panel 
          v-bind:board_name="boardKey" 
          v-bind:kpt_type_name="'keep'" 
          v-bind:content_list="keep_content_list"></kpt-panel>
        <kpt-panel 
          v-bind:board_name="boardKey" 
          v-bind:kpt_type_name="'problem'" 
          v-bind:content_list="problem_content_list"></kpt-panel>
        <kpt-panel 
          v-bind:board_name="boardKey" 
          v-bind:kpt_type_name="'try'" 
          v-bind:content_list="try_content_list"></kpt-panel>
      </div>
    </div>

  </section>
</template>

<script>
import KptPanel from '~/components/KptPanel.vue'
import firebase from "~/plugins/firebase"

export default {
  components: {
    KptPanel
  },
  mounted: function(){
    this.boards = [];
    var boardsRef = firebase.database().ref("boards/" + this.$route.query.id);
    boardsRef.on("value", function(snapshot){
      if (snapshot.val() == null){
         this.$router.push("/")
      }

      if (snapshot.val().keep_content_list != undefined){
        this.keep_content_list = snapshot.val().keep_content_list;
      }
      if (snapshot.val().problem_content_list != undefined){
        this.problem_content_list = snapshot.val().problem_content_list;
      }
      if (snapshot.val().try_content_list != undefined){
        this.try_content_list = snapshot.val().try_content_list;
      }
    }.bind(this));
  },
  computed: {
    boardKey: function(){
      return this.$route.query.id;
    }
  },
  data(){
    return {
      title: "",
      keep_content_list: {},
      problem_content_list: {},
      try_content_list: {}
    }
  },
  layout: ["board"]
}
</script>