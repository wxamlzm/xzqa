<template>
  <div class="header">
    <mt-header title="一个测试">
      <div slot="left">返回</div>
      <div slot="right">分享</div>
    </mt-header>
    <mt-header title="另一个测试">
      <mt-button slot="left" icon="back"></mt-button>
      <div slot="right">
        <router-link class="link" to = "javascript:;">登录</router-link>
        &nbsp;
        <router-link class="link" to = "javascript:;">注册</router-link>
      </div>
    </mt-header>
  </div>
</template>

<style scoped>
.link{
  color: #FFF;
}
</style>