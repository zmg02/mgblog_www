<template>
  <div class="search" :class="searchOpen">
    <div class="container-fluid">
      <div class="row">
        <div
          class="
            col-lg-6
            offset-lg-3
            col-md-8
            offset-md-2
            col-sm-10
            offset-sm-1
            text-center
          "
        >
          <button type="button" class="close" @click="searchOpen['search-open'] = false">
            <i class="icon_close"></i>
          </button>
          <form class="search-form" action="#">
            <input
              type="search"
              value=""
              placeholder="你在找什么？"
            />
            <button type="submit" class="search-btn">搜索</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            searchOpen: {
                'search-open': false,
            }
        }
    },
    mounted() {
        this.$bus.$on('search', () => {
          this.searchOpen['search-open'] = true;
        })
    },
};
</script>

<style>
.search-open {
    -webkit-transform: translate(0px, 0px) scale(1, 1);
    transform: translate(0px, 0px) scale(1, 1);
    opacity: 1;
    visibility: visible;
    overflow: hidden;
}
</style>