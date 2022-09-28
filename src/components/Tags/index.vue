<template>
  <div class="widget">
    <div class="section-title">
      <h5>标签</h5>
    </div>
    <div class="widget-tags">
      <ul class="list-inline">
        <li v-for="item in list" :key="item.id">
          <!-- Todo -->
          <a href="blog-grid.html">{{item.name}}</a>
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Tags',
    data() {
      return {
        list: []
      };
    },
    methods: {
      async getData() {
        let result = await this.$API.article.reqGetTags();
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