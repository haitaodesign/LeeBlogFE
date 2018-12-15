<template>
  <div class="lee-header clearfix">
    <div class="lee-header-logo" @click="handleLogoClick">
      leehiatao.com
    </div>
    <div class="lee-header-nav">
      <Menu mode="horizontal" theme="primary" active-name="文章" @on-select="handleOnSelectClick">
         <MenuItem :name="item.name" v-for="item in navlist" :key="item.id">
            {{item.name}}
        </MenuItem>
      </Menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'leeHeader',
    data () {
      return {
        navlist: [
          { id: 0, name: '文章' },
          // { id: 1, name: '分类' },
          // { id: 2, name: '归档' },
          { id: 3, name: '关于' }
        ]
      }
    },
    methods: {
      handleOnSelectClick (name) {
        if (name === '文章') {
          this.$router.push({path: '/articles'})
        } else if (name === '关于') {
          this.$Message.info('开发中。。。')
        }
      },
      handleLogoClick () {
        window.location.reload()
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'
.lee-header
  width 1080px
  margin 0 auto
  .lee-header-logo
    padding 0 10px
    float left
    color #fff
    font-size 18px
    cursor pointer
  .lee-header-nav
    margin-left 20px
    float left
</style>

