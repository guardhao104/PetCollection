//var WINDOW_WIDTH = window.screen.width;
//var WINDOW_HEIGHT = window.screen.height;
//if(WINDOW_WIDTH < WINDOW_HEIGHT){var x = WINDOW_WIDTH; WINDOW_WIDTH = WINDOW_HEIGHT; WINDOW_HEIGHT = x;}


var WINDOW_WIDTH = 1920;
var WINDOW_HEIGHT = 1080;
//document.getElementById("header").style.height = WINDOW_HEIGHT/100*15 + "px";
//document.getElementById("main").style.height = WINDOW_HEIGHT/100*85 + "px";

var food = ["Banana", "Strawberry", "Milk", "Egg", "Flour", "Powder", "Vanilla", "Rice", "Sugar", "Cream", "Chocolate"];
var foodStorageDate = [5, 5, 5, 5, 8, 8, 8, 8, 8, 8, 15];
var day=1, score=0, gold=300, health=100, hunger=100, happy=60;
//for the sleep animation
var width = 1;
var height = 1;
//for easter egg 01
var easterEgg01 = 1;

var foodImage1 = new Image();
foodImage1.src = "./img/food/banana.png";
var foodImage2 = new Image();
foodImage2.src = "./img/food/strawberry.png";
var foodImage3 = new Image();
foodImage3.src = "./img/food/milk.png";
var foodImage4 = new Image();
foodImage4.src = "./img/food/egg.png";
var foodImage5 = new Image();
foodImage5.src = "./img/food/flour.png";
var foodImage6 = new Image();
foodImage6.src = "./img/food/powder.png";
var foodImage7 = new Image();
foodImage7.src = "./img/food/vanilla.png";
var foodImage8 = new Image();
foodImage8.src = "./img/food/rice.png";
var foodImage9 = new Image();
foodImage9.src = "./img/food/sugar.png";
var foodImage10 = new Image();
foodImage10.src = "./img/food/cream.png";
var foodImage11 = new Image();
foodImage11.src = "./img/food/chocolate.png";

var emptyImage = new Image();
emptyImage.src = "./img/blue_boxCross.png"

var recipeImage1 = new Image();
recipeImage1.src = "./img/food/muffin.png";
var recipeImage2 = new Image();
recipeImage2.src = "./img/food/ricepudding.png";
var recipeImage3 = new Image();
recipeImage3.src = "./img/food/milkshake.png";
var recipeImage4 = new Image();
recipeImage4.src = "./img/food/strawberrycake.png";
var recipeImage5 = new Image();
recipeImage5.src = "./img/food/bananabread.png";

var pet_img = new Image();
pet_img.src = "./img/pet01.png";

var elf_img = new Image();
elf_img.src = "./img/elf.gif";


var shop = new Array();				//the image of shop item
var shopItem = new Array();			//the name of shop item
var shopPrice = new Array();		//the price of shop item
var shopNumber = new Array();		//the quantity of shop item
var shopStoreDate = new Array();	//the store date of shop item

var storage = new Array();			//the name of storage item
storage[0] = food[0]; storage[1] = food[1]; storage[2] = food[4]; storage[3] = food[5];
var storageNumber = new Array();	//the quantity of storage item
storageNumber[0] = 3; storageNumber[1] = 3; storageNumber[2] = 3; storageNumber[3] = 3;
var storageDay = new Array();		//the store date of storage item
storageDay[0] = 5; storageDay[1] = 5; storageDay[2] = 5; storageDay[3] = 5; 
var storageImage = new Array();		//the image of storage item
storageImage[0] = foodImage1; storageImage[1] = foodImage2; storageImage[2] = foodImage5; storageImage[3] = foodImage6;

var feed = new Array();
var recipe = ["Muffin", "Rice Pudding", "Milkshake", "Berry Cake", "Banana Bread"];
var foodNumber = [3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0]; 		//the quantity of owned food

