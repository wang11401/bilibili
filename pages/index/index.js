Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航栏数据
    navList: ["首页", "动画", "番剧", "国创", "音乐",
     "舞蹈", "科技", "游戏", "娱乐", "鬼畜", "电影", 
     "电视剧", "纪录片", "影视", "时尚", "生活", "广告",
     "直播", "相簿"],
    //  被点击的导航栏索引
    currentIndexNav: 0,
    // 轮播图数据
    swiperList: [{ imgSrc: "../../images/1.jpg" }, { imgSrc: "../../images/2.jpg" },
                { imgSrc: "../../images/3.jpg" }, { imgSrc: "../../images/4.jpg" }],
    // 视频列表数据
    videosList: [
      { 
        id: 0,
        imgSrc: "../../images/q1.jpg" ,
        playCount: 200,
        commentCount: 330,
        desc: "负债小伙为还债转行运营，成功面试滴滴！"
      },
      {
        id: 1,
        imgSrc: "../../images/q2.jpg",
        playCount: 200,
        commentCount: 330,
        desc: "装修师傅生意惨淡学推广，生意火爆到没空理人!"
      },
      {
        id: 2,
        imgSrc: "../../images/q3.jpg",
        playCount: 200,
        commentCount: 330,
        desc: "宝妈失业被逼离婚，无奈从事新行业一年收入50万，男人排队相亲！"
      },
      {
        id: 3,
        imgSrc: "../../images/q4.jpg",
        playCount: 200,
        commentCount: 330,
        desc: "37岁父亲失业深夜跑滴滴遇到贵人，第二天入职500强！"
      },
      {
        id: 4,
        imgSrc: "../../images/q5.jpg",
        playCount: 200,
        commentCount: 330,
        desc: "2019年社保新规，这4类人将受益。"
      },
      {
        id: 5,
        imgSrc: "../../images/q6.jpg",
        playCount: 200,
        commentCount: 330,
        desc: "老子听儿子的4大理由。"
      },
      {
        id: 6,
        imgSrc: "../../images/q7.jpg",
        playCount: 200,
        commentCount: 330,
        desc: "年赚百万的他，会有这种习惯"
      },
      {
        id: 7,
        imgSrc: "../../images/q8.jpg",
        playCount: 200,
        commentCount: 330,
        desc: "下班之余，拍点vlog视频，一月多赚3000零花钱"
      }
    ]
  },
  // 点击首页导航方法
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  // 获取首页导航栏数据
  getNavList() {
    wx.request({
      // https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList
      url: '',
      success: res => {
        if(res.data.code===0){
          this.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },
  // 获取轮播图数据
  getSwiperList() {
    wx.request({
      // https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList
      url: '',
      success: res => {
        if (res.data.code === 0) {
          this.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },
  // 获取视频列表数据
  getVideosList() {
    wx.request({
      // https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList
      url: '',
      success: res => {
        if (res.data.code === 0) {
          this.setData({
            videosList: res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用获取首页导航栏数据函数
    this.getNavList();
    // 调用获取轮播图数据函数
    this.getSwiperList();
     // 调用获取视频列表数据函数
     this.getVideosList();
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
    
  }
})
