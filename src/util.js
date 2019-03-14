import queryString from 'query-string';

export default {
  //请求数据
  getData(params) {
    if (params.method == "get") {
      return new Promise((resolve, reject) => {
        fetch(`http://testv1.shedouwang.com/apiapp${params.url}`).then(response => response.json()).then(result => {
          if (result.return_code == 'success') {
            resolve(result.return_data);
          } else {
            this.$vux.alert.show({
              title: '提示',
              content: result.return_data
            });
          }
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
          if (result.return_code == 'success') {
            resolve(result.return_data);
          } else {
            this.$vux.alert.show({
              title: '提示',
              content: result.return_data
            });
          }
        }).catch(error => {
          reject(error);
        })
      })
    }
  },
  request(params) {
    if (params.method == "get") {
      return new Promise((resolve, reject) => {
        fetch(`http://testv1.shedouwang.com/apiapp${params.url}`).then(response => response.json()).then(result => {
          resolve(result);
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
          resolve(result);
        }).catch(error => {
          reject(error);
        })
      })
    }
  },
  //转换图片
  convertImg(imgSrc, width, height) {
    return new Promise((resolve,reject) => {
      var canvasT = document.createElement('CANVAS');
      var ctx = canvasT.getContext('2d');
      var img = new Image();
      img.src = imgSrc;
      setTimeout(() => {
        if (img.width > img.height) {
          canvasT.width = width;
          canvasT.height = canvasT.width / img.width * img.height;
        } else {
          canvasT.height = height;
          canvasT.width = canvasT.height / img.height * img.width;
        }
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvasT.width, canvasT.height);
        setTimeout(() => {
          resolve(canvasT.toDataURL('image/jpeg', 0.6));
        }, 100);
      }, 200);
    });
  }
}