var quiz = new Array;
quiz[0] = ["How much of the food we buy is wasted?", "1/4", "1/3", "1/5", "1/2", 1];
quiz[1] = ["How much people can we feed if we don't waste food?", "$5 million", "$3 billion", "$4 million", "$6 billion", 1];
quiz[2] = ["How much food do Americans throw away?", "$120 million", "$2 million", "$8 billion", "$165 million", 3];
quiz[3] = ["How much pound does the average person gearnate", "1", "3", "4", "60", 2];
quiz[4] = ["About how much solid tons of waste do we waste each year?", "13", "1.2", "1.5", "1.12", 2];
quiz[5] = ["The Natural Resources Defense Council estimates that the United States will throw away how many dollars' worth of turkey on Thanksgiving?", "$150,000", "$800,000", "$293 million", "$3.5 billion", 2];
quiz[6] = ["Americans waste one out of every four...", "bags of groceries", "pieces of fruit", "boxes of spaghetti", "cartons of milk", 0];
quiz[7] = ["What percent of food worldwide is never eaten?", "10 percent", "30 percent", "60 percent", "90 percent", 1];
quiz[8] = ["What else is wasted when we produce food that no one eats?", "water", "fuel", "land resources", "all of the above", 3];
quiz[9] = ["Consumers in industrialized countries annually waste as much food as is produced in what region of the world?", "Sub-Saharan Africa", "Southeast Asia", "The Middle East", "Europe", 0];
quiz[10] = ["What greenhouse gas is produced by food waste, the single largest category of waste that goes to municipal landfills?", "Carbon dioxide", "Nitrous oxide", "methane", "chlorofluorocarbons", 2];
quiz[11] = ["What can you do to help prevent food waste?", "Don’t buy more food than you can cook", "Eat leftovers on a regular night each week", "Shop at store that offer misshapen food at a discount", "All of the above", 3];
quiz[12] = ["Some 7m tones of food and drink waste was thrown away from UK homes in 2012. This would fill the Wembley Stadium how many times?", "5", "9", "15", "11", 1];
quiz[13] = ["In 2012, what was the total cost of avoidable fresh vegetable and salad wasted because it was not used in time?", "£100,000", "£10 million", "£1.1 billion", "£500,000", 2];
quiz[14] = ["Which types of food that had previously been deemed unsalable are now being stocked at retailers such as Walmart and Whole Foods?", "Foods with a newly expired sell-by date", "Cosmetically unappealing items", "GMO-modified foods", "None of above", 1];
quiz[15] = ["At what time each year does the amount of discarded food in the U.S. increase by a third?", "In the week following the Super Bowl", "When summertime temperatures peak", "Between Thanksgiving and Christmas", "None of above", 2];
quiz[16] = ["Wasted food can make up as much as 20 percent of a landfill. What are the most serious effects on the environment?", "Untended piles of foods can spontaneously combust", "Uneaten food increases the number of feral pigs", "Rotting food creates methane, which contributes to greenhouse gas emissions", "None of above", 2];
quiz[17] = ["How much percentage of food is thrown away in schools?", "27%", "23%", "95%", "50%", 0];
quiz[18] = ["What are the foods most wasted in schools?", "Main dish", "Fruit", "Vegetables", "Snacks", 2];
quiz[19] = ["How much money does NSLP per year from food waste?", "$6 billion", "$2 billion", "$3 billion", "$5 billion", 1];
quiz[20] = ["How much food do we waste in a day?", "4.3 pounds", "3 pounds", "9.1 pounds", "2.4 pounds", 0];
quiz[21] = ["What is food waste?", "Food waste refers to food that we don’t know where it is.", "Food waste refers to food that is fit for consumption, but is thrown away.", "Food waste refers to food that is rotten.", "Food waste refers to the decrease in edible food mass available for human consumption throughout the different segments of the food supply chain.", 1];
quiz[22] = ["Food is wasted at home due to:", "Poor planning", "Poor storage", "Poor food preparation", "All of the above", 3];
quiz[23] = ["If we could reduce our food loss by 15%, how many more Americans could be fed each year?", "5 million Americans", "15 million Americans", "25 million Americans", "50 million Americans", 2];
quiz[24] = ["What percent of food in the U.S. currently goes uneaten?", "40%", "20%", "30%", "10%", 0];

