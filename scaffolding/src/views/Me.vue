<template>
  <div class="home">
    <!-- 顶部header -->
    <mt-header title="我的主页">
      <div slot="left">返回</div>
      <div slot="right">分享</div>
    </mt-header>
    <!-- 导航栏 -->
    <!-- <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐</mt-tab-item>
      <mt-tab-item id="2">科技</mt-tab-item>
      <mt-tab-item id="3">数码</mt-tab-item>
    </mt-navbar> -->
    <!-- 切换面板 -->
    <!-- <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <p v-for="i in 60" :key="i"> 推荐面板{{i}}</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">科技面板</mt-tab-container-item>
      <mt-tab-container-item id="3">数码面板</mt-tab-container-item>
    </mt-tab-container>   -->
    <!-- 底部选项卡 -->
    <mt-tabbar v-model="tabactive" fixed>
      <mt-tab-item id="shouye">
        <!-- tabactive 如果是shouye 那就是1，不是那就是0 -->
        <img v-if="tabactive=='shouye'" src="@/assets/main_1.png" slot="icon">
        <img v-else src="@/assets/main_0.png" slot="icon">
        首页</mt-tab-item>
      <mt-tab-item id="wode">
        <img v-if="tabactive=='wode'" src="@/assets/me_1.png" slot="icon">
        <img v-else src="@/assets/me_0.png" slot="icon">
        我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
 data(){
   return{
     selected: '1',
     tabactive: 'wode'
   }
 },
  watch:{
    // 监听tabactive的变化，将会传入两个参数
    tabactive(newval, oldval){
      if(newval == 'shouye'){
        this.$router.push('/');
      }
    }
  }

}
</script>
