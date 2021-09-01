<template>
  <div class = "register">
    <!-- 标题栏 -->
    <mt-header title = "注册">
      <mt-button icon = "back" slot = "left"></mt-button>
      <router-link to = "/login" slot = "right">登录</router-link>
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
    <mt-field type = "password"
              placeholder = "请再次输入密码"
              label = "确认密码"
              v-model = "reupwd.val"
              :state = "reupwd.state"
              @blur.native.capture="checkRepwd"></mt-field>
    <!-- 注册按钮 -->
    <mt-button type = "primary" size = "large" @click = "checkForm">
      免费注册
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
      },
      reupwd:{
        val: '',
        state: ''
      }
    }
  },
  methods:{
    turnState(reg, obj){
      if(reg.test(obj.val)){
        // 合法 state success
        obj.state = "success";
      }else{
        // 不合法 state error
        obj.state = "error";
      }
    },
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
    // 验证再次输入的密码
    checkRepwd(){
      let reg = /^\d{6}$/;
      if(reg.test(this.reupwd.val) && this.reupwd.val == this.upwd.val){
        // 合法并且两次密码相同 state success
        this.reupwd.state = "success";
        return true;
      }else{
        // 不合法 或者 两次密码不相同 state success
        this.reupwd.state = "error";
        return false;
      }
    },
    checkForm(){  // 验证表单 验证3个Field组件是否合法
      // 验证用户名
      if(this.checkName() && this.checkPwd() && this.checkRepwd()){
        console.log('注册成功')
      }
    }
  }
})
</script>
