var x = 0;
var LBalken = 150;
var xy;
var ctx;
var circ;
var ab;
var BallX = 50	 ;
var BallY = 150;
var ende = false;
var radiusBall = 25;

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
	ctx.rect(x,LBalken,20,100);
	ctx.fill();
	ctx.stroke();
	drawBall();
	ticker();
	
}
function ticker(){
	setInterval(function(){
		
	drawBar();
	drawBall();
	document.getElementById("BallX").innerHTML = BallX  ;
	document.getElementById("BallY").innerHTML = BallY;
	document.getElementById("BalkenX").innerHTML = x;
	document.getElementById("BalkenY").innerHTML = LBalken;

	document.getElementById("TrefferBallX").innerHTML = BallX  ;
	document.getElementById("TrefferBallY").innerHTML = BallY;
	document.getElementById("TrefferBalkenX").innerHTML = x;
	document.getElementById("TrefferBalkenY").innerHTML = LBalken+150;

	if ((BallY < (LBalken-radiusBall))||(((LBalken + LBalken + 100)<BallY))) {
		document.getElementById("getroffen").innerHTML = "nicht getroffen";
	}else{
		document.getElementById("getroffen").innerHTML = "getroffen";
	}
	





	},40);
}

function drawBar(){
	ctx.beginPath();
	ctx.rect(x,LBalken,20,150);
	ctx.fill();
	ctx.stroke();
}

function drawBall(){
	ab = document.getElementById("leinwand");
	circ = ab.getContext("2d");
	circ.beginPath();
	circ.arc(BallX,BallY,radiusBall,0,2*Math.PI);
	circ.fill();
	circ.stroke();
}


function ballAnimation(){	
		setInterval(function(){
			circ.clearRect(21,0,xy.width-21,xy.height);	
			
			if (BallX < 500 && (!ende)) {
				BallX = BallX + 10;
				
			}
			if (BallX >= 500) {
				ende = true;
			}

			if (BallX <= 500 && ende) {
				BallX = BallX - 10;
			}
			if (BallX <= 50			) {
				ende = false;
			}
			
	 	}, 50);		
}

function moveIt(event,param){
	xy = document.getElementById("leinwand");
	ctx = xy.getContext("2d");
	ctx.clearRect(0,0,21,xy.height);
	if (param == 1 && LBalken > 0) {
		LBalken = LBalken - 40;
	}
	if (param == 0 && LBalken < (xy.height -100)) {
		LBalken = LBalken + 40;
	}
	
}