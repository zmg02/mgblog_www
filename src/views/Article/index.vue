<template>
    <section class="section pt-55">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-8 mb-20">
                    <!--Post-single-->
                    <div class="post-single">
                        <div class="post-single-image">
                            <img :src="info.default_img" />
                        </div>
                        <div class="post-single-content">
                            <a href="blog-grid.html" class="categorie">{{category.name}}</a>
                            <h4>
                                {{info.title}}
                            </h4>
                            <div class="post-single-info">
                                <ul class="list-inline">
                                    <li>
                                        <a href="author.html"><img :src="userInfo.avatar" /></a>
                                    </li>
                                    <li><a href="author.html">{{ userInfo.name}}</a></li>
                                    <li class="dot"></li>
                                    <li>{{info.create_time}}</li>
                                    <li class="dot"></li>
                                    <li>{{info.comment_count}} 个评论</li>
                                </ul>
                            </div>
                        </div>

                        <div class="post-single-body" v-html="info.content"></div>

                        <div class="post-single-footer">
                            <div class="tags">
                                <ul class="list-inline">
                                    <li>
                                        <a href="blog-grid.html">Travel</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid.html">Nature</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid.html">tips</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid.html">forest</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid.html">beach</a>
                                    </li>
                                </ul>
                            </div>

                            <!-- <div class="social-media">
                                <ul class="list-inline">
                                    <li>
                                        <a href="#" class="color-facebook">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="color-instagram">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="color-twitter">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="color-youtube">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="color-pinterest">
                                            <i class="fab fa-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                    <!--/-->

                    <!--next & previous-posts-->
                    <NextAndPrevious :prevInfo="prevArticle" :nextInfo="nextArticle" />
                    <!--/-->

                    <!--widget-comments-->
                    <Comments />

                </div>
                <div class="col-lg-4 max-width">
                    <!--widget-author-->
                    <Author :info="info.user" />
                    <!--/-->

                    <!--widget-latest-posts-->
                    <LatestPosts />
                    <!--/-->

                    <!--widget-categories-->
                    <Categories />
                    <!--/-->

                    <!--widget-instagram-->
                    <Instagram />
                    <!--/-->

                    <!--widget-tags-->
                    <Tags />
                    <!--/-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Author from "./Author";
import Comments from "./Comments";
import NextAndPrevious from "./NextAndPrevious";
export default {
    name: "Article",
    components: { Author, Comments, NextAndPrevious },
    data() {
        return {
            info: {},
            prevArticle: {},
            nextArticle: {},
        }
    },
    computed: {
        userInfo() { 
            return this.info.user || {}
        },
        category() { 
            return this.info.category || {}
        },
    },
    methods: {
        async getData(id) {
            let result = await this.$API.default.article.reqGetArticleInfo(id);
            if (result.code == 200) {
                this.info = result.data;
            }
        },
        async getPrevArticleInfo(id) {
            let result = await this.$API.default.article.reqGetPrevArticleInfo(id);
            if (result.code == 200 && result.data != null) {
                this.prevArticle = result.data;
            }
        },
        async getNextArticleInfo(id) {
            let result = await this.$API.default.article.reqGetNextArticleInfo(id);
            if (result.code == 200) {
                this.nextArticle = result.data;
            }
        },
    },
    watch: {
        // 监视路由
        $route(to, from){
            let id = to.params.id;
            this.getPrevArticleInfo(id);
            this.getNextArticleInfo(id);
        },
    },
    mounted() {
        let id = this.$route.params.id;
        this.getData(id);
        this.getPrevArticleInfo(id);
        this.getNextArticleInfo(id);
    }
};
</script>

<style>
</style>