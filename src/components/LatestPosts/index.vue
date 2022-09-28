<template>
  <div class="widget">
    <div class="section-title">
      <h5>最新的帖子</h5>
    </div>
    <ul class="widget-latest-posts">
      <li class="last-post" v-for="(item, index) in list" :key="item.id">
        <div class="image">
          <a href="post-default.html">
            <img :src="item.default_img" alt="" />
          </a>
        </div>
        <div class="nb">{{index+1}}</div>
        <div class="content">
          <p>
            <a href="post-default.html">{{item.title}}</a>
          </p>
          <small> <span class="icon_clock_alt"></span> {{item.create_time}} </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LatestPosts",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getData() {
      let result = await this.$API.article.reqGetNewArticles();
      if (result.code == 200) {
        this.list = result.data;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>