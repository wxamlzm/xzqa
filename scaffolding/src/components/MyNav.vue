<template>
  <mt-navbar class="nav" v-model="selected" fixed>
    <mt-tab-item id="1">推荐</mt-tab-item>
    <mt-tab-item id="2">科技</mt-tab-item>
    <mt-tab-item id="3">数码</mt-tab-item>
  </mt-navbar>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyNav',
  data(){
    return{
      selected: '1',
    }
  },
  mounted(){
    axios.get('/category').then(result => {
      console.log(result);
    })
  },

}
</script>