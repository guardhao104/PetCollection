
		
function test(){
document.write("hello");
};
	var banana = 0;
	var bread = 0;
	var steak = 0;
	var apple = 0;
	var yogurt = 0;
	var chicken = 0;
	
	
	var cost=0;
	var appleCost = 65;
	var money = 2000;

	function addApples() {
	apple++;
	cost += appleCost;
	document.getElementById("10").innerHTML = cost;
	
	};
	
	var chickenCost = 33;
	function addChicken() {
	chicken++;
	cost += chickenCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	var bananaCost = 16;
	
	function addBanana() {
	banana++;
	cost += bananaCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	var breadCost = 10;
	
	function addBread() {
	bread++;
	cost += breadCost;
	document.getElementById("10").innerHTML = cost;
	};

	var steakCost = 5;
	
	function addSteak() {
	steak++;
	cost += steakCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	var yogurtCost = 20;
	
	function addYogurt() {
	yogurt++;
	cost += yogurtCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	function removeAll() {
	cost=0;
	yogurt=0;
	steak =0;
	bread =0;
	banana=0;
	apple=0;
	chicken=0;
	document.getElementById("10").innerHTML = cost;
	};
	
	function attemptBuy() {
	if(cost>money) {
	alert("Were sorry you do not have enough money");
	cost=0;
	document.getElementById("10").innerHTML = cost;
	document.getElementById("11").innerHTML = money;
	} else {
	alert("Thank you for your purchase");
	money -= cost;
	cost=0;
	document.getElementById("10").innerHTML = cost;
	document.getElementById("11").innerHTML = money;
	if(apple == 1) {
			document.getElementById("slot1").src = "image/Apple.png";
			
			}
	else if(apple == 2) {
			document.getElementById("slot1").src = "image/Apple.png";
			document.getElementById("slot2").src = "image/Apple.png";
			
	}
	else if(apple == 3) {
			document.getElementById("slot1").src = "image/Apple.png";
			document.getElementById("slot2").src = "image/Apple.png";
			document.getElementById("slot3").src = "image/Apple.png";
	}
	}
	};
	
	function urMoney() {
		document.getElementById("10").innerHTML = cost;
		document.getElementById("11").innerHTML = money;
   	};
	
	function openStore() {
document.getElementById('sInventory').style.visibility = 'hidden';
	document.getElementById('store').style.visibility = 'visible';

     
};
	function openInventory() {
document.getElementById('store').style.visibility = 'hidden';
document.getElementById('sInventory').style.visibility = 'visible';
	};
		
		
	function addCart() {
		var d = 1;
	while(document.getElementById("slot"+d).src != "") {
		d++;
		}
		document.getElementById("slot"+d).src = "image/Apple.png";
		
	}
	
	
	function item() {
		
		
		
		
	}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		