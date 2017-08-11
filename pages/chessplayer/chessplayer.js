//index.js
//获取应用实例
var util = require('../../utils/util.js')
Page({
  data: {
    current_step: 0,
	total_steps: 0,
	fen_list: [],
    auto_play_text:'自动',
	auto_play:false,	
    qipu: {}
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  gotoEnd: function (e) {
	this.setData({
        current_step:this.data.total_steps
    })
	var fen_list = this.data.fen_list
    var context = wx.createCanvasContext('qipuCanvas')
	var offsetX = 20
    var offsetY = 20
	var cellSize = 40;	
	util.qipanDrawing(context,offsetX, offsetY, cellSize)
	util.fenDrawing(context, fen_list[this.data.current_step], offsetX, offsetY, cellSize)	
  }, 
  gotoInit: function (e) {
	this.setData({
        current_step:0
    })
	var fen_list = this.data.fen_list
    var context = wx.createCanvasContext('qipuCanvas')
	var offsetX = 20
    var offsetY = 20
	var cellSize = 40;	
	util.qipanDrawing(context,offsetX, offsetY, cellSize)
	util.fenDrawing(context, fen_list[this.data.current_step], offsetX, offsetY, cellSize)	
  },  
  gotoNext: function (e) {
	var next_step = this.data.current_step +1
	if(next_step <= this.data.total_steps){
	this.setData({
        current_step:next_step
    })
	var fen_list = this.data.fen_list
    var context = wx.createCanvasContext('qipuCanvas')
	var offsetX = 20
    var offsetY = 20
	var cellSize = 40;	
	util.qipanDrawing(context,offsetX, offsetY, cellSize)
	util.fenDrawing(context, fen_list[this.data.current_step], offsetX, offsetY, cellSize)	
	}
  }, 
  gotoPrevious: function (e) {
	var previous_step = this.data.current_step - 1
	if(previous_step >= 0){
	this.setData({
        current_step:previous_step
    })
	var fen_list = this.data.fen_list
    var context = wx.createCanvasContext('qipuCanvas')
	var offsetX = 20
    var offsetY = 20
	var cellSize = 40;	
	util.qipanDrawing(context,offsetX, offsetY, cellSize)
	util.fenDrawing(context, fen_list[this.data.current_step], offsetX, offsetY, cellSize)	
	}
  },
  autoMove: function (e) {
    this.gotoNext();
	if(this.data.current_step == this.data.total_steps){
      clearInterval(this.interval);
	  this.setData({
        auto_play_text:'自动',
		auto_play:false
     })			
	}
  },  
  autoPlay: function (e) {
    if(this.data.auto_play == false){
	  this.setData({
        auto_play_text:'暂停',
		auto_play:true
     })	
      this.interval = setInterval(this.autoMove,2000);
    }else{
      clearInterval(this.interval);
	  this.setData({
        auto_play_text:'自动',
		auto_play:false
     })		  

    }	  
	  
	var previous_step = this.data.current_step - 1
	if(previous_step >= 0){
	this.setData({
        current_step:previous_step
    })
	var fen_list = this.data.fen_list
    var context = wx.createCanvasContext('qipuCanvas')
	var offsetX = 20
    var offsetY = 20
	var cellSize = 40;	
	util.qipanDrawing(context,offsetX, offsetY, cellSize)
	util.fenDrawing(context, fen_list[this.data.current_step], offsetX, offsetY, cellSize)	
	}
  },   
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('qipuCanvas')
	var offsetX = 20
    var offsetY = 20
	var cellSize = 40;
	
	var qipu = {
	  //fen: "rnbakab1r/9/1c4nc1/p1p1p1p1p/9/9/P1P1P1P1P/1C2C4/9/RNBAKABNR w",
	  title:'王天一 先胜 赵国荣',
	  event:'“腾讯棋牌”2017年全国象棋男子甲级联赛',
      fen:'',	  
	  //moves: 'h0g2i9h9i0h0c6c5g3g4b9c7b0a2a6a5b2c2c7b5a0a1c9e7h0h6d9e8a1d1b5a3d1b1h7i7h6g6b7c7c2c1i7i8g4g5i8g8g6f6g8g5g2f4c7c6f6f8a9d9b1b6c6c8f8f6h9h4f4e6g7e6e2e6a3c2g0e2h4d4f0e1c2e3f6f3e3d5e6e5c8c9e0f0d9d7b6b9e9d9c1c2d5c7b9a9d4e4c2d2d7d2e5e8d2d0e1d0f9e8d0e1d9e9f3f5a5a4c3c4c5c4a9a4e4e3i3i4e3e4a4a7g5g7a7a3e4i4a3g3c7e6f5f6i4e4g3g4e4g4e2g4e6c5f6i6c4d4'
      moves:'g0e2b7d7a0a1b9c7a1d1f9e8b0a2a9b9a3a4b9b5d1d4b5f5a2b4c6c5h2h1h7h5h1c1c7d5d4h4d5f4c1f1f4h3h4h3d7h7h3h5f5h5h0g2g9e7b4a6h5h1f1f4g6g5f4i4h9i7f0e1i6i5i4d4i7h5d4d3e6e5b2b5i9i6a6b4h1h2d3d2i6e6b4d3h5g3d3e5h7g7i0f0h2h6c3c4e6f6f0i0h6h2g2f0h2h6c4c5e7c5f0g2c5e7e5c4h6g6b5b6f6b6c4b6g6b6i0h0b6g6h0h4g5g4e2g4g7g4g2i1g4g5h4g4g3h1i1h3h1i3g4g0i5i4h3f4g6h6f4d5i4h4c0e2g5e5g0g3i3h5e3e4e5e2e1f2h6e6d5c3e6d6d2d5e2b2d5e5e9f9g3f3d6f6e5f5f9e9c3d5f6d6e4e5b2b5d5c3b5f5f3f5h5g7f5f4h4h3c3d5g7i6d0e1i6g5a4a5h3g3a5b5g5h3d5b6d6c6e0d0e8d7e5d5d9e8f4d4g3f3d5d6c6c0d0d1c0c1d1d0c1c0d0d1f3f2d4h4c0c1d1d0c1c3h4h9e8f9b6d7e9d9h9f9d9d8f9f8d8d9f8e8c3c0d0d1c0c1d1d0c1c0d0d1c0c1d1d0c1c7b5c5f2e2c5c6e2e1c6c7h3f2e8e9d9d8c7c8'
	}

	var init_fen= "rnbakab1r/9/1c4nc1/p1p1p1p1p/9/9/P1P1P1P1P/1C2C4/9/RNBAKABNR w";
	//fen = "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w";
	//fen = "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C2C4/9/RNBAKABNR b";
	//fen = "rnbakab1r/9/1c4nc1/p1p1p1p1p/9/9/P1P1P1P1P/1C2C4/9/RNBAKABNR w";
	//h2e2 h9g7
	var moves = 'h0g2i9h9i0h0c6c5g3g4b9c7b0a2a6a5b2c2c7b5a0a1c9e7h0h6d9e8a1d1b5a3d1b1h7i7h6g6b7c7c2c1i7i8g4g5i8g8g6f6g8g5g2f4c7c6f6f8a9d9b1b6c6c8f8f6h9h4f4e6g7e6e2e6a3c2g0e2h4d4f0e1c2e3f6f3e3d5e6e5c8c9e0f0d9d7b6b9e9d9c1c2d5c7b9a9d4e4c2d2d7d2e5e8d2d0e1d0f9e8d0e1d9e9f3f5a5a4c3c4c5c4a9a4e4e3i3i4e3e4a4a7g5g7a7a3e4i4a3g3c7e6f5f6i4e4g3g4e4g4e2g4e6c5f6i6c4d4';
    //var moves = 'h0g2i9h9i0h0c6c5';

	var fen_list = util.getFenList(qipu.fen, qipu.moves)
	//this.setData({
    //    fen_list:fen_list
    //})
	
	var total_steps = Math.floor(qipu.moves.length / 4);
	this.setData({
		qipu:qipu,
		fen_list:fen_list,
        total_steps:total_steps
    })	
	//console.log(fen_list);
	
	util.qipanDrawing(context,offsetX, offsetY, cellSize)
	util.fenDrawing(context, fen_list[this.data.current_step], offsetX, offsetY, cellSize)
	
	this.gotoInit()
	
	
  }
})