<template>
  <div id="carousel">
    <el-carousel
      :interval="5000"
      :height="bannerHeight + 'px'"
      arrow="always"
      loop
      ref="carousel"
    >
      <el-carousel-item v-for="carousel in list" :key="carousel.id">
                <!-- class="wrapper" -->
        <!-- <v-touch
          :swipe-options="{ direction: 'horizontal' }"
          v-on:swipeleft="swiperleft(index)"
          v-on:swiperight="swiperright(index)"

        > -->
        <!-- class="menu-container" -->
          <!-- <div  ref="menuContainer"> -->
            <img :src="carousel.imgUrl" alt="" class="banner" />
          <!-- </div> -->
        <!-- </v-touch> -->
        <v-touch @swipeleft="left" @swipeup="up" @swiperright="right" class="wrapper">
        <img :src="carousel.imgUrl" alt="" class="banner" />
        </v-touch>

        <div class="content">
          <router-link to="/blog/grid" class="categorie">旅行</router-link>
          <h2>
            <router-link to="/posts/default"
              >每个自然爱好者必去的十大森林</router-link
            >
          </h2>
        </div>
        <div class="mask"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "ElCarouselLBT",
  props: ["list"],
  data() {
    return {
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0,
    };
  },
  methods: {
    setSize: function () {
      // 通过浏览器高度赋值图片容器高度
      this.bannerHeight = window.innerHeight - 70;
    },
    left() {
      alert(333)
    },
    up() {
      console.log('up')
    },
    right() {
      console.log('right')
    }
   },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
  },
};
</script>

<style lang="less" scoped>
#carousel {
  margin-top: 70px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 600px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner {
  width: 100%;
  height: inherit;
  /* 图片居中填满 */
  object-fit: cover;
}

.content {
  text-align: center;
  z-index: 10;
  width: 85%;
  height: 200px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .categorie {
    margin-bottom: 30px;
  }
  p {
    color: #ffffff;
    font-weight: 500;
    display: none;
  }
  h2 {
    margin-bottom: 20px;
    color: #ffffff;
    a:hover {
      color: #ffffff;
    }
  }
}

.mask {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  bottom: 0;
}
</style>