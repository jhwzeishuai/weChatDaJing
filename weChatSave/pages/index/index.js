//index.js
//获取应用实例
const app = getApp()

const pageData = {}
for (let i = 1; i < 4; i++) {
  (function (index) {
    pageData['slider' + index + 'change'] = function (e) {
      console.log('slider' + index + '发生 change 事件，dfdf携带值为', e.detail.value)
    }
  }(i))
}
Page(pageData)
