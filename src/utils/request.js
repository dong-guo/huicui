import axios from 'axios'
class Request {
  getData ({ url, params, method = 'GET' }) {
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        params: params,
        method: method
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  getPostData ({url, data}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        params: data
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // }
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export {Request}
