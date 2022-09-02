<template>
  <section class="mt-40 masonry-layout">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="card-columns">
            <!--Post-1-->
            <div class="card" v-for="(article,index) in list" :key="index">
              <div class="post-card">
                <div class="post-card-image">
                  <router-link to="/posts/default">
                    <img :src="article.default_img" />
                  </router-link>
                </div>
                <div class="post-card-content">
                  <router-link to="/blog/grid" class="categorie">{{article.category.name}}</router-link>
                  <h5>
                    <router-link to="/posts/default">{{article.title}}</router-link>
                  </h5>
                  <p v-html="article.content">

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
          <div class="pagination mt-30">
            <div class="text">
              <i class="arrow_down"></i>
              下拉加载更多内容...
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//瀑布流布局
export default {
  name: "Masonry",
  props: ['list'],
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

/* .masonry-layout .card-columns {
  -webkit-column-count: 3;
  column-count: 3;
  -webkit-column-gap: 30px;
          column-gap: 30px;
} */

.masonry-layout .card-columns .card {
  margin-bottom: 20px;
  margin-top: 40px;
}

.masonry-layout .card-columns .post-card {
  margin-bottom: 0px;
}

.pagination div.text{
  width: 100%;
  text-align: center;
}
</style>