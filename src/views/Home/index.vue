<template>
  <div>
    <!-- <Carousel :list="imgList" /> -->
    <ElCarouselLBT :list="imgList" />
    <Masonry />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imgList: [],
    };
  },
  methods: {
    async getBannerList() {
      let result = await this.$API.default.home.getBannerList();
      if (result.code == 200) {
        this.imgList = result.data;
      }
    }
  },
  mounted() {
    //获取banner图
    this.getBannerList();
  },
};
</script>

<style>
</style>