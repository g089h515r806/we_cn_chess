function lineDrawing(context, mx, my, lx, ly) {
	context.beginPath()
	context.moveTo(mx, my)
	context.lineTo(lx, ly)
	context.stroke()
}

function centerDrawing(context, x, y, unit) {
	//中心点
	x =x;
	y = y;
	//左上
	if(x - unit > 20){
	  lineDrawing(context, x - unit, y - 3 * unit, x - unit, y - unit);
	  lineDrawing(context, x - unit, y - unit, x - 3 * unit, y - unit);
    }
	//右上
	if(x + unit < unit * 80){
	lineDrawing(context, x + unit, y - 3 * unit, x + unit, y - unit);
	lineDrawing(context, x + unit, y - unit, x + 3 * unit, y - unit);
	}
	//左下
	if(x - unit > 20){
	  lineDrawing(context, x - unit, y + 3 * unit, x - unit, y + unit);
	  lineDrawing(context, x - unit, y + unit, x - 3 * unit, y + unit);
	}
	//右下
	if(x + unit < unit * 80){
	lineDrawing(context, x + unit, y + 3 * unit, x + unit, y + unit);
	lineDrawing(context, x + unit, y + unit, x + 3 * unit, y + unit);
	}
}

function qiziDrawing(context, x, y, qizi_text, isred) {
	context.setLineWidth(2)
	
	context.beginPath()
    context.arc(x+1, y+1, 18, 0, 2 * Math.PI)
	context.setFillStyle("rgba(250, 240, 240,1)")
    context.fill();
	var stroke_style = isred ? "red" : "#000000";
    context.setStrokeStyle(stroke_style)
    context.stroke()
    //context.stroke();
	context.setFillStyle(stroke_style);
    context.setTextAlign('center')
	context.setFontSize(30)
    context.fillText(qizi_text, x+1, y+11);		
}

function qipanDrawing(context, offsetX, offsetY, cellSize) {
    context.setStrokeStyle("brown")
    context.setLineWidth(2)
    //context.rect(3, 3, 320, 360)
    //context.stroke()
	for(var i= 1; i< 8; i++){
		lineDrawing(context,cellSize * i + offsetX, offsetY, cellSize * i + offsetX, cellSize * 4 + offsetY)
		lineDrawing(context,cellSize * i + offsetX, cellSize * 5 + offsetY, cellSize * i + offsetX, cellSize * 9 + offsetY)
	}

	//棋盘行
	for(var i= 0; i<10; i++){
		lineDrawing(context,offsetX, i * cellSize + offsetY, cellSize * 8 + offsetX, i * cellSize + offsetY)
	}
	
	lineDrawing(context,offsetX, offsetY, offsetX, cellSize * 9 + offsetY)
	lineDrawing(context,cellSize * 8 + offsetX, offsetY, cellSize * 8 + offsetX, cellSize * 9 + offsetY)

	lineDrawing(context, cellSize * 3 + offsetX, offsetY, cellSize * 5 + offsetX, cellSize * 2 + offsetY)
	//lineDrawing(context, cellSize * 3 + offsetX, offsetY, cellSize * 5 + offsetX, cellSize * 2 + offsetY)
	lineDrawing(context, cellSize * 5 + offsetX, offsetY, cellSize * 3 + offsetX, cellSize * 2 + offsetY)
	lineDrawing(context, cellSize * 3 + offsetX, cellSize * 9 + offsetY, cellSize * 5 + offsetX, cellSize * 7 + offsetY)
	lineDrawing(context, cellSize * 5 + offsetX, cellSize * 9 + offsetY, cellSize * 3 + offsetX, cellSize * 7 + offsetY)
	
	var unit = 4;
	//var centers = [];
    centerDrawing(context,cellSize * 1 + offsetX, cellSize * 2 + offsetY, unit)
	centerDrawing(context,cellSize * 7 + offsetX, cellSize * 2 + offsetY, unit)
	centerDrawing(context,cellSize * 0 + offsetX, cellSize * 3 + offsetY, unit)
	centerDrawing(context,cellSize * 2 + offsetX, cellSize * 3 + offsetY, unit)
	centerDrawing(context,cellSize * 4 + offsetX, cellSize * 3 + offsetY, unit)
	centerDrawing(context,cellSize * 6 + offsetX, cellSize * 3 + offsetY, unit)
	centerDrawing(context,cellSize * 8 + offsetX, cellSize * 3 + offsetY, unit)
	centerDrawing(context,cellSize * 0 + offsetX, cellSize * 6 + offsetY, unit)
	centerDrawing(context,cellSize * 2 + offsetX, cellSize * 6 + offsetY, unit)
	centerDrawing(context,cellSize * 4 + offsetX, cellSize * 6 + offsetY, unit)
	centerDrawing(context,cellSize * 4 + offsetX, cellSize * 6 + offsetY, unit)
	centerDrawing(context,cellSize * 8 + offsetX, cellSize * 6 + offsetY, unit)	
    centerDrawing(context,cellSize * 1 + offsetX, cellSize * 7 + offsetY, unit)
	centerDrawing(context,cellSize * 7 + offsetX, cellSize * 7 + offsetY, unit)	
	
	
	context.setFillStyle("#000000");
	context.setFontSize(cellSize * 0.75)
	//console.log(cellSize *1 + 5 + offsetX)
	//console.log( cellSize *5 - 10  + offsetY)
	offsetX = offsetX +15
	context.fillText("汉", cellSize *1 + 5 + offsetX, cellSize *5 - 10  + offsetY);
	//context.fillText("汉", 65, 210);
	context.fillText("界", cellSize *2 + 5 + offsetX, cellSize *5 - 10 + offsetY);
	context.fillText("楚", cellSize *5 + 5 + offsetX, cellSize *5 - 10 + offsetY);
	context.fillText("河", cellSize *6 + 5 + offsetX, cellSize *5 - 10 + offsetY);
	offsetX = offsetX -10
	context.setFontSize(cellSize * 0.3)
	context.fillText("亚", cellSize * 3 + 5 + offsetX, cellSize * 4.5 -5 + offsetY);
	context.fillText("艾", cellSize * 4 - 5 + offsetX, cellSize * 4.5 -5 + offsetY);
    context.fillText("元", cellSize * 4.5 +5 + offsetX, cellSize * 4.5 -5 + offsetY);
    context.fillText("象", cellSize * 3 + 5 + offsetX, cellSize *5 - 5 + offsetY);
	context.fillText("棋", cellSize * 4 - 5 + offsetX, cellSize *5 - 5 + offsetY);
    context.fillText("网", cellSize * 4.5 +5 + offsetX, cellSize *5 - 5 + offsetY);		
}

