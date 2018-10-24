<template>
  <div class="lee-layout">
    <div class="lee-layout-top">
      <lee-header></lee-header>
    </div>
    <div class="lee-layout-main">
        <router-view></router-view>
    </div>
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
@media screen and (max-width: 960px)
   .lee-layout-main
     width 100%
</style>
