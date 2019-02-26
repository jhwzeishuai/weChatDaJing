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
        "id":'2342345',
        "choseNum":0
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '234234522345',
        "choseNum": 0
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '232542345',
        "choseNum": 0
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '23422354345',
        "choseNum": 0
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '23425342345',
        "choseNum": 0
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '2342345345',
        "choseNum": 0
      },
    ],
    listArr2: [
      '/pages/static/img/banner/banner1.jpg',
      '/pages/static/img/banner/banner1.jpg',
      '/pages/static/img/banner/banner1.jpg',
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
    this.showChange()
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
  showChange(){
    const app = getApp();
    var _data = this.data;
    var newListArr = app.filterArrChoose(_data.listArr);
    this.setData({
      shopNums: app.getAllNum(),
      listArr: newListArr
    })
  },
  // 添加商品更新购物车数量
  shopListChange(e){
    var _data = this.data;
    const app = getApp();
    var detail = e.detail;
    var arrIndex = "listArr["+ detail.index +"].choseNum"
    this.setData({
      [arrIndex]: detail.num
    });
    this.setData({
      shopNums: app.getAllNum()
    })
    
    

  }
})