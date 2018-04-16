<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification is-default">
          <p class="title">Keep</p>
          <p class="subtitle">What is good that you did?</p>

          <post-content kpt-type="keep"></post-content>

          <nav class="panel">
            <div v-for="(row, index) in keep_content" v-bind:key="index">
              <a class="panel-block">
                <!-- <span class="panel-icon">
                  <input type="checkbox">
                </span> -->
                {{ row.text }}

                <div class="stars">
                  <span v-if="row.star > 0" class="tag is-primary is-rounded">
                    <small><i v-for="(s, i) in row.star" v-bind:key="i" class="fa fa-star-o"></i></small>
                  </span>
                </div>
              </a>
            </div>
          </nav>
        </article>
        <article class="tile is-child notification is-default">
          <p class="title">Problem</p>
          <p class="subtitle">What is bad?</p>

          <post-content kpt-type="problem"></post-content>

          <nav class="panel">
            <div v-for="(row, index) in problem_content" v-bind:key="index">
              <a class="panel-block">
                <!-- <span class="panel-icon">
                  <input type="checkbox">
                </span> -->
                {{ row.text }}

                <div class="stars">
                  <span v-if="row.star > 0" class="tag is-primary is-rounded">
                    <small><i v-for="(s, i) in row.star" v-bind:key="i" class="fa fa-star-o"></i></small>
                  </span>
                </div>
              </a>
            </div>
          </nav>
        </article>
        <article class="tile is-child notification is-default">
          <p class="title">Try</p>
          <p class="subtitle">What do you want to improve for next time?</p>

          <post-content kpt-type="try"></post-content>

          <nav class="panel">
            <div v-for="(row, index) in try_content" v-bind:key="index">
              <a class="panel-block">
                <!-- <span class="panel-icon">
                  <input type="checkbox">
                </span> -->
                {{ row.text }}

                <div class="stars">
                  <span v-if="row.star > 0" class="tag is-primary is-rounded">
                    <small><i v-for="(s, i) in row.star" v-bind:key="i" class="fa fa-star-o"></i></small>
                  </span>
                </div>
              </a>
            </div>
          </nav>
        </article>
      </div>
    </div>

  </section>
</template>

<script>
import PostContent from '~/components/PostContent.vue'

export default {
  components: {
    PostContent
  },
  data: function(){
    return {
      keep_content: [
        { text: "コードを書いた", star: 0 },
        { text: "他のメンバーとコミュニケーションが取れた", star: 4 },
        { text: "ライブラリの使い方が分かった、理解できていなかった部分が理解できた", star: 2 },
        { text: "初めてNuxtを触った。案外使いやすい", star: 1 },
      ],
      problem_content: [
        { text: "遅刻した", star: 1 },
      ],
      try_content: [
        { text: "予習をしてくる", star: 2 },
        { text: "次回はLTする", star: 0 }
      ]
    }
  },
  methods: {
    onPost: function(){
      alert("pos!")
    }
  }
}
</script>

<style scoped>
article {
  background-color:#ffff;
  border: 1px solid lightgray;
}
article.tile {
  margin: 10px !important;
  padding: 15px 15px;
}
.subtitle {
  font-size: 1rem;
}
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
</style>
