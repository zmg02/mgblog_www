<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <!--logo-->
        <div class="logo">
          <router-link to="/home">
            <img src="~@/assets/img/logo.png" alt="" />
          </router-link>
        </div>
        <!--/-->

        <!--navbar-collapse-->
        <div class="collapse navbar-collapse" id="main_nav" :style="{ display: navbar ? 'block' : 'none' }">
          <ul class="navbar-nav ml-auto mr-auto">
            <li class="nav-item">
              <router-link to="/home" class="nav-link" active-class="active" @click.native="showNavItem($event)"> 首页 </router-link>
            </li>

            <li class="nav-item dropdown" :class="show==2?'show':''">
              <router-link
                to="/blog"
                class="nav-link dropdown-toggle"
                active-class="active"
                data-toggle="dropdown"
                @click.native="showNavItem($event)"
                >博客</router-link
              >
              <ul class="dropdown-menu fade-up" :class="show==2?'show':''">
                <li>
                  <router-link
                    to="/blog/grid"
                    class="dropdown-item"
                    active-class="active"
                    @click.native="navbar=false"
                    >博客-网格</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/blog/masonry"
                    class="dropdown-item"
                    active-class="active"
                    @click.native="navbar=false"
                    >博客-瀑布</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown" :class="show==3?'show':''">
              <router-link
                to="/posts/default"
                active-class="active"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                @click.native="showNavItem($event)"
                >帖子样式</router-link
              >
              <ul class="dropdown-menu fade-up" :class="show==3?'show':''">
                <li>
                  <router-link
                    to="/posts/default"
                    active-class="active"
                    class="dropdown-item"
                    @click.native="navbar=false"
                    >默认</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/posts/no-sidebar"
                    active-class="active"
                    class="dropdown-item"
                    @click.native="navbar=false"
                    >没有侧边栏</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/posts/left-sidebar"
                    active-class="active"
                    class="dropdown-item"
                    @click.native="navbar=false"
                    >左侧边栏</router-link
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link to="/about" class="nav-link" active-class="active" @click.native="showNavItem($event)"> 关于 </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" active-class="active" @click.native="showNavItem($event)"> 联系我 </router-link>
            </li>
          </ul>
        </div>
        <!--/-->

        <!--navbar-right-->
        <div class="navbar-right ml-auto">
          <div class="social-icones">
            <ul class="list-inline">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="search-icon" @click="$bus.$emit('search')">
            <i class="icon_search"></i>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="navbarToggler"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navbar: false,
      show: 0,
    }
  },
  methods: {
    navbarToggler() {
      this.navbar = !this.navbar;
    },
    showNavItem(event) {
      // 点击的a元素
      const target = event.currentTarget.text;
      switch (target) {
        case '首页':
          this.show = 1;
          break;
        case '博客':
          this.show = 2;
          break;
        case '帖子样式':
          this.show = 3;
          break;
        default:
          this.show = 0;
          this.navbar = false;
      }
    }
  },
};
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  padding: 15px 15px;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.navbar-scroll {
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.navbar .logo img {
  max-height: 40px;
}

.navbar .nav-item .nav-link {
  font-weight: 700;
  color: #152035;
  font-size: 16px;
  padding: 0px 40px 0px 0px;
  display: inline-block;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  position: relative;
}

.navbar .nav-item .nav-link i {
  color: #f67280;
}

.navbar .nav-item .nav-link.active,
.navbar .nav-item .nav-link:hover {
  color: #f67280;
  background-color: #ffffff;
}

.navbar .nav-item:last-child .nav-link {
  padding-right: 0;
}

.navbar .nav-item .dropdown-toggle::after {
  border: 0 none;
  line-height: normal;
  margin-left: 5px;
  vertical-align: middle;
  font-family: "Font Awesome 5 Free";
  content: "\f107";
  font-weight: 400;
  margin-left: 5px;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.navbar .nav-item .dropdown-menu {
  border: 0px;
  padding: 20px;
  -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
}

.navbar .nav-item .dropdown-menu .dropdown-item {
  color: #152035;
  padding: 0;
  margin-bottom: 15px;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 700;
  text-transform: capitalize;
}

.navbar .nav-item .dropdown-menu .dropdown-item:hover,
.navbar .nav-item .dropdown-menu .dropdown-item.active {
  background-color: #ffffff;
  color: #f67280;
}

.navbar .nav-item .dropdown-menu li:last-child .dropdown-item {
  margin-bottom: 0;
}

.navbar .nav-item:hover .nav-link {
  color: #f67280;
}

.navbar-toggler {
  width: 40px;
  height: 40px;
  position: relative;
  margin: 0;
  padding: 0;
  margin-left: 10px;
  border: none;
}

.navbar-toggler span {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 25px;
  height: 2px;
  margin: auto;
  -webkit-box-shadow: 0px -8px 0 0px currentColor, 0px 8px 0 0px currentColor;
  box-shadow: 0px -8px 0 0px currentColor, 0px 8px 0 0px currentColor;
  background: #152035;
}

.navbar-right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: auto;
}

.navbar-right .social-icones {
  margin-right: 10px;
}

.navbar-right .search-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #f67280;
  text-align: center;
  display: block;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.navbar-right .search-icon i {
  line-height: 35px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  display: block;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.navbar-right .search-icon:hover {
  background-color: #506172;
}

@media all and (min-width: 991px) {
  .navbar .nav-item .dropdown-menu {
    display: block;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    margin-top: 10px;
  }
  .navbar .nav-item:hover .dropdown-menu {
    -webkit-transition: 0.3s;
    transition: 0.3s;
    opacity: 1;
    visibility: visible;
    top: 100%;
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  .navbar .dropdown-menu.fade-up {
    top: 180%;
  }
}
</style>