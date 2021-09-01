// 验证用户名
export const checkName = () => {
  // 通过正则表达式， 验证value是否符合要求
  console.log(this);
  let reg = /^\w{6,15}$/;
  console.log(this.uname);
  if(reg.test(this.uname)){
    // 合法 state success
    console.log(1);
    this.nameState = "success";
  }else{
    // 不合法 state error
    console.log(2);
    this.nameState = "error";
  }
}