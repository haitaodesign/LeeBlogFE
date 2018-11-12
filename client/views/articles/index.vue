<template>
  <div class="lee-home">
    <card v-for="item in list" :key="item._id" class="article">
      <h1 class="article-title" @click="handleClick(item._id)">{{ item.title }}</h1>
      <div class="article-createdate"><p>分类：{{ item.categoryId.name }}</p></div>
      <div class="article-label" >
        <Tag type="border" v-for="label in item.labelId" :key="label._id">{{ label.name}}</Tag>
      </div>
      <div class="article-content" v-html="markedRender(item.content)"></div>
      <div class="article-readmore">
        <span @click="handleClick(item._id)">
          阅读全文
        </span>
      </div>
    </card>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Article from '../../store/modules/article'
  import marked from 'marked'
  export default {
    name: 'home',
    metaInfo: {
      title: '李海涛的博客——文章'
    },
    data () {
      return {
        params: {
          current: 1,
          pageSize: 10,
          categoryId: '',
          labelId: ''
        }
      }
    },
    computed: {
      ...mapState('Article', [
        'list'
      ])
    },
    mounted () {
      if (this.list && this.list.length < 1) {
        this.getArticleList(this.params)
      }
    },
    asyncData ({store, router}) {
      store.registerModule('Article', Article)
      return store.dispatch('Article/getArticleList', this.params)
    },
    methods: {
      ...mapActions('Article', [
        'getArticleList'
      ]),
      handleClick (_id) {
        window.open(window.location.href + '/' + _id)
      },
      markedRender (content) {
        const abstract = content.split('<--more>')[0]
        return marked(abstract)
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/variable.styl';
.lee-home
  padding 10px
  .article
    margin-top 10px
    .article-title
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

