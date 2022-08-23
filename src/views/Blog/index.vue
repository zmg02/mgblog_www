<template>
  <div>
    <!--category-->
    <section class="categorie-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">
            <div class="categorie-title">
              <small>
                <a href="index.html">博客</a>
                <span class="arrow_carrot-right"></span> {{ category }}
              </small>
              <h3>
                分类 : <span> {{ category }}</span>
              </h3>
              <p v-show="isFood">
                信仰与奉献并存。意外之事，必要之事，不可避免之事
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--keep-alive才能使用这两个生命周期钩子：activated和deactivated-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Grid from "./Grid";
import Masonry from "./Masonry";
import { mapState } from "vuex";
export default {
  name: "Blog",
  data() {
    return {
      isFood: false,
      category: "",
    };
  },
  components: { Grid, Masonry },
  computed: {
    ...mapState("blog", ["viewName"]),
  },
  watch: {
    viewName: {
      immediate: true,//初始化时让handler调用一下
      handler(newVal, oldVal) {
        if (newVal == "grid") {
          this.isFood = true;
          this.category = "食物";
        } else {
          this.isFood = false;
          this.category = "生活方式";
        }
      },
    },
  },
};
</script>

<style>
</style>