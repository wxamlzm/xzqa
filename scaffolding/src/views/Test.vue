<template>
  <div class="test">
    <h1>测试页面</h1>
    <article-item :selected = "1"></article-item>
    <router-link to="/test/demo1">demo1</router-link>|
    <router-link to="/test/demo2">demo2</router-link>|
    <router-link to="/test/demo3">demo3</router-link>|
    <router-link to="/test/demo4">demo4</router-link>|
    <router-link to="/test/demo5">demo5</router-link>|
    <router-link to="/test/demo6">demo6</router-link>|
    <router-link to="/test/demo7">demo7</router-link>|

    <router-view></router-view>
  </div>
</template>

<script>
// import Inf from '@/components/testing/Inf.vue'
import ArticleItem from '@/components/ArticleItem.vue'

export default {
  name: "Test",
  components:{
    ArticleItem,
  },
  data(){
    return{

    }
  }
}
</script>