function fenDrawing(context, fen, offsetX, offsetY, cellSize) {
  if(fen == ''){
    fen = "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w";
  }
  var fen_array =new Array();
  var qiju = new Array();
  fen_array = fen.split("/"); 
  //console.log(fen_array);
  //console.log(fen);
  //var length = arr.length;
  for (var i = 0; i < 10; i++) {
    var fen_item = fen_array[i] || '';
	var k = 0;
    if(fen_item == '' || fen_item == '9'){
	  continue;
    }else{
	  for(var j=0;j<fen_item.length; j++){
		if(k >8){
		   break;
		}  
		 var qizi_name = fen_item.charAt(j);
		if(/^\d+$/.test(qizi_name)){
		  k = parseInt(qizi_name) + k;
          //console.log(k);	
          //console.log(qizi_name);		  
		}else{
		  var qizi_text = convertMachineToReadName(qizi_name);
		  var isred = (qizi_name === qizi_name.toUpperCase());
  
		  qiziDrawing(context, cellSize * k + offsetX, cellSize * i + offsetY, qizi_text, isred);
		  k++;	
		}
		
		 
	  }		  
		
	}		
  }
  context.draw()
}

function getFenList(fen, moves) {
  var fen_list = new Array();
  fen_list[0] = fen;
  var total_steps = Math.floor(moves.length / 4);
  var current_fen = fen;
  for(var i = 1; i<= total_steps ; i++){
	var move = moves.substring((i-1) * 4, i * 4); 
    fen_list[i] = nextFen(current_fen, move);
    current_fen = fen_list[i];		  
  } 
  return fen_list; 
}
function nextFen(fen, move) {
  var x_array = new Array();
    x_array["a"] = "0";
    x_array["b"] = "1";
	x_array["c"] = "2";
	x_array["d"] = "3";
	x_array["e"] = "4";
	x_array["f"] = "5";
	x_array["g"] = "6";
	x_array["h"] = "7";
	x_array["i"] = "8";	
	
  if(fen == ''){
    fen = "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w";

  }
  var fen_twoparts = fen.split(" ");
  var fen_first = fen_twoparts[0];
  var fen_second = fen_twoparts[1] || 'w';
  var fen_array =new Array();
  fen_array = fen_first.split("/"); 
  
  var from_x = move.charAt(0);
  var from_y = move.charAt(1);
  var from_fen_item = fen_array[9-from_y];
  var to_x = move.charAt(2);
  var to_y = move.charAt(3);
  var to_fen_item = fen_array[9-to_y];
  if(from_y == to_y){
	var from_row_array = fenItemToRowArray(from_fen_item);
	//todo
	var from_x_index = x_array[from_x];
	var qizi_name = from_row_array[from_x_index];
    from_row_array[from_x_index] = '';	
	//from_fen_item = rowArrayToFenItem(from_row_array);
	var to_x_index = x_array[to_x];
    from_row_array[to_x_index] = qizi_name;
	
	fen_array[9-from_y] = rowArrayToFenItem(from_row_array);
	  
  }else{
	var from_row_array = fenItemToRowArray(from_fen_item);
	//todo
	var from_x_index = x_array[from_x];
	var qizi_name = from_row_array[from_x_index];
    from_row_array[from_x_index] = '';	
	//from_fen_item = rowArrayToFenItem(from_row_array);
	fen_array[9-from_y] = rowArrayToFenItem(from_row_array);
	
	var to_row_array = fenItemToRowArray(to_fen_item);
	//todo
	var to_x_index = x_array[to_x];
    to_row_array[to_x_index] = qizi_name;	
	//from_fen_item = rowArrayToFenItem(from_row_array);
	fen_array[9-to_y] = rowArrayToFenItem(to_row_array);	
	  
  }
  
  fen_first = fen_array.join("/");
  if(fen_second == 'w'){
	fen_second = 'b';  
  }else{
	fen_second = 'w';  
  }
  var next_fen = fen_first + ' ' + fen_second;
  return next_fen;
  
  
}

