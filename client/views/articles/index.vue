<template>
  <div class="lee-home">
    <card v-for="item in list" :key="item._id">
      <div class="article">
        <h1 class="article-title" @click="handleClick(item._id)">{{ item.title }}</h1>
        <div class="article-createdate"><p>分类：{{ item.categoryId.name }}</p></div>
        <div class="article-label" v-for="label in item.labelId" :key="label._id">{{ label.name}}</div>
        <div class="article-content"><p>{{ item.content}}</p></div>
        <div class="article-readmore">
          <span @click="handleClick(item._id)">
            阅读全文
          </span>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Article from '../../store/modules/article'
  export default {
    name: 'home',
    data () {
      return {
      }
    },
    computed: {
      ...mapState('Article', [
        'list'
      ])
    },
    mounted () {
      if (this.list && this.list.length < 1) {
        this.getArticleList()
      }
    },
    asyncData ({store, router}) {
      store.registerModule('Article', Article)
      return store.dispatch('Article/getArticleList')
    },
    methods: {
      ...mapActions('Article', [
        'getArticleList'
      ]),
      handleClick (_id) {
        this.$router.push({ path: 'articles/' + _id })
      }
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
      cursor pointer
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

