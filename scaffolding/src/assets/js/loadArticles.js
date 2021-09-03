import axios from 'axios'

export const loadArticles = (cid, page, callback) => {
  // 弹出等待框
  this.$indicator.open({
    text: '加载中',
    spinnerType: 'triple-bounce'
  });

  axios.get('/articles', {params:{cid:cid, page:page}})
  .then(result => {
    callback(result.data.results);
    this.$indicator.close();
  })
}