<template>
  <div>
    <!-- <Carousel :list="imgList" /> -->
    <ElCarouselLBT :list="imgList" />
    <Masonry :list="articleList" />
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            imgList: [],
            articleList: [],
            params: {
                page: 1,
                page_size: 5,
                keywords: ""
            }
        };
    },
    computed: {},
    methods: {
        async getBannerList() {
            let result = await this.$API.home.getBannerList();
            if (result.code == 200) {
                this.imgList = result.data;
            }
        },
        /**
         * 翻页追加，page
         */
        async getArticleList(page = 1) {
            // let result = await this.$store.dispatch('article/getArticles', this.params);
            let result = await this.$API.article.reqGetArticles(this.params);
            if (result.code == 200 && result.data.data.length > 0) {
                if (page == 1) {
                    this.articleList = result.data.data;
                }
                else {
                    let data = result.data.data;
                    this.articleList.push(...data);
                }
            }
            else {
                this.params.page--;
                this.$message({
                    type: "info",
                    message: "没有更多了！"
                });
            }
        },
        //  页面滚动事件  常做下拉加载内容
        pageScroll() {
            // 获取滚动的距离
            let scrollTop = document.documentElement.scrollTop;
            // 获取滚动的高度（获取整个html的高度）
            let scrollHeight = document.documentElement.scrollHeight;
            // 获取屏幕(浏览器)高度
            let clienHeight = document.documentElement.clientHeight;
            // 滚动的距离 + 屏幕高度 - 内容高度 >= 0 表示滚动到底部了      (下拉加载判断条件)
            // +10 移动端下拉加载
            if (scrollTop + clienHeight + 10 >= scrollHeight) {
                //滚动至底部后请求数据
                this.params.page++;
                this.params.page_size = 5;
                this.getArticleList(this.params.page);
            }
        },
        // 防抖
        debounce(fn, delay) {
            let timer = null; //借助闭包
            return function () {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(fn, delay); //简化写法
            };
        },
    },
    mounted() {
        //获取banner图
        this.getBannerList();
        this.getArticleList();
        // 监听页面滚动
        window.addEventListener("scroll", this.debounce(this.pageScroll, 500));
    }
};
</script>

<style>
</style>