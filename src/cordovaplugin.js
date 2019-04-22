const takePicture = () => {
  return new Promise((resolve, reject) => {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URL,
      sourceType: 1
    })

    function onSuccess(imageData) {
      resolve(imageData)
    }

    function onFail(message) {
      reject(message)
    }
  })
}
const openAlbum = (count = 9) => {
  return new Promise((resolve, reject) => {
    ImagePicker.getPictures(function (result) {
      let imgs = result.images;
      let imgArr = [];
      imgs.forEach((item, index) => {
        imgArr.push(item.path);
      });
      resolve(imgArr);
    }, function (err) {
      reject(err);
    }, {
        maximumImagesCount: count,
        width: 675,
        height: 934,
        quality: 100
      });
  })
}
const saveImg = (base64Data) => {
  return new Promise((resolve, reject) => {
    var params = {data: base64Data, prefix: 'suishoupai_img_', format: 'JPG', quality: 100, mediaScanner: true};
    window.imageSaver.saveBase64Image(params,
        function (filePath) {
          resolve(filePath);
        },
        function (msg) {
          reject(msg);
        }
      );
  })
}
export {
  openAlbum,
  takePicture,
  saveImg
}