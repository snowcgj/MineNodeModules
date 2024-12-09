function getFile(filePath) {
    return new Promise((resolve, reject) => {
      reject(new Error('H5 平台不支持直接读取本地文件'));
    });
  }

// import QrScanner from 'qr-scanner';
function scanQRCode() {
    // return new Promise((resolve, reject) => {
    //   navigator.mediaDevices.getUserMedia({ video: true })
    //     .then(stream => {
    //       const videoElement = document.createElement('video');
    //       videoElement.srcObject = stream;
    //       videoElement.play();
  
    //       const qrScanner = new QrScanner(videoElement, result => {
    //         qrScanner.stop();
    //         resolve(result);
    //       });
  
    //       qrScanner.start();
    //     })
    //     .catch(err => reject(err));
    // });
    return Promise.reject(new Error('H5环境需要安装一个库，但目前想保持独立性，所以还没实现'));
}
  
module.exports.getFile = getFile;
module.exports.scanQRCode=scanQRCode
