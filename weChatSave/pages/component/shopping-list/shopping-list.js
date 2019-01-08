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
      this.setData({
        listShopNum: newListShopNum
      })
    },
    reduceNum(e){
      var index = e.currentTarget.dataset.index;
      var _that = this.data;
      var num = _that.listShopNum[index] ? _that.listShopNum[index] : 0;
      _that.listShopNum[index] = num - 1 ? num - 1:0;
      var newListShopNum = _that.listShopNum;
      this.setData({
        listShopNum: newListShopNum
      })
      
    }
  }
})
