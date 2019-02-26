// pages/html/shopping/shopping.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    noData:false,//购物车是否为空,默认为空
    shopCarListArr:[
      {
        "id":'34923lkjdsadf',
        "name":'蛋糕酥',
        "text":'我的倾情制作,纯手工,卫生健康超级好吃!!',
        "src":'/pages/static/img/banner/banner1.jpg',
        "choseNum":1,
        "oldPrice": '99.00',
        "price": "129.90",
        'checked':true,
      }, {
        "id": '34923lkjdsadf',
        "name": '蛋糕酥',
        "text": '我的倾情制作,纯手工,卫生健康超级好吃!!',
        "src": '/pages/static/img/banner/banner1.jpg',
        "choseNum": 3,
        "oldPrice": '99.00',
        "price": "129.90",
        'checked': true,
      }, {
        "id": '34923lkjdsadf',
        "name": '蛋糕酥',
        "text": '我的倾情制作,纯手工,卫生健康超级好吃!!',
        "src": '/pages/static/img/banner/banner1.jpg',
        "choseNum": 2,
        "oldPrice": '99.00',
        "price": "129.90",
        'checked': true,
      }, {
        "id": '34923lkjdsadf',
        "name": '蛋糕酥',
        "text": '我的倾情制作,纯手工,卫生健康超级好吃!!',
        "src": '/pages/static/img/banner/banner1.jpg',
        "choseNum": 2,
        "oldPrice":'99.00',
        "price": "129.90",
        'checked': true,
      }, {
        "id": '34923lkjdsadf',
        "name": '蛋糕酥',
        "text": '我的倾情制作,纯手工,卫生健康超级好吃!!',
        "src": '/pages/static/img/banner/banner1.jpg',
        "choseNum":4,
        "oldPrice": '99.00',
        "price": "129.90",
        'checked': true,
      },
    ],
    totalPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._calcPrice()
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
    wx.hideTabBarRedDot({
      index: 2,
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
  // 点击跳转到商品列表页
  goShopListPage(){
    wx.switchTab({
      url: '../list/list',
    })
  },
  // 计算需要支付总价(会除去未选中列表)
  _calcPrice(){
    let data = this.data,
      listArr = data.shopCarListArr,
      totalPrice = 0;
      for(let i = 0;i<listArr.length;i++){
        if(listArr[i].checked){
          let a = listArr[i].choseNum, b = parseFloat(listArr[i].price), c = a*b;
          totalPrice += c
        }
      }
      this.setData({
        totalPrice: totalPrice.toFixed(2)
      })

  },
  
  /**
   * 购物车数量发生改变触发(子组件向父组件传递)
   * index:当前改变的列表下标
   * choseNum:改变后的数量
   */
  _changeShop(index, choseNum, checked) {
    var arrIndex = "shopCarListArr["+index+"].choseNum",
      arrIndexChecked = "shopCarListArr[" + index + "].checked";
    this.setData({
      [arrIndex]: choseNum,
      [arrIndexChecked]: checked
    })
    this._calcPrice()
  },
  shopChangeList(e){
    var index = e.detail.index,
        choseNum = e.detail.choseNum,
        checked=e.detail.checked;//拿到子组件传递出来的值
    this._changeShop(index, choseNum, checked)

  },
  

})