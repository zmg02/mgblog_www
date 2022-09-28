<template>
  <div class="widget mb-50">
    <div class="title">
      <h5>3 个评论</h5>
    </div>
    <ul class="widget-comments">
      <li class="comment-item">
        <img src="@/assets/img/user/1.jpg" alt="" />
        <div class="content">
          <ul class="info list-inline">
            <li>穆罕默德·阿里</li>
            <li class="dot"></li>
            <li>2021年1月15日</li>
          </ul>
          <p>
            如果他感到疼痛，他将被认为是有帮助的。他喜欢焦躁不安和痛苦，但他不想逃避这样的事情！
          </p>
          <div>
            <a href="#" class="link"> <i class="arrow_back"></i> 回复</a>
          </div>
        </div>
      </li>
      <li class="comment-item">
        <img src="@/assets/img/author/1.jpg" alt="" />
        <div class="content">
          <ul class="info list-inline">
            <li>西蒙•艾伯特</li>
            <li class="dot"></li>
            <li>2021年1月15日</li>
          </ul>

          <p>
            如果他感到疼痛，他将被认为是有帮助的。他喜欢焦躁不安和痛苦，但他不想逃避这样的事情！
          </p>
          <div>
            <a href="#" class="link"> <i class="arrow_back"></i> 回复</a>
          </div>
        </div>
      </li>
      <li class="comment-item">
        <img src="@/assets/img/user/2.jpg" alt="" />
        <div class="content">
          <ul class="info list-inline">
            <li>亚当鲍勃</li>
            <li class="dot"></li>
            <li>2021年1月15日</li>
          </ul>

          <p>
            如果他感到疼痛，他将被认为是有帮助的。他喜欢焦躁不安和痛苦，但他不想逃避这样的事情！
          </p>

          <div>
            <a href="#" class="link"> <i class="arrow_back"></i> 回复</a>
          </div>
        </div>
      </li>
    </ul>
    <!--Leave-comments-->
    <div class="title">
      <h5>留下一个回复</h5>
    </div>
    <form class="widget-form" action="#" method="POST" id="main_contact_form">
      <p>
        您的电子邮件地址将不会公布，必填项已注明*。
      </p>
      <div
        class="alert alert-success contact_msg"
        style="display: none"
        role="alert"
      >
        您的信息发送成功。
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              class="form-control"
              placeholder="消息*"
              required="required"
            ></textarea>
          </div>
        </div>
        <div class="col-md-6">
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
        </div>
        <div class="col-md-6">
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
        </div>
        <div class="col-12 mb-20">
          <div class="form-group">
            <input
              type="text"
              name="website"
              id="website"
              class="form-control"
              placeholder="网站"
            />
          </div>
          <label>
            <input name="name" type="checkbox" value="1" required="required" />
            <span
              >保存我的名字，电子邮件和网站在这个浏览器，以备我下次评论。</span>
          </label>
        </div>
        <div class="col-12">
          <button type="submit" name="submit" class="btn-custom">
            提交评论
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style>
</style>