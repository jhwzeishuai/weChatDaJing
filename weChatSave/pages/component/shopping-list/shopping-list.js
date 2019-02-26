// pages/component/list/shopping-list.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['my-class'],
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
      const app = getApp();
      var index = e.currentTarget.dataset.index;
      var _that = this.data,
        _properties = this.properties;
      var num = _properties.listArr[index].choseNum ? _properties.listArr[index].choseNum:0;
      var arrIndex = _properties.listArr[index].choseNum;
      _properties.listArr[index].choseNum = num+1;
      var id = _properties.listArr[index].id;
      this._appNumChange(id, _properties.listArr[index].choseNum);//修改全局购物车添加数量
      var outJson = {//对外传递当前修改数据的下标和修改后的数量
        index: index,
        num: _properties.listArr[index].choseNum
      }
      this._changeEvent(outJson)
    },
    reduceNum(e){
      const app = getApp();
      var index = e.currentTarget.dataset.index;
      var _that = this.data,
        _properties = this.properties;
      var num = _properties.listArr[index].choseNum ? _properties.listArr[index].choseNum : 0;

      _properties.listArr[index].choseNum = num - 1 > 0 ? num - 1:0;
      var id = _properties.listArr[index].id;
      this._appNumChange(id, _properties.listArr[index].choseNum);//修改全局购物车添加数量
      var newList = app.filterArrChoose(_properties.listArr);
      var outJson={//对外传递当前修改数据的下标和修改后的数量
        index:index,
        num: _properties.listArr[index].choseNum
      }
      this._changeEvent(outJson)
    },
    openLink(e){
      var id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/html/detail/detail?id='+id,
      })
    },
    // 修改全局变量购物车选中商品
    _appNumChange(id,num){
      const app = getApp();
      app.globalData.shopListJson[id] = num;

    },
    // 添加商品时商品数量向外传递
    _changeEvent(outJson){
      this.triggerEvent('shopChange', outJson);
      this.haveListInCar();
    },
    // 添加商品,给购物车加红点
    haveListInCar(){
      const app = getApp();
      let shopNum = app.getAllNum();
      if(shopNum>0){
        wx.showTabBarRedDot({
          index: 2,
        })
      }else{
        wx.hideTabBarRedDot({
          index: 2,
        })
      }

    }

  }
})
