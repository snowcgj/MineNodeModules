const fs = require('fs'); //nodejs宿主环境中  有这个库

function getFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function scanQRCode() {
    return Promise.reject(new Error('Node.js 环境无法访问摄像头，无法实现二维码扫描功能'));
}

module.exports.getFile = getFile;
module.exports.scanQRCode=scanQRCode

  
