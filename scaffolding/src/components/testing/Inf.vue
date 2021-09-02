<template>
  <!-- 利用mint-ui的自定义事件，绑定事件处理函数 -->
  <ul v-infinite-scroll = "showMore">
    <li v-for = "i in n" :key = "i">{{i}}</li>
  </ul>
  <!-- 在每次滚动到底后，递增给到的数据数目 -->
</template>

<script>
export default {
  name: "Inf",
  data(){
    return{
      n: 60
    }
  },
  methods:{
    showMore(){
      console.log('到底了')
      this.n += 20;
    }
  }
}
</script>