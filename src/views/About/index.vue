<template>
  <section class="section pt-50">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h5>关于我们</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8 mt-30">
          <div class="about-us">
            <div class="about-us-image">
              <img src="@/assets/img/about-us.jpg" alt="" />
            </div>
            <div class="description">
              <h6>感谢您访问我们的博客网站。</h6>
              <p>
                信仰与奉献并存。自然的面孔，自然的尊严，在劳动中，天意是最小的责任。
              </p>
              <p>
                没有图腾的自由之神。信仰与奉献并存。当我们出生时，没有人值得做我们的工作，我们受到的惩罚最小，但现在是幸福的孩子，不是所有人。
              </p>
              <div class="quote">
                <div>
                  <i class="icon_quotations_alt"></i>
                </div>
                <p>
                  “我的网站对我来说很有趣。我可以在上面画画。这很有趣。”
                </p>
                <small>杰夫·布里奇斯</small>
              </div>
              <p>
                如果他感到疼痛，他将被认为是有帮助的。他会害怕喜欢邪恶。 明天的肖像需要智慧。我们害怕
                座位上的脆弱性。没有剩余空间。但他们在画他们的花，但他们是最大的。与此同时，饥荒在他面
                前被泥泞摧毁了。埃涅阿斯是由邪恶的骨头制成的，它们不会咬人。狮子带着一根巨大的羽毛匆匆忙忙。
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 max-width">
          <!--widget-latest-posts-->
          <LatestPosts />
          <!--/-->

          <!--widget-instagram-->
          <Instagram />
          <!--/-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>