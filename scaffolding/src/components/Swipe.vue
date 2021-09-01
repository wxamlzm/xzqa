<template>
  <div class="swipe" :style = '{height}'>
    <mt-swipe :speed = "250"
              :auto = "3000"
              :showIndicators = "true">
      <mt-swipe-item>
        <img src="/1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/2.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/3.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "swipe",
  data(){
    return{
      height: '210px'
    }
  },
  
  mounted(){
    let pich = 1242;
    let picw = 698;
    let screenw = window.screen.width;

    this.height = (picw * `${screenw}` / pich) + 'px';
  }
}
</script>

<style>
  .swipe img{
    width: 100vw;
  }
</style>