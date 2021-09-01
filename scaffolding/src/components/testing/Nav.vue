<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐</mt-tab-item>
      <mt-tab-item id="2">科技</mt-tab-item>
      <mt-tab-item id="3">数码</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">推荐面板</mt-tab-container-item>
      <mt-tab-container-item id="2">科技面板</mt-tab-container-item>
      <mt-tab-container-item id="3">数码面板</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default ({
  data(){
    return{
      selected: '1'
    }
  }
})
</script>
