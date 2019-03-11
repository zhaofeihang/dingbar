
import queryString from 'query-string';

export default {
  //请求数据
  getData(params) {
    if (params.method == "get") {
      return new Promise((resolve, reject) => {
        fetch(`http://testv1.shedouwang.com/apiapp${params.url}`).then(response => response.json()).then(result => {
          resolve(result.return_data);
        }).catch(error => {
          reject(error)
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        fetch(`http://testv1.shedouwang.com/apiapp${params.url}`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: params.method,
          body: queryString.stringify(params.param)
        }).then(response => response.json()).then(result => {
          resolve(result.return_data);
        }).catch(error => {
          reject(error);
        })
      })
    }
  }
}
