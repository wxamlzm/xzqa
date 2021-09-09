import axios from 'axios'
import { Indicator } from 'mint-ui';

// 在vue2.x中，避开跨模块封装的this问题
// 从服务器获取article数据，并绑定每次获取时的等待框
export const loadArticles = function(cid, page, callback){
  // 弹出等待框
    Indicator.open({
    text: '加载中',
    spinnerType: 'triple-bounce'
  });

  axios.get('/articles', {params:{cid:cid, page:page}})
  .then(result => {
    callback(result.data.results);
    console.log(result.data);
    Indicator.close();
  })
}