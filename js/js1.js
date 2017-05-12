var WINDOW_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var WINDOW_HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

document.getElementById("header").style.height = 'WINDOW_HEIGHT/10';
document.getElementById("main").style.height = 'WINDOW_HEIGHT/10*9';

var food = ["Milk", "Butter", "Egg", "Cream", "Apple", "Banana", "Onion", "Peppers", "Strawberry", "Garlic", "Flour", "Chocolate", "Salt"];
var day=1, gold=1000, health=100, hunger=100, happy=60;

var foodImage1 = new Image();
foodImage1.src = "./img/food/milk.png";
var foodImage2 = new Image();
foodImage2.src = "./img/food/butter.png";
var foodImage3 = new Image();
foodImage3.src = "./img/food/egg.png";
var foodImage4 = new Image();
foodImage4.src = "./img/food/cream.png";
var foodImage5 = new Image();
foodImage5.src = "./img/food/apple.png";
var foodImage6 = new Image();
foodImage6.src = "./img/food/banana.png";
var foodImage7 = new Image();
foodImage7.src = "./img/food/onion.png";
var foodImage8 = new Image();
foodImage8.src = "./img/food/peppers.png";
var foodImage9 = new Image();
foodImage9.src = "./img/food/strawberry.png";
var foodImage10 = new Image();
foodImage10.src = "./img/food/garlic.png";
var foodImage11 = new Image();
foodImage11.src = "./img/food/flour.png";
var foodImage12 = new Image();
foodImage12.src = "./img/food/chocolate.png";
var foodImage13 = new Image();
foodImage13.src = "./img/food/salt.png";

var emptyImage = new Image();
emptyImage.src = "./img/blue_boxCross.png"

var recipeImage1 = new Image();
recipeImage1.src = "./img/food/burger.png";
var recipeImage2 = new Image();
recipeImage2.src = "./img/food/burger.png";
var recipeImage3 = new Image();
recipeImage3.src = "./img/food/burger.png";
var recipeImage4 = new Image();
recipeImage4.src = "./img/food/burger.png";
var recipeImage5 = new Image();
recipeImage5.src = "./img/food/burger.png";


var recipe = ["recipe1", "recipe2", "recipe3", "recipe4", "recipe5"];

var shop = new Array();
var shopItem = new Array();
var shopPrice = new Array();
var shopNumber = new Array();
var storage = new Array();
var storageNumber = new Array();
var feed = new Array();


var canvas = document.getElementById('shopCanvas');
var ctx = canvas.getContext('2d');

var canvasAD = document.getElementById('moreGame');
var ctxAD = canvasAD.getContext('2d');
var adImage = new Image();
adImage.src = "./img/AD.jpg";

ctxAD.fillStyle='red';
ctxAD.beginPath();
ctxAD.moveTo(250,0);
ctxAD.lineTo(0,400);
ctxAD.lineTo(250,500);
ctxAD.closePath();
ctxAD.fill();
ctxAD.fillStyle='black';
ctxAD.strokeRect(149,199,72,72);
ctxAD.font = '30px fantasy';
ctxAD.fillStyle = 'cyan';
ctxAD.textAlign = 'right';
adImage.onload=function(){  
    ctxAD.drawImage(adImage, 150, 200, 70, 70);     
}; 
ctxAD.drawImage(adImage, 150, 200, 70, 70);
ctxAD.fillText ("Food Fall", 220, 305);
ctxAD.font = '16px fantasy';
ctxAD.fillText ("Food Fall is a JavaScript", 235, 345);
ctxAD.fillText ("based game educating users", 235, 370);
ctxAD.fillText ("on the effects of food waste-", 235, 395);
ctxAD.fillText ("and to have fun too!", 235, 420);
$("#moreGame").hide();

