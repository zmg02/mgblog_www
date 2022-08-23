<template>
  <section class="section pt-50">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h5>联系我们</h5>
          </div>
        </div>
      </div>

      <div class="row mb-20">
        <div class="col-lg-8 mt-30">
          <div class="contact">
            <div class="google-map"></div>
            <form
              action="assets/php/mail.php"
              class="widget-form contact_form"
              method="POST"
              id="main_contact_form"
            >
              <h6>请随时联系。</h6>
              <p>
                他会被认为是有帮助的。志愿者，声誉。
              </p>
              <div
                class="alert alert-success contact_msg"
                style="display: none"
                role="alert"
              >
                您的信息发送成功。
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  placeholder="姓名*"
                  required="required"
                />
              </div>

              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  placeholder="邮箱*"
                  required="required"
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  class="form-control"
                  placeholder="主题*"
                  required="required"
                />
              </div>

              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  class="form-control"
                  placeholder="信息*"
                  required="required"
                ></textarea>
              </div>

              <button type="submit" name="submit" class="btn-custom">
                发送信息
              </button>
            </form>
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
  name: "Contact",
};
</script>

<style>
</style>