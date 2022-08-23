<template>
  <div>
    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright">
              <p>© 版权所有 2022 <router-link to="/about">MG Blog</router-link>，保留所有权利。</p>
              <p>
                <a id="ICPFiling" href="https://beian.miit.gov.cn" role="link"
                  >闽ICP备2022004263号-2</a
                >
              </p>
            </div>
            <div class="back">
              <a
                href="#"
                class="back-top"
                :style="{ display: isShowBack == true ? 'block' : 'none' }"
              >
                <i class="arrow_up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isShowBack: false,
    };
  },
  methods: {
    handleScroll() {
      // 滚动条偏移量
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 窗口的内层高度
      let browserHeight = window.innerHeight;
      // 如果滚动条位置大于窗口内层高度，就显示back
      this.isShowBack = scrollTop > browserHeight ? true : false;
    }
  },
  mounted() {
    //监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.footer {
  background-color: #152035;
}

.footer .copyright {
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer .copyright p {
  margin-bottom: 0;
  font-size: 14px;
  text-align: center;
  color: #eee;
}

.footer .copyright p a {
  font-weight: 700;
}

.footer .back {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.footer .back .back-top {
  width: 45px;
  height: 45px;
  background-color: #f67280;
  position: fixed;
  bottom: 15px;
  right: 30px;
  border-radius: 50%;
  z-index: 9;
  display: none;
  text-align: center;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.footer .back .back-top i {
  color: #ffffff;
  line-height: 45px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
}

.footer .back .back-top:hover {
  -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  background-color: #506172;
}

.footer .back .back-top:hover i {
  color: #ffffff;
}
</style>