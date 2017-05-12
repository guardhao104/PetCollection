var WINDOW_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var WINDOW_HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

document.getElementById("header").style.height = 'WINDOW_HEIGHT/10';
document.getElementById("main").style.height = 'WINDOW_HEIGHT/10*9';

var food = ["R1", "R2", "R3", "R4", "SR1", "SR2", "SR3", "SR4", "SR5", "SR6", "SSR1", "SSR2", "SSR3"];
var recipe = ["R1+R2+SR1+SR2", "R1+R3+SR3+SR4", "R2+R4+SR5+SR6", "R3+R4+SR2+SR4", "R1+R4+SR1+SSR1"];
var day=1, gold=1000, health=100, hunger=100, happy=60;
var foodImage1 = new Image();
foodImage1.src = "./img/apple.png";
var foodImage2 = new Image();
foodImage2.src = "./img/apple.png";
var foodImage3 = new Image();
foodImage3.src = "./img/apple.png";
var foodImage4 = new Image();
foodImage4.src = "./img/apple.png";
var foodImage5 = new Image();
foodImage5.src = "./img/apple.png";
var foodImage6 = new Image();
foodImage6.src = "./img/apple.png";
var foodImage7 = new Image();
foodImage7.src = "./img/apple.png";
var foodImage8 = new Image();
foodImage8.src = "./img/apple.png";
var foodImage9 = new Image();
foodImage9.src = "./img/apple.png";
var foodImage10 = new Image();
foodImage10.src = "./img/apple.png";
var foodImage11 = new Image();
foodImage11.src = "./img/apple.png";
var foodImage12 = new Image();
foodImage12.src = "./img/apple.png";
var foodImage13 = new Image();
foodImage13.src = "./img/apple.png";

var food


var canvas = document.getElementById('shopCanvas');
var ctx = canvas.getContext('2d');
			
function showItemPanel(){
	canvas.style.visibility="visible";
}
function hideItemPanel(){
	canvas.style.visibility="hidden";
}
document.getElementById("shop").onclick=function() {
	showItemPanel();
	canvas.width = canvas.width;
	ctx.fillStyle = 'green';
	
	var box_width = 120, box_height = 120;
	var food_width = 100, food_height = 100;
	var box01_x = 60, box01_y = 30;
	var box02_x = 240, box02_y = 30;
	var box03_x = 420, box03_y = 30;
	var box04_x = 60, box04_y = 180;
	var box05_x = 240, box05_y = 180;
	var box06_x = 420, box06_y = 180;
	ctx.fillRect(box01_x, box01_y, box_width, box_height);
	ctx.fillRect(box02_x, box02_y, box_width, box_height);
	ctx.fillRect(box03_x, box03_y, box_width, box_height);
	ctx.fillRect(box04_x, box04_y, box_width, box_height);
	ctx.fillRect(box05_x, box05_y, box_width, box_height);
	ctx.fillRect(box06_x, box06_y, box_width, box_height);
	
	ctx.drawImage(foodImage1, box01_x + 10, box01_y + 10, food_width, food_height);
				
	canvas.onclick=function(e){
		e=e||event;
		var x=e.clientX-canvas.offsetLeft;
		var y=e.clientY-canvas.offsetTop;
						
		if(x>=60&&x<=180&&y>=30&&y<=150) {
			hideItemPanel();
		}
	}
}

document.getElementById("storage").onclick=function() {
	showItemPanel();
	canvas.width = canvas.width;
				
	ctx.fillStyle = 'green';
	ctx.fillRect(40, 20, 90, 90);
	ctx.fillRect(150, 20, 90, 90);
	ctx.fillRect(260, 20, 90, 90);
	ctx.fillRect(370, 20, 90, 90);
	ctx.fillRect(480, 20, 90, 90);
	ctx.fillRect(40, 130, 90, 90);
	ctx.fillRect(150, 130, 90, 90);
	ctx.fillRect(260, 130, 90, 90);
	ctx.fillRect(370, 130, 90, 90);
	ctx.fillRect(480, 130, 90, 90);
	ctx.fillRect(40, 240, 90, 90);
	ctx.fillRect(150, 240, 90, 90);
	ctx.fillRect(260, 240, 90, 90);
	ctx.fillRect(370, 240, 90, 90);
	ctx.fillRect(480, 240, 90, 90);
}
			
