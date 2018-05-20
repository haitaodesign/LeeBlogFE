<template>
  <div class="lee-header clearfix">
    <div class="lee-header-title">
      leeHaitao
    </div>
    <div class="lee-header-right clearfix">
      <ul class="lee-header-nav clearfix">
        <li class="lee-header-item">首页</li>
        <li class="lee-header-item">关于</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leeHeader',
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.lee-header
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
        list-style-type none
        height 100%
        width 80px
</style>