//shop function
$("#shop").click(function() {
	if($("#shopCanvas").is(":hidden")){
		$("#shopCanvas").show(500); 
	}else{
		$("#shopCanvas").hide();
		$("#shopCanvas").show(500);
	}
	canvas.width = canvas.width;
	
	var box_width = 120, box_height = 120;
	var food_width = 100, food_height = 100;
	var box01_x = 60, box01_y = 30;
	var box02_x = 240, box02_y = 30;
	var box03_x = 420, box03_y = 30;
	var box04_x = 60, box04_y = 180;
	var box05_x = 240, box05_y = 180;
	var box06_x = 420, box06_y = 180;
	var text_x = 50, text_y = 340;
	var text_width = 200, text_height = 40;
	var button_width = 80, button_height = 40;
	var button01_x =330 , button01_y = 340;
	var button02_x =460 , button02_y = 340;
	var box01_check = false, box02_check = false, box03_check = false, box04_check = false, box05_check = false, box06_check = false;
	var totalGold = 0;
	
	ctx.font = '20px fantasy';
	
	//draw 6 boxes for food
	ctx.fillStyle = 'green';
	ctx.fillRect(box01_x, box01_y, box_width, box_height);
	ctx.fillRect(box02_x, box02_y, box_width, box_height);
	ctx.fillRect(box03_x, box03_y, box_width, box_height);
	ctx.fillRect(box04_x, box04_y, box_width, box_height);
	ctx.fillRect(box05_x, box05_y, box_width, box_height);
	ctx.fillRect(box06_x, box06_y, box_width, box_height);
	
	//money text field
	ctx.fillStyle = 'yellow';
	ctx.fillRect(text_x, text_y, text_width, text_height);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'left';
	ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
	
	//draw purchase button
	ctx.fillStyle = 'pink';
	ctx.fillRect(button01_x, button01_y, button_width, button_height);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText("Buy", button01_x + button_width/2, button01_y + 30);
	
	//draw cancle button
	ctx.fillStyle = 'pink';
	ctx.fillRect(button02_x, button02_y, button_width, button_height);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText("Cancel", button02_x + button_width/2, button02_y + 30);
	
	//draw 6 food
	ctx.drawImage(shop[0], box01_x + 10, box01_y + 10, food_width, food_height);
	ctx.drawImage(shop[1], box02_x + 10, box02_y + 10, food_width, food_height);
	ctx.drawImage(shop[2], box03_x + 10, box03_y + 10, food_width, food_height);
	ctx.drawImage(shop[3], box04_x + 10, box04_y + 10, food_width, food_height);
	ctx.drawImage(shop[4], box05_x + 10, box05_y + 10, food_width, food_height);
	ctx.drawImage(shop[5], box06_x + 10, box06_y + 10, food_width, food_height);
	
	//money information
	ctx.fillStyle = 'cyan';
	ctx.textAlign = 'center';
	ctx.fillText ("$ "+shopPrice[0], box01_x + box_width/2, box01_y + box_height + 20);
	ctx.fillText ("$ "+shopPrice[1], box02_x + box_width/2, box02_y + box_height + 20);
	ctx.fillText ("$ "+shopPrice[2], box03_x + box_width/2, box03_y + box_height + 20);
	ctx.fillText ("$ "+shopPrice[3], box04_x + box_width/2, box04_y + box_height + 20);
	ctx.fillText ("$ "+shopPrice[4], box05_x + box_width/2, box05_y + box_height + 20);
	ctx.fillText ("$ "+shopPrice[5], box06_x + box_width/2, box06_y + box_height + 20);
	
	//quantity information
	ctx.textAlign = 'right';
	ctx.fillText (shopItem[0]+" x "+shopNumber[0], box01_x + box_width, box01_y + box_height);
	ctx.fillText (shopItem[1]+" x "+shopNumber[1], box02_x + box_width, box02_y + box_height);
	ctx.fillText (shopItem[2]+" x "+shopNumber[2], box03_x + box_width, box03_y + box_height);
	ctx.fillText (shopItem[3]+" x "+shopNumber[3], box04_x + box_width, box04_y + box_height);
	ctx.fillText (shopItem[4]+" x "+shopNumber[4], box05_x + box_width, box05_y + box_height);
	ctx.fillText (shopItem[5]+" x "+shopNumber[5], box06_x + box_width, box06_y + box_height);
	
	
	canvas.onclick=function(e){
		e=e||event;
		var x=e.clientX-canvas.offsetLeft;
		var y=e.clientY-canvas.offsetTop;
		
		//button 1
		if(x >= box01_x && x <= box01_x + box_width && y >= box01_y && y <= box01_y + box_height) {
			if(box01_check) {
				//repaint total price
				totalGold -= shopPrice[0];
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				//repaint box
				ctx.clearRect(box01_x, box01_y, box_width, box_height);
				ctx.fillStyle = 'green';
				ctx.fillRect(box01_x, box01_y, box_width, box_height);
				ctx.drawImage(shop[0], box01_x + 10, box01_y + 10, food_width, food_height);
				ctx.fillStyle = 'cyan';
				ctx.textAlign = 'right';
				ctx.fillText (shopItem[0]+" x "+shopNumber[0], box01_x + box_width, box01_y + box_height);
				
				box01_check = false;
			}else{
				totalGold += shopPrice[0];
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(box01_x, box01_y, box_width, box_height);
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				
				box01_check = true;
			}
		}
		
		//button 2
		if(x >= box02_x && x <= box02_x + box_width && y >= box02_y && y <= box02_y + box_height) {
			if(box02_check) {
				//repaint total price
				totalGold -= shopPrice[1];
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				//repaint box
				ctx.clearRect(box02_x, box02_y, box_width, box_height);
				ctx.fillStyle = 'green';
				ctx.fillRect(box02_x, box02_y, box_width, box_height);
				ctx.drawImage(shop[1], box02_x + 10, box02_y + 10, food_width, food_height);
				ctx.fillStyle = 'cyan';
				ctx.textAlign = 'right';
				ctx.fillText (shopItem[1]+" x "+shopNumber[1], box02_x + box_width, box02_y + box_height);
				
				box02_check = false;
			}else{
				totalGold += shopPrice[1];
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(box02_x, box02_y, box_width, box_height);
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				
				box02_check = true;
			}
		}
		
		//button 3
		if(x >= box03_x && x <= box03_x + box_width && y >= box03_y && y <= box03_y + box_height) {
			if(box03_check) {
				//repaint total price
				totalGold -= shopPrice[2];
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				//repaint box
				ctx.clearRect(box03_x, box03_y, box_width, box_height);
				ctx.fillStyle = 'green';
				ctx.fillRect(box03_x, box03_y, box_width, box_height);
				ctx.drawImage(shop[2], box03_x + 10, box03_y + 10, food_width, food_height);
				ctx.fillStyle = 'cyan';
				ctx.textAlign = 'right';
				ctx.fillText (shopItem[2]+" x "+shopNumber[2], box03_x + box_width, box03_y + box_height);
				
				box03_check = false;
			}else{
				totalGold += shopPrice[2];
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(box03_x, box03_y, box_width, box_height);
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				
				box03_check = true;
			}
		}
		
		//button 4
		if(x >= box04_x && x <= box04_x + box_width && y >= box04_y && y <= box04_y + box_height) {
			if(box04_check) {
				//repaint total price
				totalGold -= shopPrice[3];
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				//repaint box
				ctx.clearRect(box04_x, box04_y, box_width, box_height);
				ctx.fillStyle = 'green';
				ctx.fillRect(box04_x, box04_y, box_width, box_height);
				ctx.drawImage(shop[3], box04_x + 10, box04_y + 10, food_width, food_height);
				ctx.fillStyle = 'cyan';
				ctx.textAlign = 'right';
				ctx.fillText (shopItem[3]+" x "+shopNumber[3], box04_x + box_width, box04_y + box_height);
				
				box04_check = false;
			}else{
				totalGold += shopPrice[3];
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(box04_x, box04_y, box_width, box_height);
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				
				box04_check = true;
			}
		}
		
		//button 5
		if(x >= box05_x && x <= box05_x + box_width && y >= box05_y && y <= box05_y + box_height) {
			if(box05_check) {
				//repaint total price
				totalGold -= shopPrice[4];
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				//repaint box
				ctx.clearRect(box05_x, box05_y, box_width, box_height);
				ctx.fillStyle = 'green';
				ctx.fillRect(box05_x, box05_y, box_width, box_height);
				ctx.drawImage(shop[4], box05_x + 10, box05_y + 10, food_width, food_height);
				ctx.fillStyle = 'cyan';
				ctx.textAlign = 'right';
				ctx.fillText (shopItem[4]+" x "+shopNumber[4], box05_x + box_width, box05_y + box_height);
				
				box05_check = false;
			}else{
				totalGold += shopPrice[4];
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(box05_x, box05_y, box_width, box_height);
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				
				box05_check = true;
			}
		}
		
		//button 6
		if(x >= box06_x && x <= box06_x + box_width && y >= box06_y && y <= box06_y + box_height) {
			if(box06_check) {
				//repaint total price
				totalGold -= shopPrice[5];
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				//repaint box
				ctx.clearRect(box06_x, box06_y, box_width, box_height);
				ctx.fillStyle = 'green';
				ctx.fillRect(box06_x, box06_y, box_width, box_height);
				ctx.drawImage(shop[5], box06_x + 10, box06_y + 10, food_width, food_height);
				ctx.fillStyle = 'cyan';
				ctx.textAlign = 'right';
				ctx.fillText (shopItem[5]+" x "+shopNumber[5], box06_x + box_width, box06_y + box_height);
				
				box06_check = false;
			}else{
				totalGold += shopPrice[5];
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(box06_x, box06_y, box_width, box_height);
				ctx.clearRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'yellow';
				ctx.fillRect(text_x, text_y, text_width, text_height);
				ctx.fillStyle = 'black';
				ctx.textAlign = 'left';
				ctx.fillText(" Total Gold: " + totalGold, text_x, text_y + 30);
				
				box06_check = true;
			}
		}
		
		//button buy
		if(x >= button01_x && x <= button01_x + button_width && y >= button01_y && y <= button01_y + button_height) {
			gold -= totalGold;
			$("#gold").text("Gold: " + gold);
			if (box01_check) {shopItem[0] = ""; shopPrice[0] = 0; shopNumber[0] = 0; shop[0] = emptyImage;}
			if (box02_check) {shopItem[1] = ""; shopPrice[1] = 0; shopNumber[1] = 0; shop[1] = emptyImage;}
			if (box03_check) {shopItem[2] = ""; shopPrice[2] = 0; shopNumber[2] = 0; shop[2] = emptyImage;}
			if (box04_check) {shopItem[3] = ""; shopPrice[3] = 0; shopNumber[3] = 0; shop[3] = emptyImage;}
			if (box05_check) {shopItem[4] = ""; shopPrice[4] = 0; shopNumber[4] = 0; shop[4] = emptyImage;}
			if (box06_check) {shopItem[5] = ""; shopPrice[5] = 0; shopNumber[5] = 0; shop[5] = emptyImage;}
			$("#shopCanvas").hide(500);
		}

		//button cancel
		if(x >= button02_x && x <= button02_x + button_width && y >= button02_y && y <= button02_y + button_height) {
			$("#shopCanvas").hide(500);
		}
	}
});

