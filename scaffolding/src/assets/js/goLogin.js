// 向数据库发送post请求检验是否符合；
// 登录成功后页面跳转，并带着在本页面输入的用户名，到首页，并在首页可以获取到
import axios from 'axios'

export const goLogin = (objAjax) => {
    axios
    .post('login', `username=${objAjax.uname}&password=${objAjax.upwd}`)
    .then(result => {objAjax.callback(result.data)});
}