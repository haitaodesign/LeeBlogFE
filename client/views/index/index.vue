<template>
  <div class="lee-layout">
    <header class="lee-layout-top">
      <lee-header></lee-header>
    </header>
    <main class="lee-layout-main">
        <router-view></router-view>
    </main>
    <footer class="lee-layout-footer">
      <div>© 2018 leehaitao.com</div>
    </footer>
  </div>
</template>

<script>
import LeeHeader from '../components/leeHeader/leeHeader.vue'
export default {
  metaInfo: {
    title: '李海涛的博客'
  },
  name: 'home',
  components: {
    LeeHeader
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/variable.styl';
.lee-layout
  height 100%
  overflow-y auto
.lee-layout-top
  height 64px
  line-height 64px
  background-color $primary
.lee-layout-main
  margin 0 auto
  width 75%
  height 100%
.lee-layout-footer
  text-align center
@media screen and (max-width: 960px)
   .lee-layout-main
     width 100%
</style>
