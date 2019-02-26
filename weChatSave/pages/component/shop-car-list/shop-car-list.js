// pages/component/shop-car-list/shop-car-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopCarListArr:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 增加数量
    addShopNum(e){
      this._calcNum(e,'add');

    },
    // 减少数量
    reduceNum(e){
      this._calcNum(e,'reduce');
    },
    // input框change时触发
    inputChangeNum(e) {
      var choseNum = parseInt(e.detail.value)
      this._calcNum(e, 'write',choseNum);
    },
    _calcNum(e,type,choseNum){
      var properties = this.properties,
        index = e.currentTarget.dataset.index;
      var num = properties.shopCarListArr[index].choseNum,
        checked = properties.shopCarListArr[index].checked;
        if(type=='add'){//增加
          num++
        }else if(type=='reduce'){//减少
          num--
          if(num<0) num = 0
        }else if(type=="write"){//手动输入
          num = choseNum||0
        }
        var outJson={
          index:index,
          choseNum:num,
          checked:checked

        }
        
      this.triggerEvent('shopChange', outJson)
    },
    // 选择按钮绑定change事件
    checkboxChange(e){
      var properties = this.properties,
        index = e.currentTarget.dataset.index,
        checked = properties.shopCarListArr[index].checked;
      properties.shopCarListArr[index].checked = !checked;
      this._calcNum(e)

    }
    
  }
})