var canvas = document.getElementById('shopCanvas');
var ctx = canvas.getContext('2d');


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
			if (shopItem[0] != "") {
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
			}else{
				box01_check = false;
			}
		}
		
		//button 2
		if(x >= box02_x && x <= box02_x + box_width && y >= box02_y && y <= box02_y + box_height) {
			if (shopItem[1] != "") {
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
			}else{
				box02_check = false;
			}
		}
		
		//button 3
		if(x >= box03_x && x <= box03_x + box_width && y >= box03_y && y <= box03_y + box_height) {
			if (shopItem[2] != "") {
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
			}else{
				box03_check = false;
			}
		}
		
		//button 4
		if(x >= box04_x && x <= box04_x + box_width && y >= box04_y && y <= box04_y + box_height) {
			if (shopItem[3] != "") {
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
			}else{
				box04_check = false;
			}
		}
		
		//button 5
		if(x >= box05_x && x <= box05_x + box_width && y >= box05_y && y <= box05_y + box_height) {
			if (shopItem[4] != "") {
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
			}else{
				box05_check = false;
			}
		}
		
		//button 6
		if(x >= box06_x && x <= box06_x + box_width && y >= box06_y && y <= box06_y + box_height) {
			if (shopItem[5] != "") {
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
			}else{
				box06_check = false;
			}
		}
		
		//button buy
		if(x >= button01_x && x <= button01_x + button_width && y >= button01_y && y <= button01_y + button_height) {
			gold -= totalGold;
			$("#gold").text("Gold: " + gold);
			if (box01_check) {
				for (var i=0; i<15; i++) {
					if (storage[i] == null) {storage[i] = shopItem[0]; storageNumber[i] = shopNumber[0]; storageDay[i] = shopStoreDate[0]; storageImage[i] = shop[0]; break;}
				}
				for (var i=0; i<13; i++) {
					if (food[i] == shopItem[0]) {foodNumber[i] += shopNumber[0];break;}
				}
				shopItem[0] = ""; shopPrice[0] = 0; shopNumber[0] = 0; shop[0] = emptyImage;
			}
			if (box02_check) {
				for (var i=0; i<15; i++) {
					if (storage[i] == null) {storage[i] = shopItem[1]; storageNumber[i] = shopNumber[1]; storageDay[i] = shopStoreDate[1]; storageImage[i] = shop[1]; break;}
				}
				for (var i=0; i<13; i++) {
					if (food[i] == shopItem[1]) {foodNumber[i] += shopNumber[1];break;}
				}
				shopItem[1] = ""; shopPrice[1] = 0; shopNumber[1] = 0; shop[1] = emptyImage;
			}
			if (box03_check) {
				for (var i=0; i<15; i++) {
					if (storage[i] == null) {storage[i] = shopItem[2]; storageNumber[i] = shopNumber[2]; storageDay[i] = shopStoreDate[2]; storageImage[i] = shop[2]; break;}
				}
				for (var i=0; i<13; i++) {
					if (food[i] == shopItem[2]) {foodNumber[i] += shopNumber[2];break;}
				}
				shopItem[2] = ""; shopPrice[2] = 0; shopNumber[2] = 0; shop[2] = emptyImage;
			}
			if (box04_check) {
				for (var i=0; i<15; i++) {
					if (storage[i] == null) {storage[i] = shopItem[3]; storageNumber[i] = shopNumber[3]; storageDay[i] = shopStoreDate[3]; storageImage[i] = shop[3]; break;}
				}
				for (var i=0; i<13; i++) {
					if (food[i] == shopItem[3]) {foodNumber[i] += shopNumber[3];break;}
				}
				shopItem[3] = ""; shopPrice[3] = 0; shopNumber[3] = 0; shop[3] = emptyImage;
			}
			if (box05_check) {
				for (var i=0; i<15; i++) {
					if (storage[i] == null) {storage[i] = shopItem[4]; storageNumber[i] = shopNumber[4]; storageDay[i] = shopStoreDate[4]; storageImage[i] = shop[4]; break;}
				}
				for (var i=0; i<13; i++) {
					if (food[i] == shopItem[4]) {foodNumber[i] += shopNumber[4];break;}
				}
				shopItem[4] = ""; shopPrice[4] = 0; shopNumber[4] = 0; shop[4] = emptyImage;
			}
			if (box06_check) {
				for (var i=0; i<15; i++) {
					if (storage[i] == null) {storage[i] = shopItem[5]; storageNumber[i] = shopNumber[5]; storageDay[i] = shopStoreDate[5]; storageImage[i] = shop[5]; break;}
				}
				for (var i=0; i<13; i++) {
					if (food[i] == shopItem[5]) {foodNumber[i] += shopNumber[5];break;}
				}
				shopItem[5] = ""; shopPrice[5] = 0; shopNumber[5] = 0; shop[5] = emptyImage;
			}
			$("#shopCanvas").hide(500);
		}

		//button cancel
		if(x >= button02_x && x <= button02_x + button_width && y >= button02_y && y <= button02_y + button_height) {
			$("#shopCanvas").hide(500);
		}
	}
});


