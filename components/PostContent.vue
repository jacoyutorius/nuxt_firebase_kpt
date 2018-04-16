<template>
  <div>
    <div class="field">
      <div class="control">
        <textarea class="textarea" v-bind:class="error != '' ? 'is-danger' : 'is-primary' " :placeholder="kptTypeName" rows="2" v-model="content"></textarea>
        <p v-if="error != ''" class="help is-danger">{{ error }}</p>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-primary is-outlined is-fullwidth" @click="onPost">
        <span class="icon is-small">
          <i class="fa fa-save"></i>
        </span>
        <span>{{ upperCase }}を書く</span>
      </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase"

export default {
  name: "post-content",
  props: ["kptTypeName", "boardKey"],
  data: function(){
    return {
      content: "",
      error: ""
    }
  },
  computed: {
    kptContentTypeName() {
      return this.kptTypeName + "_content_list";
    },
    upperCase(){
      return (this.kptTypeName != undefined) ? this.kptTypeName.toUpperCase() : "";
    }
  },
  methods: {
    onPost: function(){
      this.error = "";
      if (this.content.trim() === ""){
        this.error = "何か書いてください！";
        return;
      }
      else {
        var newPostKey = firebase.database().ref().child('boards').push().key;
        // console.log(newPostKey);
        var updates = {};
        updates['/boards/' + this.boardKey + "/" + this.kptContentTypeName + "/" + newPostKey] = {
          content: this.content,
          star: 0,
          timestamp: Date.now()
        };
        this.content = "";
        return firebase.database().ref().update(updates);
      }
    }
  }
}
</script>