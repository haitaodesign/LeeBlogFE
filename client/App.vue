<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './todo/test.jsx'
export default {
  metaInfo: 'leehaitao的博客',
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Test
  }
}
</script>

