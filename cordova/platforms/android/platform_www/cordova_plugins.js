cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-image-picker.ImagePicker",
    "file": "plugins/cordova-plugin-image-picker/www/imagepicker.js",
    "pluginId": "cordova-plugin-image-picker",
    "clobbers": [
      "plugins.imagePicker"
    ]
  },
  {
    "id": "cordova-plugin-wechat.Wechat",
    "file": "plugins/cordova-plugin-wechat/www/wechat.js",
    "pluginId": "cordova-plugin-wechat",
    "clobbers": [
      "Wechat"
    ]
  },
  {
    "id": "cordova-plugin-payments-alipay.Alipay",
    "file": "plugins/cordova-plugin-payments-alipay/www/Alipay.js",
    "pluginId": "cordova-plugin-payments-alipay",
    "clobbers": [
      "Alipay"
    ]
  },
  {
    "id": "cordova-save-image-gallery.saveImageGallery",
    "file": "plugins/cordova-save-image-gallery/www/saveImageGallery.js",
    "pluginId": "cordova-save-image-gallery",
    "clobbers": [
      "cordova.saveImageGallery"
    ]
  },
  {
    "id": "cordova-plugin-imagepicker.ImagePicker",
    "file": "plugins/cordova-plugin-imagepicker/www/ImagePicker.js",
    "pluginId": "cordova-plugin-imagepicker",
    "clobbers": [
      "ImagePicker"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-console": "1.1.0",
  "cordova-plugin-image-picker": "1.1.1",
  "cordova-plugin-wechat": "2.7.2",
  "cordova-plugin-cocoapod-support": "1.6.0",
  "cordova-plugin-payments-alipay": "1.0.3",
  "cordova-save-image-gallery": "0.0.26",
  "cordova-android-support-gradle-release": "2.1.0",
  "cordova-plugin-imagepicker": "1.1.6",
  "cordova-plugin-crosswalk-webview": "2.4.0"
};
// BOTTOM OF METADATA
});