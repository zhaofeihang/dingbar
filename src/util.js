import queryString from 'query-string';

export default {
  //请求数据
  getData(params) {
    if (params.method == "get") {
      return new Promise((resolve, reject) => {
        fetch(`http://www.shedouwang.com/apiapp${params.url}`).then(response => response.json()).then(result => {
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
        fetch(`http://www.shedouwang.com/apiapp${params.url}`, {
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
        fetch(`http://www.shedouwang.com/apiapp${params.url}`).then(response => response.json()).then(result => {
          resolve(result);
        }).catch(error => {
          reject(error)
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        fetch(`http://www.shedouwang.com/apiapp${params.url}`, {
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
  testRequest(params) {
    if (params.method == "get") {
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000${params.url}`).then(response => response.json()).then(result => {
          resolve(result);
        }).catch(error => {
          reject(error)
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        fetch(`http://localhost:3000${params.url}`, {
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
      img.setAttribute("crossOrigin",'Anonymous')
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
  },
  formdata(params) {
    const formData = new FormData();
    Object.keys(params).forEach((key) => {
      if(params[key] instanceof Array) {
        formData.append(key, params[key]);
        params[key].forEach((item) => {
          formData.append(key, item+'');
        });
      }else {
        formData.append(key, params[key]+'');
      }
    });
  },
  //微信登录
  wechatLogin(vm) {
    var scope = "snsapi_userinfo",
      state = "_" + +new Date();
    Wechat.auth(
      scope,
      state,
      async (response) => {
        let data = await this.getData({
          url: `/oauth/index?code=${response.code}`,
          method: 'get'
        });
        if(data.bind == 0) {
          vm.$router.push({
            path: '/page/user/BandUserInfo',
            name: 'BandUserInfo',
            params: {
              wechatUserinfo: data
            }
          });
        }else {
          localStorage.setItem('userInfo',JSON.stringify(data));
          vm.$vux.toast.show({
            text: '登录成功',
            onHide: () => {
              vm.$router.push({
                path: '/'
              });
            }
          });
        }
      },
      function(reason) {
        this.$vux.alert.show({
          title: "提示",
          content: "Failed: " + reason
        });
      }
    );
  }
}
