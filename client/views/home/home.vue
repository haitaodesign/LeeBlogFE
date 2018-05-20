<template>
  <div class="lee-home">
    <!-- <card v-for="item in cardlist" :key="item">{{item}}</card> -->
    <card>
      <div class="article">
        <h1 class="article-title">vue入门教程</h1>
        <div class="article-createdate"><p>发布时间： 2018-05-20</p></div>
        <div class="article-label">计划</div>
        <div class="article-content"><p>主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘
          要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要</p></div>
        <div class="article-readmore">阅读全文</div>
      </div>
    </card>
     <card>
      <div class="article">
        <h1 class="article-title">vue入门教程</h1>
        <div class="article-createdate"><p>发布时间： 2018-05-20</p></div>
        <div class="article-label">计划</div>
        <div class="article-content"><p>主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘
          要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要</p></div>
        <div class="article-readmore">阅读全文</div>
      </div>
    </card>
     <card>
      <div class="article">
        <h1 class="article-title">vue入门教程</h1>
        <div class="article-createdate"><p>发布时间： 2018-05-20</p></div>
        <div class="article-label">计划</div>
        <div class="article-content"><p>主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘
          要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要</p></div>
        <div class="article-readmore">阅读全文</div>
      </div>
    </card>
     <card>
      <div class="article">
        <h1 class="article-title">vue入门教程</h1>
        <div class="article-createdate"><p>发布时间： 2018-05-20</p></div>
        <div class="article-label">计划</div>
        <div class="article-content"><p>主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘
          要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要主要摘要</p></div>
        <div class="article-readmore">阅读全文</div>
      </div>
    </card>
  </div>
</template>

<script>
  import Card from '@/card/card.vue'
  export default {
    name: 'home',
    data () {
      return {
        cardlist: [1, 2, 3, 6]
      }
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

