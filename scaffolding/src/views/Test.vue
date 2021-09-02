<template>
  <div class="test">
    <h1>测试页面</h1>
    <article-item :selected = "1"></article-item>
  </div>
</template>

<script>
// import Inf from '@/components/testing/Inf.vue'
import ArticleItem from '@/components/ArticleItem.vue'

export default {
  name: "Test",
  components:{
    // Inf
    ArticleItem
  },
  data(){
    return{

    }
  }
}
</script>