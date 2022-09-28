<template>
  <div class="widget">
    <div class="section-title">
      <h5>类别</h5>
    </div>
    <ul class="widget-categories">
      <li v-for="item in list" :key="item.id">
        <a href="#" class="categorie">{{item.name}}</a>
        <span class="ml-auto">{{item.count}} 个帖子</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getData() {
      let result = await this.$API.article.reqGetCategories();
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