<template>
  <div class="swiper-container" ref="current">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <div
          class="img"
          :style="{ backgroundImage: 'url(' + carousel.imgUrl + ')' }"
        >
          <div class="hero-content">
            <router-link to="/blog/grid" class="categorie">旅行</router-link>
            <h2>
              <router-link to="/posts/default"
                >每个自然爱好者必去的十大森林</router-link>
            </h2>
          </div>
        </div>

        <div class="mask"></div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  data() {
    return {};
  },
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler(oldVal, newVal) {
        this.$nextTick(function () {
          new Swiper(this.$refs.current, {
            //自动切换
            autoplay: {
              delay: 5000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            },
            //切换速度
            speed: 800,
            //视差效果
            // parallax : true,
            // direction: "vertical", // 垂直切换选项
            loop: true, //循环模式
            // 如果需要分页器
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            // scrollbar: {
            //   el: ".swiper-scrollbar",
            // },
          });
        });
      },
    },
  },
};
</script>


<style lang="less" scoped>
.swiper-container {
  margin-top: 65px;
  .swiper-wrapper {
    margin-bottom: 0px;
    position: relative;
    .swiper-slide {
      margin-bottom: 0px;
      position: relative;
      z-index: 1;

      .img {
        width: 100%;
        height: calc(100vh - 65px);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: #cccccc;
        -webkit-background-position: center center;
        -moz-background-position: center center;
        -o-background-position: center center;
        background-position: center center;
        /*兼容浏览器版本*/
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 100% 100%;
        .hero-content {
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
    }
  }
}
</style>

<!-- 源码 -->
<!-- <style scoped>
.hero {
  margin-bottom: 0px;
  position: relative;
  background-position: center center;
  background-size: cover;
  height: calc(100vh - 65px);
  z-index: 1;
}

.hero:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  bottom: 0;
  z-index: -1;
}

.hero-content {
  text-align: center;
}

.hero-content .categorie {
  margin-bottom: 30px;
}

.hero-content p {
  color: #ffffff;
  font-weight: 500;
  display: none;
}

.hero-content h2 {
  margin-bottom: 20px;
  color: #ffffff;
}

.hero-content h2 a:hover {
  color: #ffffff;
}

.hero-content .post-card-info {
  margin: auto;
  margin-top: 30px;
}

.hero-content .post-card-info ul {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.hero-content .post-card-info li {
  color: #eee;
  font-weight: 700;
}

.hero-content .post-card-info li img {
  display: none;
}

.carousel-hero .owl-carousel {
  margin-bottom: 0px;
  position: relative;
}

.carousel-hero .owl-nav {
  text-align: center;
  line-height: 0;
  margin-bottom: 0px;
  position: absolute;
  height: 40px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
}

.carousel-hero .owl-nav .owl-prev,
.carousel-hero .owl-nav .owl-next {
  background-color: transparent !important;
  color: #ffffff !important;
  margin-right: 0px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 18px;
  position: absolute;
  border: 1px solid #ffffff !important;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.carousel-hero .owl-nav .owl-prev:after,
.carousel-hero .owl-nav .owl-next:after {
  border: 0 none;
  line-height: normal;
  vertical-align: middle;
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
}

.carousel-hero .owl-nav .owl-prev span,
.carousel-hero .owl-nav .owl-next span {
  display: none;
}

.carousel-hero .owl-nav .owl-prev:hover,
.carousel-hero .owl-nav .owl-next:hover {
  background-color: #f67280 !important;
  color: #ffffff !important;
  border: 1px solid #f67280 !important;
}

.carousel-hero .owl-nav .owl-prev {
  left: 30px;
}

.carousel-hero .owl-nav .owl-prev:after {
  content: "\f104";
}

.carousel-hero .owl-nav .owl-next {
  right: 30px;
}

.carousel-hero .owl-nav .owl-next:after {
  content: "\f105";
}
</style> -->