document.getElementById("feed").onclick=function() {
	showItemPanel();
	canvas.width = canvas.width;
				
	ctx.fillStyle = 'green';
	ctx.fillRect(40, 20, 90, 90);
	ctx.fillRect(150, 20, 90, 90);
	ctx.fillRect(260, 20, 90, 90);
	ctx.fillRect(370, 20, 90, 90);
	ctx.fillRect(480, 20, 90, 90);
}

document.getElementById("status").onclick=function() {
	showItemPanel();
	canvas.width = canvas.width;
				
	ctx.fillStyle = 'green';
	ctx.fillRect(300, 50, 250, 40);
	ctx.fillRect(300, 130, 250, 40);
	ctx.fillRect(300, 210, 250, 40);
}

document.getElementById("sleep").onclick=function() {
	for(var i=0;i<6;i++) {
		var id1 = "shop" + (i+1);
		var id2 = "price" + (i+1);
		var rand = parseInt(Math.random() * 100);		//0-99
		var q = parseInt(Math.random() * 3 + 2);		//q:2-4(1 pet) (3 pets)
		var price = parseInt(Math.random() * 11 + 10);	//price: 10-20(Common) 20-40(Rare) 40-80(SR)
		if (rand<13) {$("#"+id1).text(food[0] + "x" + q);$("#"+id2).text("$" + (price*q));}
		else if (rand<26) {$("#"+id1).text(food[1] + "x" + q);$("#"+id2).text("$" + (price*q));}
		else if (rand<39) {$("#"+id1).text(food[2] + "x" + q);$("#"+id2).text("$" + (price*q));}
		else if (rand<52) {$("#"+id1).text(food[3] + "x" + q);$("#"+id2).text("$" + (price*q));}
		else if (rand<59) {$("#"+id1).text(food[4] + "x" + q);$("#"+id2).text("$" + (price*2*q));}
		else if (rand<66) {$("#"+id1).text(food[5] + "x" + q);$("#"+id2).text("$" + (price*2*q));}
		else if (rand<73) {$("#"+id1).text(food[6] + "x" + q);$("#"+id2).text("$" + (price*2*q));}
		else if (rand<80) {$("#"+id1).text(food[7] + "x" + q);$("#"+id2).text("$" + (price*2*q));}
		else if (rand<87) {$("#"+id1).text(food[8] + "x" + q);$("#"+id2).text("$" + (price*2*q));}
		else if (rand<94) {$("#"+id1).text(food[9] + "x" + q);$("#"+id2).text("$" + (price*2*q));}
		else if (rand<96) {$("#"+id1).text(food[10] + "x" + q);$("#"+id2).text("$" + (price*4*q));}
		else if (rand<98) {$("#"+id1).text(food[11] + "x" + q);$("#"+id2).text("$" + (price*4*q));}
		else if (rand<100) {$("#"+id1).text(food[12] + "x" + q);$("#"+id2).text("$" + (price*4*q));}
	}
	if(hunger == 100 && health != 100) {health += 5;hunger -= 50;}
	else if(hunger == 100 && health == 100) {hunger -= 50;}
	else if(hunger == 50) {health -= 10;hunger -= 50;}
	else if(hunger == 0) {health -= 40;}
	gold += 200;
	day++;
	if (day<10) {$("#day").text("Day 0" + day);}
	else {$("#day").text("Day " + day);}
	$("#gold").text("Gold: " + gold);
	$("#health").text("Health " + health);
	$("#hunger").text("Hunger " + hunger);
	$("#happy").text("Happy " + happy);
}