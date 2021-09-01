<template>
  <div class = "register">
    <!-- 标题栏 -->
    <mt-header title = "登录">
      <mt-button icon = "back" slot = "left"></mt-button>
      <router-link to = "/register" slot = "right">注册</router-link>
    </mt-header>
    <!-- 表单组件 -->
    <mt-field type = "text"
              placeholder = "请输入用户名"
              label = "用户名"
              v-model = "uname.val"
              :state = "uname.state"
              @blur.native.capture="checkName"></mt-field>  
              <!-- 为什么v-model可以获取到input，不是默认加载最外层么 -->
    <mt-field type = "password"
              placeholder = "请输入密码"
              label = "密码"
              v-model = "upwd.val"
              :state = "upwd.state"
              @blur.native.capture="checkPwd"></mt-field>
    <!-- 登录按钮 -->
    <mt-button type = "primary" size = "large" @click = "checkForm">
      登录
    </mt-button>
  </div>
</template>
<script>
export default ({
  data(){
    return{
      uname:{
        val: '' ,//与用户名文本框中的value 完成双向数据绑定
        state: '',
      },
      upwd:{
        val: '',
        state: ''
      }
    }
  },
  methods:{
    // 验证用户名
    checkName(){
      // 通过正则表达式， 验证value是否符合要求
      let reg = /^\w{6,15}$/;
      if(reg.test(this.uname.val)){
        // 合法 state success
        this.uname.state = "success";
        return true;
      }else{
        // 不合法 state error
        this.uname.state = "error";
        return false;
      }
    },
    // 验证密码
    checkPwd(){
      // 通过正则表达式，验证password的value是否符合要求
      let reg = /^\d{6}$/;
      if(reg.test(this.upwd.val)){
        // 合法 state success
        this.upwd.state = "success";
        return true;
      }else{
        // 不合法 state error
        this.upwd.state = "error";
        return false;
      }
    },
    checkForm(){  // 验证表单 验证3个Field组件是否合法
      // 验证用户名
      if(this.checkName() && this.checkPwd()){
        console.log('登录成功')
      }
    }
  }
})
</script>
