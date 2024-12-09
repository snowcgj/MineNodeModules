function getFile(filePath) {
    const fileSystemManager = wx.getFileSystemManager();
    return new Promise((resolve, reject) => {
      fileSystemManager.readFile({
        filePath: filePath,
        encoding: 'utf8',
        success: res => resolve(res.data),
        fail: err => reject(err)
      });
    });
  }
  
function scanQRCode() {
    return new Promise((resolve, reject) => {
        wx.scanCode({
        success: res => resolve(res.result),
        fail: err => reject(err)
        });
    });
}

module.exports.getFile = getFile;
module.exports.scanQRCode=scanQRCode

  