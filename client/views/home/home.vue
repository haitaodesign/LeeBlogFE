<template>
  <div class="lee-home">
    <!-- <card v-for="item in cardlist" :key="item">{{item}}</card> -->
    <card v-for="item in list" :key="item._id">
      <div class="article">
        <h1 class="article-title">{{ item.title }}</h1>
        <div class="article-createdate"><p>分类：{{ item.categoryId.name}}</p></div>
        <div class="article-label" v-for="label in item.labelId" :key="label._id">{{ label.name}}</div>
        <div class="article-content"><p>{{ item.content}}</p></div>
        <div class="article-readmore">阅读全文</div>
      </div>
    </card>
  </div>
</template>

<script>
  import Card from '@/Card/card.vue'
  import { mapState, mapActions } from 'vuex'
  import Article from '../../store/modules/article'
  export default {
    name: 'home',
    data () {
      return {
        cardlist: [1, 2, 3, 6]
      }
    },
    computed: {
      ...mapState('Article', [
        'list'
      ])
    },
    mounted () {
      if (this.list && this.list < 1) {
        this.getArticleList()
      }
    },
    asyncData ({store, router}) {
      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve(123)
      //   }, 1000)
      // })
      store.registerModule('Article', Article)
      return store.dispatch('Article/getArticleList')
    },
    methods: {
      ...mapActions('Article', [
        'getArticleList'
      ])
    },
    components: {
      Card
    }
  }
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/variable.styl';
.lee-home
  padding 10px
  .article
    padding 10px
    .article-title
      color  $primary
    .article-createdate
      color #9ea7b4
    .article-label
      margin 10px 0
    .article-content
      line-height 24px
    .article-readmore
      margin-top 10px
      padding-top 10px
      border-top 1px solid #dddee1
      color $primary
      cursor pointer
</style>

