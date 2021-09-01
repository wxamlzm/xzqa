<template>
  <div class="test">
    <h1>测试页面</h1>
    <emit-test></emit-test>
    <blog-post v-on:enlarge-text = "postFontSize += $event"></blog-post>
  </div>
</template>

<script>
import EmitTest from '@/components/testing/EmitTest.vue'

export default {
  components:{
    EmitTest
  },
  data(){
    return{
      postFontSize: 1
    }
  }
}
</script>