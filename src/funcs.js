// 检测宿主环境
let platform = 'h5';

if (typeof process !== 'undefined' && process.versions && process.versions.node) {
  platform = 'node'; // Node.js 平台
} else if (typeof wx !== 'undefined' && typeof wx.getFileSystemManager === 'function') {
  platform = 'weixin'; // 微信小程序平台
} else if (typeof uni !== 'undefined' && typeof uni.getFileSystemManager === 'function') {
  platform = 'app'; // APP (uni-app) 平台
} else {
  platform = 'h5'; // 默认是 H5 浏览器
}

// 不同平台的实现  
// 动态加载模块：require('./platforms/' + platform)，会根据平台加载不同的实现文件。

/* 只有在 Node.js 中，才有 process 对象，在 H5 浏览器、小程序和 App 中是没有 process 的。
process 对象中是否有 versions 属性。
在 Node.js 中，process.versions 存储了 Node.js 和依赖库的版本信息。
process.versions.node 是一个字符串，表示当前运行的 Node.js 版本（如 18.17.1）。
这可以确保我们判断的宿主环境的确是 Node.js，而不是 Deno 或其他可能的环境。*/

/*判断wx对象是否存在。
在微信小程序中，wx 是全局对象，类似于 H5 中的 window 和 Node.js 中的 global。
确保 wx 对象中有 getFileSystemManager 方法。*/

/*
确保 uni 对象中有 getFileSystemManager 方法。
在uni-app中，uni.getFileSystemManager() 是操作本地文件的 API，
在 H5、Node.js 和微信小程序中都没有这个 API。
*/

let platformModule;
if (platform === 'node') {
  platformModule = require('./platforms/node');
} else if (platform === 'weixin') {
  platformModule = require('./platforms/weixin');
} else if (platform === 'app') {
  platformModule = require('./platforms/app');
} else {
  platformModule = require('./platforms/h5');
}


// 导出统一的跨平台API
function getFile(filePath) {
  return platformModule.getFile(filePath);
}

function scanQRCode() {
    return platformModule.scanQRCode();
}

module.exports.getFile = getFile;
module.exports.scanQRCode=scanQRCode
