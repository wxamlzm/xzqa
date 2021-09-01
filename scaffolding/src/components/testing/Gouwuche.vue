<template>
  <div>
    我是购物车！
    <mt-tabbar v-model="tabactive">
      <mt-tab-item id="shouye">
        <!-- tabactive 如果是shouye 那就是1，不是那就是0 -->
        <img v-if="tabactive=='shouye'" src="@/assets/main_1.png" slot="icon">
        <img v-else src="@/assets/main_0.png" slot="icon">
        首页</mt-tab-item>
      <mt-tab-item id="gouwuche">
        <img v-if="tabactive=='gouwuche'" src="@/assets/cart_1.png" slot="icon">
        <img v-else src="@/assets/cart_0.png" slot="icon">
        购物车</mt-tab-item>
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
    return {
      tabactive: 'gouwuche'
    }
  },
  watch:{
    tabactive(newval, oldval){
      if(newval == 'shouye'){
        this.$router.push('/tabbar');
      }else if(newval == 'wode'){
        this.$router.push('wode')
      }
    }
  }
}
</script>