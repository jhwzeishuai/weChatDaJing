// pages/component/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc:{
      type:Array,
      value: []
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    indicatorColor:"#fff",
    indicatorActiveColor:"#666",
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular: true,//是否采用衔接滑动
    bannerImageHeight:[],
    current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgageLoad(e){
      var windowWidth = wx.getSystemInfoSync().windowWidth,//获取屏幕宽度
          imgWidth = e.detail.width,//获取图片原始宽度
          imgHeight = e.detail.height,//获取图片原始高度
          baseWidth,
          scale;//缩放比
      scale = windowWidth / imgWidth;
      var newHeight = scale * imgHeight,
        bannerImageHeight = this.data.bannerImageHeight;
      bannerImageHeight[e.currentTarget.dataset.index] = newHeight
      this.setData({
        bannerImageHeight: bannerImageHeight
      })
    },
    load(){

    }
  }
})
