<template>
  <div class="widget">
    <div class="section-title">
      <h5>照片分享</h5>
    </div>
    <ul class="widget-instagram">
      <li v-for="(item, index) in srcList" :key="index">
        <a class="image" href="#">
          <!-- <img :src="item" alt="" /> -->
          <!-- style="width: 100px; height: 100px" -->
          <!-- style="position:relative;
                   width:100%;
                   height:0;
                   padding-top:100%;" -->
          <el-image :src="item" fit="cover"></el-image>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Instagram",
  data() {
    return {
      list: {},
      srcList: [],
    };
  },
  methods: {
    async getData() {
      let result = await this.$API.article.reqGetInstagrams();
      if (result.code == 200) {
        this.list = result.data.list;
        this.srcList = result.data.srcList;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.el-image {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
}
>>> .el-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>