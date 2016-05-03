var x = 0;
var y = 200;
var xy;
var ctx;

window.onload = init


document.onkeydown = function(event) {
    if (event.keyCode == 38) {

    	moveIt(event,1);
  	}
  	if (event.keyCode == 40) {
    	moveIt(event,0);
  	}
}

function init(){
	xy = document.getElementById("leinwand");
	ctx = xy.getContext("2d");
	ctx.rect(x,y,20,100);
	ctx.fill();
	ctx.stroke();
}

function moveIt(event,param){
	xy = document.getElementById("leinwand");
	ctx = xy.getContext("2d");
	ctx.clearRect(0,0,xy.width,xy.height);
	if (param == 1 && y > 0) {
		y = y - 40;
	}
	if (param == 0 && y < (xy.height -100)) {
		y = y + 40;
	}
	ctx.beginPath();
	ctx.rect(x,y,20,100);
	ctx.fill();
	ctx.stroke();
}