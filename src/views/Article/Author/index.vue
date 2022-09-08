<template>
  <div class="widget">
    <div class="widget-author">
      <a href="author.html" class="image">
        <img :src="userInfo.avatar" alt="" />
      </a>
      <h6>
        <span>你好，我是{{ userInfo.name}}</span>
      </h6>
      <p>
        {{ userInfo.desc}}
      </p>

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
</template>

<script>
export default {
  name: "Author",
  props: ['info'],
  computed: {
    userInfo() {
      return this.info || {}
    }
  }
};
</script>

<style>
</style>