document.getElementById("storage").onclick=function() {
	if($("#shopCanvas").is(":hidden")){
		$("#shopCanvas").show(500); 
	}else{
		$("#shopCanvas").hide();
		$("#shopCanvas").show(500);
	}
	canvas.width = canvas.width;
	
	var box_width = 90, box_height = 90;
	var food_width = 80, food_height = 80;
	var box01_x = 40, box01_y = 20;
	var box02_x = 150, box02_y = 20;
	var box03_x = 260, box03_y = 20;
	var box04_x = 370, box04_y = 20;
	var box05_x = 480, box05_y = 20;
	var box06_x = 40, box06_y = 120;
	var box07_x = 150, box07_y = 120;
	var box08_x = 260, box08_y = 120;
	var box09_x = 370, box09_y = 120;
	var box10_x = 480, box10_y = 120;
	var box11_x = 40, box11_y = 220;
	var box12_x = 150, box12_y = 220;
	var box13_x = 260, box13_y = 220;
	var box14_x = 370, box14_y = 220;
	var box15_x = 480, box15_y = 220;
	var text_x = 50, text_y = 340;
	var text_width = 200, text_height = 40;
	var button_width = 80, button_height = 40;
	var button01_x = 330 , button01_y = 340;
	var button02_x = 460 , button02_y = 340;
	
	ctx.font = '20px fantasy';
				
	//draw 6 boxes for food
	ctx.fillStyle = 'green';
	ctx.fillRect(box01_x, box01_y, box_width, box_height);
	ctx.fillRect(box02_x, box02_y, box_width, box_height);
	ctx.fillRect(box03_x, box03_y, box_width, box_height);
	ctx.fillRect(box04_x, box04_y, box_width, box_height);
	ctx.fillRect(box05_x, box05_y, box_width, box_height);
	ctx.fillRect(box06_x, box06_y, box_width, box_height);
	ctx.fillRect(box07_x, box07_y, box_width, box_height);
	ctx.fillRect(box08_x, box08_y, box_width, box_height);
	ctx.fillRect(box09_x, box09_y, box_width, box_height);
	ctx.fillRect(box10_x, box10_y, box_width, box_height);
	ctx.fillRect(box11_x, box11_y, box_width, box_height);
	ctx.fillRect(box12_x, box12_y, box_width, box_height);
	ctx.fillRect(box13_x, box13_y, box_width, box_height);
	ctx.fillRect(box14_x, box14_y, box_width, box_height);
	ctx.fillRect(box15_x, box15_y, box_width, box_height);
	
	//draw throw button
	ctx.fillStyle = 'pink';
	ctx.fillRect(button01_x, button01_y, button_width, button_height);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText("Throw", button01_x + button_width/2, button01_y + 30);
	
	//draw cancle button
	ctx.fillStyle = 'pink';
	ctx.fillRect(button02_x, button02_y, button_width, button_height);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText("Cancel", button02_x + button_width/2, button02_y + 30);
	
	canvas.onclick=function(e){
		e=e||event;
		var x=e.clientX-canvas.offsetLeft;
		var y=e.clientY-canvas.offsetTop;
						
		if(x >= button02_x && x <= button02_x + button_width && y >= button02_y && y <= button02_y + button_height) {
			$("#shopCanvas").hide(500);
		}
	}
}
			
