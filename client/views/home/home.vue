<template>
  <div>
    <v-app>
      <v-toolbar app color="primary">
        <v-toolbar-title class="white--text">LeeHaiTao</v-toolbar-title>
        <v-spacer></v-spacer>
        <ul class="nav">
          <li class="item" v-for="item in navlist" :key="item.id" @click="handleOnNavItemClick(item.name)">{{item.name}}</li>
        </ul>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app>leehaitao</v-footer>
    </v-app>
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
.nav
  height 64px
  line-height 64px
  color #fff
  .item
    list-style none !important
    float left
    width 100px
    text-align center
    cursor pointer
    &:hover
      background-color $secondary
</style>
