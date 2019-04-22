// const openAlbum = () => {
//    return new Promise((resolve, reject) => {
//      navigator.camera.getPicture(onSuccess, onFail, {
//        quality: 50,
//        destinationType: Camera.DestinationType.DATA_URL,
//        sourceType: 0
//      })
 
//      function onSuccess (imageData) {
//        resolve('data:image/jpeg;base64,' + imageData)
//      }
 
//      function onFail (message) {
//        reject(message)
//      }
//    })
//  }
 
const takePicture = () => {
   return new Promise((resolve, reject) => {
     navigator.camera.getPicture(onSuccess, onFail, {
       quality: 50,
       destinationType: Camera.DestinationType.FILE_URL,
       sourceType: 1
     })
 
     function onSuccess (imageData) {
       resolve(imageData)
     }
 
     function onFail (message) {
       reject(message)
     }
   })
 }
 const openAlbum = (count=9) => {
  return new Promise((resolve, reject) => {
    window.imagePicker.getPictures(
      function(results) {
        resolve(results);
      }, function (error) {
        reject(error);
      }, {
        maximumImagesCount: count
      }
    );
  })
}
 export {
   openAlbum,
   takePicture
 }