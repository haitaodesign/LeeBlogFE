<template>
  <div class="mardkown">
    <div class="markdown-body">
      <div v-html="content">
      </div>
      <div class="markdwon-footer">
        <p>作者<a href=""><code>李海涛</code></a>发表于<i>{{createAt}}</i>，最后修改于<i>{{updateAt}}</i></p>
        <p>本文章由leehaitao.com首发，转载请注明出处。</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import Article from '../../store/modules/article'
  export default {
    name: 'articleDetail',
    metaInfo: {
      title: '李海涛的博客——文章详情页'
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState('Article', [
        'content',
        'updateAt',
        'createAt'
      ])
    },
    mounted () {
      if (this.content === '') {
        this.initArticleDetail()
      }
    },
    asyncData ({store, route}) {
      const _id = route.params._id
      store.registerModule('Article', Article)
      return store.dispatch('Article/getArticleById', {_id, isEdit: false})
    },
    methods: {
      ...mapActions('Article', [
        'getArticleById'
      ]),
      initArticleDetail () {
        const _id = this.$route.params._id
        this.getArticleById({_id, isEdit: false})
      }
    }
  }
</script>

<style lang="stylus">
.markdown-body
  box-sizing border-box
  min-width 200px
  max-width 980px
  margin 0 auto
  padding 45px
@media (max-width 767px)
  .markdown-body
    padding 15px
</style>

