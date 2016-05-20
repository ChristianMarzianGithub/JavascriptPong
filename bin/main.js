var x = 0;
var LBalken = 150;
var xy;
var ctx;
var circ;
var ab;
var BallX = 150;
var BallY = 400;
var ende = false;
var radiusBall = 25;
var direction = "ro";
var score = true;
var Leben = 3;

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
	ctx.rect(x,LBalken,20,120);
	ctx.fill();
	ctx.stroke();
	drawBall();
	ticker();
}


function ticker(){
	setInterval(function(){
		
	drawBar();
	drawBall();
	document.getElementById("Leben").innerHTML = Leben;
	},40);
}


function TestFallLinksUnten(){
		circ.clearRect(21,0,xy.width-21,xy.height);
		init();
		BallY = 50;
		BallX = 250;
		direction = "lu";
		ballAnimation();	
}


function TestFallLinksOben(){
	circ.clearRect(21,0,xy.width-21,xy.height);
	init();
	BallY = 400;
	BallX = 250;
	direction = "lo";
	ballAnimation();		
}

function TestFallUntenLinks(){
	circ.clearRect(21,0,xy.width-21,xy.height);
	init();
	BallY = 50;
	BallX = 50;
	direction = "ru";
	ballAnimation();		
}

function TestFallUntenRechts(){
	circ.clearRect(21,0,xy.width-21,xy.height);
	init();
	BallY = 200;
	BallX = 600;
	direction = "lu";
	ballAnimation();		
}


function drawBar(){
	ctx.beginPath();
	ctx.rect(x,LBalken,20,120);

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

function checkAndMoveBall(){
			if (direction == "ru") 
			{
				BallX = BallX + 10;
				BallY = BallY + 10;
			}else if (direction == "ro") 
			{
				BallX = BallX + 10;
				BallY = BallY - 10;
			}else if (direction == "lo") 
			{
				BallX = BallX - 10;
				BallY = BallY - 10;
			}else if (direction == "lu") {
				BallX = BallX - 10;
				BallY = BallY + 10;
			}else if (direction == "roBalken") {
				BallX = BallX + 10;
				BallY = BallY - 10;				
			}
}

function checkAndSetDirection(){
			
	//linke Seite
	if ((direction == "lu")&&( BallX == 0)&&(BallY != 0) && (BallY != xy.height)) {
		direction = "ru";
	}			

	if ((direction == "lo")&&( BallX == 0)&&(BallY != 0) && (BallY != xy.height)) {
		direction = "ro";
	}			
}


function checkIfHit(){
	
	if (BallX == 0) {
		if ( (BallY > LBalken) && (BallY < (LBalken + 120))) {
			score = true;	
		}else{
			score = false;	
			daneben();		
		}		
	}

}

function daneben(){
	Leben = Leben - 1;
}

function ballAnimation(){	
		setInterval(function(){
			circ.clearRect(21,0,xy.width-21,xy.height);
			checkAndSetDirection();
			checkIfHit();
			checkAndMoveBall();			
	 	}, 50);		
}

function moveIt(event,param){				//moves the Bar up and down
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