<template>
  <div>
    <div>
      <!-- <div>{{content.title}}</div> -->
      <div class="markdown-body" v-html="this.renderMarked()">
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import Article from '../../store/modules/article'
  import marked from 'marked'
  export default {
    name: 'articleDetail',
    data () {
      return {
      }
    },
    computed: {
      ...mapState('Article', [
        'content'
      ])
    },
    asyncData ({store, route}) {
      store.registerModule('Article', Article)
      const _id = route.params._id
      return store.dispatch('Article/getArticleById', {_id})
    },
    methods: {
      ...mapActions('Article', [
        'getArticleById'
      ]),
      renderMarked () {
        return marked(this.content.content)
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

