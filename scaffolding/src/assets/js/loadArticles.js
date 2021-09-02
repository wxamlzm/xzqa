import axios from 'axios'

export const loadArticles = (id, page, callback) =>{
  axios.get('/article', {params:{id:id, page:page}})
  .then(result => {
    callback(result.data.results);
  })
}