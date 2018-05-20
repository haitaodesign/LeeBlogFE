<template>
  <div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/variable.styl';
</style>
