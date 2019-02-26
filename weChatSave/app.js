//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    shopNum: 0 ,//全局购物车选择数量
    shopListJson:{},//所选商品ids:num
  },
  //为列表的每个元素添加choseNum属性
  jsonArrAddNum(arr){
    for(let i = 0;i<arr.length;i++){
      arr[i].choseNum = 0
    }
    return arr
  },
  // 根据所选择的id及数量change默认商品列表
  filterArrChoose(arr){
    var shopListJson = this.globalData.shopListJson;
    for(let i = 0;i<arr.length;i++){
      for (var key in shopListJson){
        if(key == arr[i].id){
          arr[i].choseNum = shopListJson[key]
        }
      }
    }
    return arr
  },
  // 获取当前购物车数量
  getAllNum(){
    var shopListJson = this.globalData.shopListJson,
      num = 0;
    for (var key in shopListJson) {
      if (shopListJson[key]) num += shopListJson[key]
    }
    num = num ? num : 0;
    return num
  }
})