document.getElementById("feed").onclick=function() {
	if($("#shopCanvas").is(":hidden")){
		$("#shopCanvas").show(500); 
	}else{
		$("#shopCanvas").hide();
		$("#shopCanvas").show(500);
	}
	canvas.width = canvas.width;
	
	var box_width = 90, box_height = 90;
	var food_width = 80, food_height = 80;
	var box01_x = 40, box01_y = 20;
	var box02_x = 150, box02_y = 20;
	var box03_x = 260, box03_y = 20;
	var box04_x = 370, box04_y = 20;
	var box05_x = 480, box05_y = 20;
	var lineHeight = 50;
	var panelWidth = 400;
	var panelHeight = 120;
	var panel_x = 100;
	var button_width = 80, button_height = 40;
	var button01_x = 330 , button01_y = 340;
	var button02_x = 460 , button02_y = 340;
	
	ctx.font = '20px fantasy';
	
	//draw 5 boxes
	ctx.fillStyle = 'green';
	ctx.fillRect(box01_x, box01_y, box_width, box_height);
	ctx.fillRect(box02_x, box02_y, box_width, box_height);
	ctx.fillRect(box03_x, box03_y, box_width, box_height);
	ctx.fillRect(box04_x, box04_y, box_width, box_height);
	ctx.fillRect(box05_x, box05_y, box_width, box_height);
	
	//draw 5 recipes
	ctx.drawImage(recipeImage1, box01_x + 5, box01_y + 5, food_width, food_height);
	ctx.drawImage(recipeImage2, box02_x + 5, box02_y + 5, food_width, food_height);
	ctx.drawImage(recipeImage3, box03_x + 5, box03_y + 5, food_width, food_height);
	ctx.drawImage(recipeImage4, box04_x + 5, box04_y + 5, food_width, food_height);
	ctx.drawImage(recipeImage5, box05_x + 5, box05_y + 5, food_width, food_height);
	
	ctx.fillStyle = 'cyan';
	ctx.textAlign = 'center';
	ctx.fillText (recipe[0], box01_x + box_width/2, box01_y + box_height + 20);
	ctx.fillText (recipe[1], box02_x + box_width/2, box02_y + box_height + 20);
	ctx.fillText (recipe[2], box03_x + box_width/2, box03_y + box_height + 20);
	ctx.fillText (recipe[3], box04_x + box_width/2, box04_y + box_height + 20);
	ctx.fillText (recipe[4], box05_x + box_width/2, box05_y + box_height + 20);
	
	//draw feed button
	ctx.fillStyle = 'pink';
	ctx.fillRect(button01_x, button01_y, button_width, button_height);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText("Feed", button01_x + button_width/2, button01_y + 30);
	
	//draw cancle button
	ctx.fillStyle = 'pink';
	ctx.fillRect(button02_x, button02_y, button_width, button_height);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText("Cancel", button02_x + button_width/2, button02_y + 30);
	
	canvas.onclick=function(e){
		e=e||event;
		var x=e.clientX-canvas.offsetLeft;
		var y=e.clientY-canvas.offsetTop;
						
		if(x>=box01_x && x<=box01_x + box_width && y>=box01_y && y<=box01_y + box_height) {
			ctx.lineWidth = 5.0;
			ctx.moveTo(box01_x + box_width/2, box01_y + box_height + 20);
			ctx.lineTo(box01_x + box_width/2, box01_y + box_height + 20 + lineHeight);
			ctx.fillStyle = 'orange';
			ctx.fillRect(panel_x, box01_y + box_height + 20 + lineHeight, panelWidth, panelHeight);
			
			
		}
	}
	canvas.onclick=function(e){
		e=e||event;
		var x=e.clientX-canvas.offsetLeft;
		var y=e.clientY-canvas.offsetTop;
						
		if(x >= button02_x && x <= button02_x + button_width && y >= button02_y && y <= button02_y + button_height) {
			$("#shopCanvas").hide(500);
		}
	}

}

