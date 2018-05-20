<template>
  <div class="lee-card">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Card'
  }
</script>

<style lang="stylus" scoped>
.lee-card
  margin 16px
  border 1px solid #dddee1
  border-radius 3px
  background-color #fff
  &:hover
    box-shadow:#dddee1 0 0 10px ;
</style>

