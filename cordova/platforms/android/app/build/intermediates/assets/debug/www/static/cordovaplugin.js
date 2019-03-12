const openAlbum = () => {
   return new Promise((resolve, reject) => {
     navigator.camera.getPicture(onSuccess, onFail, {
       quality: 50,
       destinationType: Camera.DestinationType.DATA_URL,
       sourceType: 0
     })
 
     function onSuccess (imageData) {
       resolve('data:image/jpeg;base64,' + imageData)
     }
 
     function onFail (message) {
       reject(message)
     }
   })
 }
 
const takePicture = () => {
   return new Promise((resolve, reject) => {
     navigator.camera.getPicture(onSuccess, onFail, {
       quality: 50,
       destinationType: Camera.DestinationType.DATA_URL,
       sourceType: 1
     })
 
     function onSuccess (imageData) {
       resolve('data:image/jpeg;base64,' + imageData)
     }
 
     function onFail (message) {
       reject(message)
     }
   })
 }
const openFilePicker = (selection) => {

  var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
  var options = setOptions(srcType);
  var func = createNewFileEntry;

  if (selection == "picker-thmb") {
      // To downscale a selected image,
      // Camera.EncodingType (e.g., JPEG) must match the selected image type.
      options.targetHeight = 100;
      options.targetWidth = 100;
  }

  navigator.camera.getPicture(function cameraSuccess(imageUri) {

      // Do something with image

  }, function cameraError(error) {
      console.debug("Unable to obtain picture: " + error, "app");

  }, options);
}
 export {
   openAlbum,
   takePicture,
   openFilePicker
 }