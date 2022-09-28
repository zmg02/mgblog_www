<template>
  <div class="row">
    <div class="col-md-6">
      <div class="widget">
        <div class="widget-next-post">
          <div class="small-post">
            <div class="image">
              <a href="post-default.html">
                <img :src="prevInfo.default_img" />
              </a>
            </div>
            <div class="content">
              <div>
                <router-link class="link" :to="`/article/${prevInfo.id}`"><i class="arrow_left"></i>上一篇</router-link>
              </div>
              <router-link :to="`/article/${prevInfo.id}`">{{ prevInfo.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="widget">
        <div class="widget-previous-post">
          <div class="small-post">
            <div class="image">
              <a href="post-default.html">
                <img :src="nextInfo.default_img" />
              </a>
            </div>
            <div class="content">
              <div>
                <router-link class="link" :to="`/article/${nextInfo.id}`">
                  <span> 下一篇</span>
                  <span class="arrow_right"></span>
                </router-link>
              </div>
              <router-link :to="`/article/${nextInfo.id}`">{{ nextInfo.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextAndPrevious",
  props: ['prevInfo', 'nextInfo'],
};
</script>

<style scoped>
.content {
  height: 82px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>