<template>
  <div class="lee-header clearfix">
    <div class="lee-header-title">
      leeHaitao
    </div>
    <div class="lee-header-right clearfix">
      <ul class="lee-header-nav clearfix">
        <li class="lee-header-item" v-for="item in navlist" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leeHeader',
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl';
.lee-header
  color #fff
  .lee-header-title
    float left
    width 120px
    text-align center
  .lee-header-right
    float right
    .lee-header-nav
      text-align center
      .lee-header-item
        float left
        height 100%
        width 80px
        list-style-type none
        cursor pointer
        &:hover
          background-color $secondary
</style>

