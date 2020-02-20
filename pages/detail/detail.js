// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频数据
    videoInfo: {
      id: 1,
      videoSrc: "../../src/1.mp4",
      videoTitle: "刷哦坏坏",
      author: "saaa",
      playCount: "24万",
      commentCount: 1345,
      date: "12-15"
    },
    // 推荐数据
    othersList: [
      {
        imgSrc: "../../images/1.jpg",
        duration: "00:06:02",
        title: "负债小伙为还债转行运营，成功面试滴滴！",
        playMsg: "10.5",
        commentCount: "422" 
      },
      {
        imgSrc: "../../images/2.jpg",
        duration: "00:06:02",
        title: "装修师傅生意惨淡学推广，生意火爆到没空理人!",
        playMsg: "2.5",
        commentCount: "422"
      },
      {
        imgSrc: "../../images/3.jpg",
        duration: "00:06:02",
        title: "宝妈失业被逼离婚，无奈从事新行业一年收入50万，男人排队相亲！",
        playMsg: "1.5",
        commentCount: "422"
      },
      {
        imgSrc: "../../images/4.jpg",
        duration: "00:06:02",
        title: "37岁父亲失业深夜跑滴滴遇到贵人，第二天入职500强！",
        playMsg: "130.5",
        commentCount: "422"
      },
    ],
    // 评论数据
    commentData: {
      commentTotalCount: "4",
      commentList: [
        {
          username: "111111111111",
          userIconSrc: "../../images/1.jpg",
          commentInfo: "37岁父亲失业深夜跑滴滴遇到贵人，第二天入职500强！",
          commentDate: "12-15"
        },
        {
          username: "2222222222",
          userIconSrc: "../../images/2.jpg",
          commentInfo: "2019年社保新规，这4类人将受益。",
          commentDate: "12-15"
        },
        {
          username: "2222222222",
          userIconSrc: "../../images/3.jpg",
          commentInfo: "老子听儿子的4大理由。",
          commentDate: "12-15"
        },
        {
          username: "2222222222",
          userIconSrc: "../../images/4.jpg",
          commentInfo: "年赚百万的他，会有这种习惯",
          commentDate: "12-15"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    // 调用获取视频数据函数
    this.getCurrentVidep(videoId);
    // 调用获取推荐视频数据函数
    this.getOthersList(videoId);
    // 调用获取评论数据函数
    this.getCommentList(videoId);
  },

  // 获取视频数据
  getCurrentVidep(videoId) {
    wx.request({
      // https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id= + videoId
      url: '',
      success: res => {
        if(res.code===0){
          this.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },
  // 获取推荐视频数据
  getOthersList() {
    wx.request({
      // https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id= + videoId
      url: '',
      success: res => {
        if (res.code === 0) {
          this.setData({
            othersList: res.data.data.othersList
          })
        }
      }
    })
  },
  // 获取评论数据
  getCommentList() {
    wx.request({
      // https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentList?id= + videoId
      url: '',
      success: res => {
        if (res.code === 0) {
          this.setData({
            commentData: res.data.data.commentData
          })
        }
      }
    })
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