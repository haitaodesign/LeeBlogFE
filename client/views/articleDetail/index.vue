<template>
  <div>
      <div class="markdown-body" v-html="renderContent">
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
        'content'
      ]),
      renderContent () {
        return this.$store.state.Article.content.content
      }
    },
    mounted () {
      if (this.renderContent && this.renderContent === '') {
        this.initArticleDetail()
      }
    },
    asyncData ({store, route}) {
      const _id = route.params._id
      store.registerModule('Article', Article)
      return store.dispatch('Article/getArticleById', {_id})
    },
    methods: {
      ...mapActions('Article', [
        'getArticleById'
      ]),
      initArticleDetail () {
        const content = this.content.content
        if (content === undefined) {
          const _id = this.$route.params._id
          this.getArticleById({_id})
        }
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

