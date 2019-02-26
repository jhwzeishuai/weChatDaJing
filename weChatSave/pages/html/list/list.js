// pages/html/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab
    tabIndex:0,
    tabData: [
      {
        "name": '太空啤酒滩',
        "id": '2343452345'
      },
      {
        "name": '太空啤酒滩',
        "id": '2342345234522345'
      },
    ],
    listArr: [
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '2342345',
        "choseNum":0
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '23423asdf4522345',
        "choseNum": 0
      },
      {
        "src": "/pages/static/img/banner/banner1.jpg",
        "name": '太空啤酒滩',
        "price": "129.90",
        "id": '232542adf345',
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
        "id": '2342534adf2345',
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
  // tab切换点击
  tabClick(e){
    
    var index = e.target.dataset.index,
        id = e.target.dataset.id;
    this.setData({
      tabIndex:index
    });

  },
  // 根据tabIndex渲染右侧列表
  _setListView(id){
    
  },
  // 进入页面从全局变量里获取当前列表是否有被选中数量及渲染购物车已选数量
  showChange() {
    const app = getApp();
    var _data = this.data;
    var newListArr = app.filterArrChoose(_data.listArr);
    this.setData({
      shopNums: app.getAllNum(),
      listArr: newListArr
    })
  },
  // 添加商品更新购物车数量
  shopListChange(e) {
    var _data = this.data;
    const app = getApp();
    var detail = e.detail;
    var arrIndex = "listArr[" + detail.index + "].choseNum"
    this.setData({
      [arrIndex]: detail.num
    });
    this.setData({
      shopNums: app.getAllNum()
    })


  }
})