function fenItemToRowArray(fen_item) {
  var row_array = new Array();
  var k = 0;  
  for(var j=0;j<fen_item.length; j++){
	if(k >8){
	  break;
	}
	var qizi_name = fen_item.charAt(j);
	if(/^\d+$/.test(qizi_name)){
		var g = 0;
		while(g < qizi_name){
			row_array[k] = '';
			k++;
			g++;
			if(k >8){
			  break;
			}			
		}
	}else{
		row_array[k] = qizi_name;
	    k++;		
	}
  }
  return row_array;
}

function rowArrayToFenItem(row_array) {
	var fen_item ="";
	var k = 0;
	for(var i = 0; i < row_array.length; i++){
		if(row_array[i] != ''){
		  if(k == 0){
			fen_item = fen_item + row_array[i];  
		  }else{
			fen_item = fen_item + k + row_array[i]; 
			k = 0;
		  }
		  
		}else{
		  k++;	
		}
	}
	if(k > 0){
	  fen_item = fen_item + k;	
	}
	return fen_item;
}
function convertMachineToReadName(m_name){
	switch(m_name)
	{
	case "r":
	  var name = "車";
	  break;
	case "n":
	  var name = "馬";
	  break;
	case "b":
	  var name = "象";
	  break;	  

	case "a":
	  var name = "士";
	  break;
	case "k":
	  var name = "将";
	  break;
	case "c":
	  var name = "炮";
	  break;
	case "p":
	  var name = "卒";
	  break;


	case "R":
	  var name = "车";
	  break;
	case "N":
	  var name = "马";
	  break;
	case "B":
	  var name = "相";
	  break;	  

	case "A":
	  var name = "仕";
	  break;
	case "K":
	  var name = "帅";
	  break;
	case "C":
	  var name = "炮";
	  break;
	case "P":
	  var name = "卒";
	  break;	  
	default:
	  var name = "";
	}

  //var name = qizi_name[m_name] ? qizi_name[m_name] : '';
  return name;
}  	

module.exports = {
  lineDrawing: lineDrawing,
  qiziDrawing: qiziDrawing,
  qipanDrawing: qipanDrawing,
  fenDrawing: fenDrawing,
  getFenList: getFenList,
  centerDrawing: centerDrawing
}
