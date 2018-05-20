<template>
  <div class="lee-layout">
    <div class="lee-layout-top">
      <lee-header></lee-header>
      <div class="lee-main">
        <router-view></router-view>
      </div>
      <div class="lee-footer">
        @leehaitao
      </div>
    </div>
  </div>
</template>

<script>
import LeeHeader from '../components/leeHeader/leeHeader.vue'
export default {
  metaInfo: {
    title: '我是首页'
  },
  name: 'home',
  components: {
    LeeHeader
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/variable.styl';
.lee-layout-top
  height 64px
  line-height 64px
  background-color $primary
.lee-main
  height 100%
.lee-footer
  text-align center
</style>
