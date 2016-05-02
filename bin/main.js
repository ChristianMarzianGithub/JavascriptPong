function meineFunktion(event){
	var x = document.getElementById("leinwand");
	var ctx = x.getContext("2d");
	
	var cx = event.clientX;
    var cy = event.clientY;
    
    ctx.beginPath();
	ctx.moveTo(cx-1, cy-1);
	ctx.lineTo(cx, cy);
	ctx.stroke();
}