//storage
document.getElementById("storage").onclick=function() {
	if($("#shopCanvas").is(":hidden")){
		$("#shopCanvas").show(500); 
	}else{
		$("#shopCanvas").hide();
		$("#shopCanvas").show(500);
	}
	canvas.width = canvas.width;
	
	for(var i=0;i<storage.length;i++) {
		if (storageNumber[i] == 0) {
			storage.splice(i,1);
			storageDay.splice(i,1);
			storageImage.splice(i,1);
			storageNumber.splice(i,1);
			i--;
		}
	}
	
	var box_width = 90, box_height = 90;
	var food_width = 70, food_height = 70;
	var box_x = [40, 150, 260, 370, 480, 40, 150, 260, 370, 480, 40, 150, 260, 370, 480];
	var box_y = [20, 20, 20, 20, 20, 120, 120, 120, 120, 120, 220, 220, 220, 220, 220];
	var text_x = 50, text_y = 340;
	var text_width = 200, text_height = 40;
	var button_width = 80, button_height = 40;
	var button01_x = 330 , button01_y = 340;
	var button02_x = 460 , button02_y = 340;
	
	ctx.font = '15px fantasy';
				
	//draw 15 boxes for food
	ctx.fillStyle = 'green';
	for (var i=0; i< 15; i++) {
		ctx.fillRect(box_x[i], box_y[i], box_width, box_height);
	}
	
	//draw 15 food
	for (var i=0; i<15; i++) {
		if (storageImage[i] != null) {
			ctx.drawImage(storageImage[i], box_x[i] + 10, box_y[i] + 10, food_width, food_height);
		}
	}
	
	//quantity information
	ctx.fillStyle = 'cyan';
	ctx.textAlign = 'right';
	for (var i=0; i<15; i++) {
		if (storage[i] != null) {
			ctx.fillText (storage[i]+" x " + storageNumber[i], box_x[i] + box_width, box_y[i] + box_height);
		}
	}
	
	//storage date
	for (var i=0; i<15; i++) {
		if (storageDay[i] != null) {
			ctx.fillText (storageDay[i], box_x[i] + box_width, box_y[i] + 20);
		}
	}
	
	//draw throw button
	ctx.font = '20px fantasy';
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
		
		//button cancel		
		if(x >= button02_x && x <= button02_x + button_width && y >= button02_y && y <= button02_y + button_height) {
			$("#shopCanvas").hide(500);
		}
		
		//button throw
		if(x >= button01_x && x <= button01_x + button_width && y >= button01_y && y <= button01_y + button_height) {
			for (var i=0; i<storage.length; i++) {
				if (storageDay[i] == "Broken") {
					for (var x=0;x<15;x++) {
						if(storage[i] == food[x]){foodNumber[x] -= storageNumber[i];break;}
					}
					score -= storageNumber[i]*500;
					$("#score").text("Score: " + score);
					storageNumber[i] = 0;
				}
			}
			for(var i=0;i<storage.length;i++) {
				if (storageNumber[i] == 0) {
					storage.splice(i,1);
					storageDay.splice(i,1);
					storageImage.splice(i,1);
					storageNumber.splice(i,1);
					i--;
				}
			}
			ctx.clearRect(0, 0, 600, 330);
			ctx.font = '15px fantasy';
				
			//draw 15 boxes for food
			ctx.fillStyle = 'green';
			for (var i=0; i< 15; i++) {
				ctx.fillRect(box_x[i], box_y[i], box_width, box_height);
			}
			
			//draw 15 food
			for (var i=0; i<15; i++) {
				if (storageImage[i] != null) {
					ctx.drawImage(storageImage[i], box_x[i] + 10, box_y[i] + 10, food_width, food_height);
				}
			}
			
			//quantity information
			ctx.fillStyle = 'cyan';
			ctx.textAlign = 'right';
			for (var i=0; i<15; i++) {
				if (storage[i] != null) {
					ctx.fillText (storage[i]+" x " + storageNumber[i], box_x[i] + box_width, box_y[i] + box_height);
				}
			}
			
			//storage date
			for (var i=0; i<15; i++) {
				if (storageDay[i] != null) {
					ctx.fillText (storageDay[i], box_x[i] + box_width, box_y[i] + 20);
				}
			}	
		}
	}
}

