<template>
  <section class="mt-40 masonry-layout">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="card-columns">
            <!--Post-1-->
            <div class="card" v-for="(article,index) in list.data" :key="index">
              <div class="post-card">
                <div class="post-card-image">
                  <router-link :to="`/article/${article.id}`">
                    <img :src="article.default_img" />
                  </router-link>
                </div>
                <div class="post-card-content">
                  <router-link to="/blog/grid" class="categorie">{{article.category.name}}</router-link>
                  <h5>
                    <router-link :to="`/article/${article.id}`">{{article.title}}</router-link>
                  </h5>
                  <p v-html="article.content" class="content">
                  </p>
                  <div class="post-card-info">
                    <ul class="list-inline">
                      <li>
                        <a href="author.html">
                          <img :src="article.user.avatar" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="author.html">{{article.user.name}}</a>
                      </li>
                      <li class="dot"></li>
                      <li>{{article.create_time}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!--/-->
          </div>

          <!--pagination-->
          <el-pagination class="pagination-home" background :current-page="params.page" layout="prev, pager, next"
            :page-size="params.per_page" :pager-count="5" :total="list.total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//瀑布流布局
export default {
  name: "Masonry",
  data() {
    return {
      params: {
        page: 1,
        per_page: 20,
      }
    }
  },
  props: ['list'],
  methods: {
    // 翻页
    handleSizeChange(perPage) {
      this.$emit('sizeChange', perPage);
    },
    handleCurrentChange(page) {
      this.$emit('getPage', page);
    },
  }
};
</script>

<style>


.masonry-layout {
  background-color: #f9f9ff;
}

.masonry-layout .card {
  border: 0;
  border-radius: 0;
  margin-bottom: 0px;
  background-color: transparent;
}

.masonry-layout .card-columns {
  /* -webkit-column-count: 2;
  column-count: 2; */

  -webkit-column-gap: 30px;
          column-gap: 30px;
}

.masonry-layout .card-columns .card {
  margin-bottom: 20px;
  margin-top: 40px;
  -moz-page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-inside: avoid; /**避免元素内部断行并产生新列 */
}

.masonry-layout .card-columns .post-card {
  margin-bottom: 0px;
}

.pagination-home {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}

.el-pager li {
  margin: 0 3px;
}

</style>