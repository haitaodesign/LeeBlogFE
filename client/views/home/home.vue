<template>
  <div>
    首页
    <v-btn depressed small>Normal</v-btn>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '我是首页'
  },
  name: 'home',
  mounted () {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>
