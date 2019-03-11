import axios from 'axios'

export default {
  //请求数据
  getData(params) {
    if (params.method == "get") {
      return new Promise((resolve, reject) => {
        fetch(`/apiapp${params.url}`).then(response => response.json()).then(result => {
          resolve(result.return_data);
        }).catch(error => {

          reject(error)
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        fetch(`/apiapp${params.url}`, {
          method: params.method,
          body: JSON.stringify(params.param)
        }).then(response => response.json()).then(result => {
          resolve(result.return_data);
        }).catch(error => {

          reject(error);
        })
      })
    }
  },
  getData1(params) {
    if (params.method == "get") {
      return new Promise((resolve, reject) => {
        axios.get(`/apiapp${params.url}`)
          .then(function (response) {
            resolve(response.data.return_data);
          })
          .catch(function (error) {
            reject(error);
          });
      })
    }else {
      return new Promise((resolve, reject) => {
        axios.post(`/apiapp${params.url}`, params.param)
          .then(function (response) {
            resolve(response.data.return_data);
          })
          .catch(function (error) {
            reject(error);
          });
      })
    }
  },
}
