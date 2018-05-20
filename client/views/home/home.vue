<template>
  <div class="lee-layout">
    <div class="lee-layout-top">
      <lee-header></lee-header>
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
  data () {
    return {
      navlist: [
        { id: 0, name: '首页' },
        // { id: 1, name: '分类' },
        // { id: 2, name: '归档' },
        { id: 3, name: '关于' }
      ]
    }
  },
  methods: {
    handleOnNavItemClick (e) {
      console.log(e)
    }
  },
  components: {
    LeeHeader
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/variable.styl';
.lee-layout-top{
  height 64px
  line-height 64px
  background-color $primary
  color #fff;
}
</style>