//feed
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
	
	var line1X = 86;
    var line2X = 195;
    var line3X = 304;
    var line4X = 413;
    var line5X = 523;
    var recipeBox1_x = 90;
    var recipeBox12345_y = 190;
    var recipeBox2_x = 200;
    var recipeBox3_x = 310;
    var recipeBox4_x = 420;
    var line12345Width = 8;
    var line12345Height = 30;
    var line12345Y = 135;
    var boxBackgroundX = 60;
    var boxBackgroundY = 165;
    var boxBackgroundWidth = 490;
    var boxBackgroundHeight = 150;
	var recipeCheck = [false, false, false, false, false];
	
    canvas.onclick=function(e){
        e=e||event;
        var x=e.clientX-canvas.offsetLeft;
        var y=e.clientY-canvas.offsetTop;                        
        if(x >= button02_x && x <= button02_x + button_width && y >= button02_y && y <= button02_y + button_height) {
            $("#shopCanvas").hide(500);
        }
        if(x>=box01_x && x<=box01_x + box_width && y>=box01_y && y<=box01_y + box_height) {
			ctx.clearRect(line3X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line2X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line4X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line5X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='green';
			ctx.fillRect(boxBackgroundX,boxBackgroundY,boxBackgroundWidth,boxBackgroundHeight);
			ctx.fillStyle='yellow';
			ctx.fillRect(recipeBox1_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox2_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox3_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox4_x,recipeBox12345_y,box_width,box_height);
			ctx.fillStyle='white';
			ctx.fillRect(line1X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='yellow';
			
			recipeCheck[0] = true;
			recipeCheck[1] = false;
			recipeCheck[2] = false;
			recipeCheck[3] = false;
			recipeCheck[4] = false;
			
			//draw image
			ctx.drawImage(foodImage1, recipeBox1_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage2, recipeBox2_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage5, recipeBox3_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage6, recipeBox4_x + 5, recipeBox12345_y + 5, food_width, food_height);
			//draw name
			ctx.fillStyle = 'cyan';
			ctx.textAlign = 'center';
			ctx.fillText(food[0], recipeBox1_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[1], recipeBox2_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[4], recipeBox3_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[5], recipeBox4_x + box_width/2, recipeBox12345_y - 5, box_width);
			//draw quantity
			ctx.textAlign = 'center';
			ctx.fillText("1/" + foodNumber[0], recipeBox1_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[1], recipeBox2_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[4], recipeBox3_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[5], recipeBox4_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
        }
        if(x>=box02_x && x<=box02_x + box_width && y>=box02_y && y<=box02_y + box_height) {
			ctx.clearRect(line3X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line1X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line4X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line5X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='green';
			ctx.fillRect(boxBackgroundX,boxBackgroundY,boxBackgroundWidth,boxBackgroundHeight);     
			ctx.fillStyle='yellow';
			ctx.fillRect(recipeBox1_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox2_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox3_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox4_x,recipeBox12345_y,box_width,box_height);
			ctx.fillStyle='white';
			ctx.fillRect(line2X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='yellow';
			
			recipeCheck[0] = false;
			recipeCheck[1] = true;
			recipeCheck[2] = false;
			recipeCheck[3] = false;
			recipeCheck[4] = false;
			
			//draw image
			ctx.drawImage(foodImage3, recipeBox1_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage4, recipeBox2_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage7, recipeBox3_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage8, recipeBox4_x + 5, recipeBox12345_y + 5, food_width, food_height);
			//draw name
			ctx.fillStyle = 'cyan';
			ctx.textAlign = 'center';
			ctx.fillText(food[2], recipeBox1_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[3], recipeBox2_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[6], recipeBox3_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[7], recipeBox4_x + box_width/2, recipeBox12345_y - 5, box_width);
			//draw quantity
			ctx.textAlign = 'center';
			ctx.fillText("1/" + foodNumber[2], recipeBox1_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[3], recipeBox2_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[6], recipeBox3_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[7], recipeBox4_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);			
        }
        if(x>=box03_x && x<=box03_x + box_width && y>=box03_y && y<=box03_y + box_height) {
			ctx.clearRect(line2X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line1X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line4X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line5X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='green';
			ctx.fillRect(boxBackgroundX,boxBackgroundY,boxBackgroundWidth,boxBackgroundHeight);
			ctx.fillStyle='yellow';
			ctx.fillRect(recipeBox1_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox2_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox3_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox4_x,recipeBox12345_y,box_width,box_height);
			ctx.fillStyle='white';
			ctx.fillRect(line3X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='yellow';
			
			recipeCheck[0] = false;
			recipeCheck[1] = false;
			recipeCheck[2] = true;
			recipeCheck[3] = false;
			recipeCheck[4] = false;
			
			//draw image
			ctx.drawImage(foodImage1, recipeBox1_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage3, recipeBox2_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage9, recipeBox3_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage10, recipeBox4_x + 5, recipeBox12345_y + 5, food_width, food_height);
			//draw name
			ctx.fillStyle = 'cyan';
			ctx.textAlign = 'center';
			ctx.fillText(food[0], recipeBox1_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[2], recipeBox2_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[8], recipeBox3_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[9], recipeBox4_x + box_width/2, recipeBox12345_y - 5, box_width);
			//draw quantity
			ctx.textAlign = 'center';
			ctx.fillText("1/" + foodNumber[0], recipeBox1_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[2], recipeBox2_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[8], recipeBox3_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[9], recipeBox4_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
        }
        if(x>=box04_x && x<=box04_x + box_width && y>=box04_y && y<=box04_y + box_height) {
			ctx.clearRect(line2X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line1X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line3X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line5X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='green';
			ctx.fillRect(boxBackgroundX,boxBackgroundY,boxBackgroundWidth,boxBackgroundHeight);     
			ctx.fillStyle='yellow';
			ctx.fillRect(recipeBox1_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox2_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox3_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox4_x,recipeBox12345_y,box_width,box_height);
			ctx.fillStyle='white';
			ctx.fillRect(line4X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='yellow';
			
			recipeCheck[0] = false;
			recipeCheck[1] = false;
			recipeCheck[2] = false;
			recipeCheck[3] = true;
			recipeCheck[4] = false;
			
			//draw image
			ctx.drawImage(foodImage2, recipeBox1_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage4, recipeBox2_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage5, recipeBox3_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage9, recipeBox4_x + 5, recipeBox12345_y + 5, food_width, food_height);
			//draw name
			ctx.fillStyle = 'cyan';
			ctx.textAlign = 'center';
			ctx.fillText(food[1], recipeBox1_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[3], recipeBox2_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[4], recipeBox3_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[8], recipeBox4_x + box_width/2, recipeBox12345_y - 5, box_width);
			//draw quantity
			ctx.textAlign = 'center';
			ctx.fillText("1/" + foodNumber[1], recipeBox1_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[3], recipeBox2_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[4], recipeBox3_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[8], recipeBox4_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
        }
        if(x>=box05_x && x<=box05_x + box_width && y>=box05_y && y<=box05_y + box_height) {
			ctx.clearRect(line2X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line1X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line3X,line12345Y,line12345Width,line12345Height);
			ctx.clearRect(line4X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='green';
			ctx.fillRect(boxBackgroundX,boxBackgroundY,boxBackgroundWidth,boxBackgroundHeight);
			ctx.fillStyle='yellow';
			ctx.fillRect(recipeBox1_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox2_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox3_x,recipeBox12345_y,box_width,box_height);
			ctx.fillRect(recipeBox4_x,recipeBox12345_y,box_width,box_height);
			ctx.fillStyle='white';
			ctx.fillRect(line5X,line12345Y,line12345Width,line12345Height);
			ctx.fillRect(line5X,line12345Y,line12345Width,line12345Height);
			ctx.fillStyle='yellow';
			
			recipeCheck[0] = false;
			recipeCheck[1] = false;
			recipeCheck[2] = false;
			recipeCheck[3] = false;
			recipeCheck[4] = true;
			
			//draw image
			ctx.drawImage(foodImage1, recipeBox1_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage4, recipeBox2_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage7, recipeBox3_x + 5, recipeBox12345_y + 5, food_width, food_height);
			ctx.drawImage(foodImage11, recipeBox4_x + 5, recipeBox12345_y + 5, food_width, food_height);
			//draw name
			ctx.fillStyle = 'cyan';
			ctx.textAlign = 'center';
			ctx.fillText(food[0], recipeBox1_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[3], recipeBox2_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[6], recipeBox3_x + box_width/2, recipeBox12345_y - 5, box_width);
			ctx.fillText(food[10], recipeBox4_x + box_width/2, recipeBox12345_y - 5, box_width);
			//draw quantity
			ctx.textAlign = 'center';
			ctx.fillText("1/" + foodNumber[0], recipeBox1_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[3], recipeBox2_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[6], recipeBox3_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
			ctx.fillText("1/" + foodNumber[10], recipeBox4_x + box_width/2, recipeBox12345_y + box_height + 20, box_width);
		} 
		//button feed
		if(x >= button01_x && x <= button01_x + button_width && y >= button01_y && y <= button01_y + button_height) {
			if (recipeCheck[0]) {
				if (foodNumber[0] >= 1 && foodNumber[1] >= 1 && foodNumber[4] >= 1 && foodNumber[5] >= 1 && hunger <= 50) {
					foodNumber[0]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[0] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[1]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[1] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[4]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[4] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[5]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[5] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					hunger += 50;
					if(happy<=98){happy += 2;}else{happy=100;}
					$("#shopCanvas").hide(500);
					score += 1500;
					$("#score").text("Score: " + score);
				}
			}
			if (recipeCheck[1]) {
				if (foodNumber[2] >= 1 && foodNumber[3] >= 1 && foodNumber[6] >= 1 && foodNumber[7] >= 1 && hunger <= 50) {
					foodNumber[2]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[2] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[3]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[3] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[6]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[6] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[7]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[7] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					hunger += 50;
					if(happy<=98){happy += 2;}else{happy=100;}
					$("#shopCanvas").hide(500);
					score += 1500;
					$("#score").text("Score: " + score);
				}
			}
			if (recipeCheck[2]) {
				if (foodNumber[0] >= 1 && foodNumber[2] >= 1 && foodNumber[8] >= 1 && foodNumber[9] >= 1 && hunger <= 50) {
					foodNumber[0]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[0] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[2]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[2] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[8]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[8] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[9]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[9] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					hunger += 50;
					if(happy<=98){happy += 2;}else{happy=100;}
					$("#shopCanvas").hide(500);
					score += 1500;
					$("#score").text("Score: " + score);
				}
			}
			if (recipeCheck[3]) {
				if (foodNumber[1] >= 1 && foodNumber[3] >= 1 && foodNumber[4] >= 1 && foodNumber[8] >= 1 && hunger <= 50) {
					foodNumber[1]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[1] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[3]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[3] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[4]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[4] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[8]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[8] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					hunger += 50;
					if(happy<=98){happy += 2;}else{happy=100;}
					$("#shopCanvas").hide(500);
					score += 1500;
					$("#score").text("Score: " + score);
				}
			}
			if (recipeCheck[4]) {
				if (foodNumber[0] >= 1 && foodNumber[3] >= 1 && foodNumber[6] >= 1 && foodNumber[10] >= 1 && hunger <= 50) {
					foodNumber[0]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[0] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[3]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[3] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[6]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[6] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					foodNumber[10]--;
					for (var i=0;i<15;i++) {
						if(storage[i] == food[10] && storageNumber[i] > 0){if(storageDay[i]=="Broken"){happy-=5;health-=5;};storageNumber[i]--;break;}
					}
					hunger += 50;
					if(happy<=96){happy += 4;}else{happy=100;}
					$("#shopCanvas").hide(500);
					score += 1500;
					$("#score").text("Score: " + score);
				}
			}
		}
    }
}

//status
document.getElementById("status").onclick=function() {
	if($("#shopCanvas").is(":hidden")){
		$("#shopCanvas").show(500); 
	}else{
		$("#shopCanvas").hide();
		$("#shopCanvas").show(500);
	}
	canvas.width = canvas.width;
	
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
	ctx.fillStyle = 'forestgreen';
	ctx.fillRect(bar01_x, bar01_y, bar_width, bar_height);
	ctx.fillRect(bar02_x, bar02_y, bar_width, bar_height);
	ctx.fillRect(bar03_x, bar03_y, bar_width, bar_height);
	ctx.fillStyle = 'cyan';
	ctx.textAlign = 'right';
	ctx.fillText("Health", bar01_x - 5, bar01_y + 25);
	ctx.fillText("Hunger", bar02_x - 5, bar02_y + 25);
	ctx.fillText("Happy", bar03_x - 5, bar03_y + 25);
	
	//draw status bar value
	ctx.fillStyle = 'greenyellow';
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

//sleep
document.getElementById("sleep").onclick=function() {
	if($("#shopCanvas").is(":visible")){
		$("#shopCanvas").hide();
	}
	canvas.width = canvas.width;
	for(var i=0;i<6;i++) {
		var rand = parseInt(Math.random() * 100);		//0-99
		var q = parseInt(Math.random() * 3 + 2);		//q:2-4(1 pet) (3 pets)
		var price = parseInt(Math.random() * 11 + 10);	//price: 10-20(Common) 20-40(Rare) 40-80(SR)
		
		if (rand<12) {shop[i] = foodImage1; shopPrice[i] = price * q; shopNumber[i] = q; shopItem[i] = food[0]; shopStoreDate[i] = foodStorageDate[0];}
		else if (rand<24) {shop[i] = foodImage2; shopPrice[i] = price * q; shopNumber[i] = q; shopItem[i] = food[1]; shopStoreDate[i] = foodStorageDate[1];}
		else if (rand<36) {shop[i] = foodImage3; shopPrice[i] = price * q; shopNumber[i] = q; shopItem[i] = food[2]; shopStoreDate[i] = foodStorageDate[2];}
		else if (rand<48) {shop[i] = foodImage4; shopPrice[i] = price * q; shopNumber[i] = q; shopItem[i] = food[3]; shopStoreDate[i] = foodStorageDate[3];}
		else if (rand<56) {shop[i] = foodImage5; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[4]; shopStoreDate[i] = foodStorageDate[4];}
		else if (rand<64) {shop[i] = foodImage6; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[5]; shopStoreDate[i] = foodStorageDate[5];}
		else if (rand<72) {shop[i] = foodImage7; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[6]; shopStoreDate[i] = foodStorageDate[6];}
		else if (rand<80) {shop[i] = foodImage8; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[7]; shopStoreDate[i] = foodStorageDate[7];}
		else if (rand<88) {shop[i] = foodImage9; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[8]; shopStoreDate[i] = foodStorageDate[8];}
		else if (rand<96) {shop[i] = foodImage10; shopPrice[i] = price * q * 2; shopNumber[i] = q; shopItem[i] = food[9]; shopStoreDate[i] = foodStorageDate[9];}
		else if (rand<100) {shop[i] = foodImage11; shopPrice[i] = price * q * 4; shopNumber[i] = q; shopItem[i] = food[10]; shopStoreDate[i] = foodStorageDate[10];}
	}
	
	for(var i=0;i<15; i++) {
		if(storageDay[i] >= 1) {storageDay[i]--;}
		else if(storageDay[i] == 0) {storageDay[i] = "Broken";}
	}
	
	day++;
	if (day<10) {$("#day").text("Day 0" + day);}
	else {$("#day").text("Day " + day);}
	
	creatCanvas("sleepCanvas", "0px", "0px", WINDOW_WIDTH+"px", WINDOW_HEIGHT+"px");
	width = 1;
	height = 1;
	
	var sleep_animation = setInterval(sleepAnimation, 20);
	
	$("#dailyQuiz").show(500);
	$("#quizQuestion").text(quiz[day-2][0]);
	$("#selection1").next("span").text(quiz[day-2][1]);
	$("#selection2").next("span").text(quiz[day-2][2]);
	$("#selection3").next("span").text(quiz[day-2][3]);
	$("#selection4").next("span").text(quiz[day-2][4]);
	document.getElementById("quizButton").onclick = function(){
		var obj = document.getElementsByTagName("input");
		for(var i=0; i<obj.length; i ++){
			if(obj[i].checked){
				if(i == quiz[day-2][5]){
					$("#dailyQuiz").hide(500);
					gold += 150;
					$("#gold").text("Gold: " + gold);
				} else {
					$("#quizQuestion").html(quiz[day-2][0]+'<br/>'+"Sorry, you are wrong. The correct answer is:"+'<br/>'+quiz[day-2][quiz[day-2][5]+1]);
					$("#selection").hide();
					$("#quizButton").text("Okey");
					document.getElementById("quizButton").onclick = function(){
						$("#selection").show();
						$("#dailyQuiz").hide(500);
						gold += 60;
						$("#gold").text("Gold: " + gold);
					}
				}
			}
		}
	}
	if(hunger == 100 && health != 100) {health += 5;hunger -= 50;}
	else if(hunger == 100 && health == 100) {hunger -= 50;}
	else if(hunger == 50 && health > 20) {health -= 20;hunger -= 50;}
	else if(hunger == 50 && health <= 20) {health = 0; hunger -=50; $("#day").text("GAME OVER");gameOver();}
	else if(hunger == 0 && health > 40) {health -= 40;happy-=2;}
	else if(hunger == 0 && health <= 40) {health = 0;happy-=2; $("#day").text("GAME OVER");gameOver();} 
	if	(day >=26) {gameOver();}
}

function sleepAnimation() {
	var canvas_sleep = document.getElementById('sleepCanvas');
	var ctx_sleep = canvas_sleep.getContext('2d');
	ctx_sleep.width = ctx_sleep.width;
	ctx_sleep.fillStyle = 'black';
	ctx_sleep.fillRect(0, 0, width, WINDOW_HEIGHT);
	ctx_sleep.fillRect(0, 0, WINDOW_WIDTH, height);
	ctx_sleep.fillRect(WINDOW_WIDTH - width, 0, width, WINDOW_HEIGHT);
	ctx_sleep.fillRect(0, WINDOW_HEIGHT - height, WINDOW_WIDTH, height);
	if (width < WINDOW_WIDTH/2 && height < WINDOW_HEIGHT/2) {width += WINDOW_WIDTH/200; height += WINDOW_HEIGHT/200;}
	else {deleteCanvas(); clearInterval(sleep_animation);}
}

function creatCanvas(new_canvas_id, new_canvas_x, new_canvas_y, new_canvas_width, new_canvas_height) {
	document.getElementById("canvas_layer").innerHTML = "<canvas id=\"" + new_canvas_id + "\" width=\"" + new_canvas_width + "\" height=\"" + new_canvas_height + "\"></canvas>";
	$("#" + new_canvas_id).css("position", "absolute");
	$("#" + new_canvas_id).css("left", new_canvas_x);
	$("#" + new_canvas_id).css("top", new_canvas_y);
	$("#" + new_canvas_id).css("width", "100%");
	$("#" + new_canvas_id).css("height", "100%");
}

function deleteCanvas() {
	document.getElementById("canvas_layer").innerHTML = "";
}

//affilated apps
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
ctxAD.font = '15px fantasy';
ctxAD.fillText ("Food Fall is a JavaScript", 235, 345);
ctxAD.fillText ("based game educating users", 235, 370);
ctxAD.fillText ("on the effects of food waste-", 235, 395);
ctxAD.fillText ("and to have fun too!", 235, 420);
canvasAD.onclick=function(e){
		e=e||event;
		var x=e.clientX-canvasAD.offsetLeft;
		var y=e.clientY-canvasAD.offsetTop;
						
		if(x >= 150 && x <= 220 && y >= 200 && y <= 270) {
			window.location.href="http://foodfall.ca";
		}
	}
$("#moreGame").hide();
$("#playMore").click(function(){
	$("#moreGame").toggle(1000);
});


//easter eggs
document.getElementById("petImage").onclick = function() {
	if (easterEgg01 == 1) {
		document.getElementById("petImage").src = "./img/pet02.png";
		pet_img.src = "./img/pet02.png";
		easterEgg01++;
	} 
	else if (easterEgg01 == 2) {
		document.getElementById("petImage").src = "./img/pet03.png";
		pet_img.src = "./img/pet03.png";
		easterEgg01++;
	}
	else if (easterEgg01 == 3) {
		document.getElementById("petImage").src = "./img/pet04.png";
		pet_img.src = "./img/pet04.png";
		easterEgg01++;
	} else {
		document.getElementById("petImage").src = "./img/pet01.png";
		pet_img.src = "./img/pet01.png";
		easterEgg01 = 1;
	}
}

//game over function
function gameOver() {
	var xx = WINDOW_WIDTH/100;
	var yy = WINDOW_HEIGHT/100;
	$("#dailyQuiz").hide();
	deleteCanvas();
	creatCanvas("gameOverCanvas", "0px", "0px", WINDOW_WIDTH+"px", WINDOW_HEIGHT+"px");
	
	var game_over = document.getElementById('gameOverCanvas');
	var ctx_end = game_over.getContext('2d');
	ctx_end.fillStyle='rgba(256, 0, 128, 1)';
	ctx_end.fillRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
	ctx_end.fillStyle='rgba(28, 28, 28, 0.9)';
	ctx_end.fillRect(xx*10, yy*10, xx*80, yy*80);
	ctx_end.drawImage(elf_img, xx*13,yy*13,258*2,383*2);
	ctx_end.font = '50px fantasy';
	ctx_end.textAlign = 'left';
	ctx_end.fillStyle='cyan';
	ctx_end.fillText("Oh dear! Your pet died!", xx*13+258*2+xx*3, yy*25);
	ctx_end.fillText("Your pet survived for "+(day-1)+" days.", xx*13+258*2+xx*3, yy*35);
	ctx_end.fillText("Your final score is "+score, xx*13+258*2+xx*3, yy*45);
	$("#playagain").show();
	$("#sharebutton").show();
	document.getElementById("playagain").onclick=function(){
		window.location.reload();
	}
}

//start page
