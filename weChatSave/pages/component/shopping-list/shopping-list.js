// pages/component/list/shopping-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listArr:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    listShopNum:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addShopNum(e){
      var index = e.currentTarget.dataset.index;
      var _that = this.data;
      var num = _that.listShopNum[index] ? _that.listShopNum[index]:0;
      
      _that.listShopNum[index] = num+1;
      var newListShopNum = _that.listShopNum;
      var id = this.properties.listArr[index].id;
      this._appNumChange(id, _that.listShopNum[index]);//修改全局购物车添加数量
      this.setData({
        listShopNum: newListShopNum
      })
      this._changeEvent()
    },
    reduceNum(e){
      var index = e.currentTarget.dataset.index;
      var _that = this.data;
      var num = _that.listShopNum[index] ? _that.listShopNum[index] : 0;
      _that.listShopNum[index] = num - 1 ? num - 1:0;
      var newListShopNum = _that.listShopNum;
      var id = this.properties.listArr[index].id;
      this._appNumChange(id, _that.listShopNum[index]);//修改全局购物车添加数量
      this.setData({
        listShopNum: newListShopNum
      })
      this._changeEvent()
    },
    // 修改全局变量购物车选中商品
    _appNumChange(id,num){
      const app = getApp();
      app.globalData.shopListJson[id] = num;
      console.log(app.globalData)

    },
    // 添加商品时商品数量向外传递
    _changeEvent(){
      this.triggerEvent('shopChange', this.data.listShopNum)
    }

  }
})