document.getElementById("status").onclick=function() {
	if($("#shopCanvas").is(":hidden")){
		$("#shopCanvas").show(500); 
	}else{
		$("#shopCanvas").hide();
		$("#shopCanvas").show(500);
	}
	canvas.width = canvas.width;
	
	var pet_img = new Image();
	pet_img.src = "./img/pet01.gif";
	var img_x = 20, img_y = 40;
	var img_width = 200, img_height = 200;
	var bar01_x = 300, bar01_y = 50;
	var bar02_x = 300, bar02_y = 120;
	var bar03_x = 300, bar03_y = 190;
	var bar_width = 250, bar_height = 35;
	var button_width = 80, button_height = 40;
	var button01_x = 330 , button01_y = 340;
	var button02_x = 460 , button02_y = 340;
	
	ctx.font = '20px fantasy';
	
	//draw pet
	pet_img.onload=function(){
		ctx.drawImage(pet_img, img_x, img_y, img_width, img_height);
	}
	ctx.drawImage(pet_img, img_x, img_y, img_width, img_height);
	
	//draw status bar
	ctx.fillStyle = 'green';
	ctx.fillRect(bar01_x, bar01_y, bar_width, bar_height);
	ctx.fillRect(bar02_x, bar02_y, bar_width, bar_height);
	ctx.fillRect(bar03_x, bar03_y, bar_width, bar_height);
	ctx.fillStyle = 'cyan';
	ctx.textAlign = 'right';
	ctx.fillText("Health", bar01_x - 5, bar01_y + 25);
	ctx.fillText("Hunger", bar02_x - 5, bar02_y + 25);
	ctx.fillText("Happy", bar03_x - 5, bar03_y + 25);
	
	//draw status bar value
	ctx.fillStyle = 'blue';
	ctx.fillRect(bar01_x, bar01_y, bar_width * health / 100, bar_height);
	ctx.fillRect(bar02_x, bar02_y, bar_width * hunger / 100, bar_height);
	ctx.fillRect(bar03_x, bar03_y, bar_width * happy / 100, bar_height);
	
	//draw status value information
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText(health + "/100", bar01_x + bar_width/2, bar01_y + 25);
	ctx.fillText(hunger + "/100", bar02_x + bar_width/2, bar02_y + 25);
	ctx.fillText(happy + "/100", bar03_x + bar_width/2, bar03_y + 25);
	
	//draw cancle button
	ctx.fillStyle = 'pink';
	ctx.fillRect(button02_x, button02_y, button_width, button_height);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText("Cancel", button02_x + button_width/2, button02_y + 30);
	
	canvas.onclick=function(e){
		e=e||event;
		var x=e.clientX-canvas.offsetLeft;
		var y=e.clientY-canvas.offsetTop;
						
		if(x >= button02_x && x <= button02_x + button_width && y >= button02_y && y <= button02_y + button_height) {
			$("#shopCanvas").hide(500);
		}
	}
}

