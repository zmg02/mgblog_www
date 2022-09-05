<template>
  <div>
    <!-- <Carousel :list="imgList" /> -->
    <ElCarouselLBT :list="imgList" />
    <Masonry :list="articleList" @getPage="getPage" @sizeChange="sizeChange" />
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            imgList: [],
            articleList: {},
            params: {
                page: 1,
                per_page: 10,
                keywords: ""
            }
        };
    },
    computed: {},
    methods: {
        async getBannerList() {
            let result = await this.$API.default.home.getBannerList();
            if (result.code == 200) {
                this.imgList = result.data;
            }
        },
        /**
         * 翻页追加，page
         */
        async getArticleList() {
            let result = await this.$API.default.article.reqGetArticles(this.params);
            if (result.code == 200 && result.data.data.length > 0) {
                this.articleList = result.data;
            }
            else {
                this.$message({
                    type: "info",
                    message: "没有更多了！"
                });
            }
        },
        getPage(page) {
            this.params.page = page;
            this.getArticleList(this.params);
        },
        sizeChange(perPage) {
            this.params.per_page = perPage;
            this.getArticleList(this.params);
        }
    },
    mounted() {
        //获取banner图
        this.getBannerList();
        this.getArticleList();
    }
};
</script>

<style>
</style>