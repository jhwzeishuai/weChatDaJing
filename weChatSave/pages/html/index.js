// pages/html/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // banner数据源
    imgUrls: [
      '/pages/static/img/banner/banner1.jpg',
      '/pages/static/img/banner/banner1.jpg',
      '/pages/static/img/banner/banner1.jpg',
    ],
    listArr:[
      {
        "src":"/pages/static/img/banner/banner1.jpg",
        "name":'太空啤酒滩',
        "price":"129.90",
        "id":'2342345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '234234522345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '232542345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '23422354345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '23425342345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '2342345345'
      },
    ],
    listArr2: [
      '/pages/static/img/banner/banner1.jpg',
      '/pages/static/img/banner/banner1.jpg',
      '/pages/static/img/banner/banner1.jpg',
    ],
    listArr3: [
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '2342345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '234234522345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '232542345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '23422354345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '23425342345'
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '2342345345'
      },
    ],
    shopNums:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var aa = this.data.listArr3;
    this.setData({
      listArr:aa
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  shopListChange(e){
    const app = getApp();
    var shopListJson = app.globalData.shopListJson,
        num=0;
    for (var key in shopListJson){
      if (shopListJson[key]) num += shopListJson[key]
    }
    num = num?num:0;
    console.log(shopListJson)
    this.setData({
      shopNums:num
    })
  }
})