document.getElementById("sleep").onclick=function() {
	if($("#shopCanvas").is(":visible")){
		$("#shopCanvas").hide();
	}
	canvas.width = canvas.width;
	for(var i=0;i<6;i++) {
		var rand = parseInt(Math.random() * 100);		//0-99
		var q = parseInt(Math.random() * 3 + 2);		//q:2-4(1 pet) (3 pets)
		var price = parseInt(Math.random() * 11 + 10);	//price: 10-20(Common) 20-40(Rare) 40-80(SR)
		
		if (rand<13) {shop[i] = foodImage1; shopPrice[i] = price * q; shopNumber[i] = q; shopItem[i] = food[0];}
		else if (rand<26) {shop[i] = foodImage2; shopPrice[i] = price * q; shopNumber[i] = q; shopItem[i] = food[1];}
		else if (rand<39) {shop[i] = foodImage3; shopPrice[i] = price * q; shopNumber[i] = q; shopItem[i] = food[2];}
		else if (rand<52) {shop[i] = foodImage4; shopPrice[i] = price * q; shopNumber[i] = q; shopItem[i] = food[3];}
		else if (rand<59) {shop[i] = foodImage5; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[4];}
		else if (rand<66) {shop[i] = foodImage6; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[5];}
		else if (rand<73) {shop[i] = foodImage7; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[6];}
		else if (rand<80) {shop[i] = foodImage8; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[7];}
		else if (rand<87) {shop[i] = foodImage9; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[8];}
		else if (rand<94) {shop[i] = foodImage10; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[9];}
		else if (rand<96) {shop[i] = foodImage11; shopPrice[i] = price * q * 4; shopNumber[i] = q; shopItem[i] = food[10];}
		else if (rand<98) {shop[i] = foodImage12; shopPrice[i] = price * q * 4; shopNumber[i] = q; shopItem[i] = food[11];}
		else if (rand<100) {shop[i] = foodImage13; shopPrice[i] = price * q * 4; shopNumber[i] = q; shopItem[i] = food[12];}
	}
	
	gold += 200;
	day++;
	if (day<10) {$("#day").text("Day 0" + day);}
	else {$("#day").text("Day " + day);}
	$("#gold").text("Gold: " + gold);
	
	if(hunger == 100 && health != 100) {health += 5;hunger -= 50;}
	else if(hunger == 100 && health == 100) {hunger -= 50;}
	else if(hunger == 50 && health > 20) {health -= 20;hunger -= 50;}
	else if(hunger == 50 && health <= 20) {health = 0; hunger -=50; $("#day").text("GAME OVER");}
	else if(hunger == 0 && health > 40) {health -= 40;}
	else if(hunger == 0 && health <= 40) {health = 0; $("#day").text("GAME OVER");} 
}

$("#playMore").click(function(){
	$("#moreGame").toggle(1000);
});
