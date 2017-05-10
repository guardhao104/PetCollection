
		
function test(){
document.write("hello");
};
	var banana = 0;
	var bread = 0;
	var steak = 0;
	var apple = 0;
	var yogurt = 0;
	var chicken = 0;
	d = 0;
	var yo = "slot";
	var omg;
	var items = banana+bread+steak+apple+yogurt+chicken;
	
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
	
	
	
	
	
	
	
	function item() {
		
		for(i=1; i<apple; i++){
			numtoString();
			}
		
		
	};
	
	
	m =0;
	
	
	function numtoString() {
	while(d<apple){
		d++;
		omg = yo+d;
	var hello = document.getElementById(omg);
	if(hello.getAttribute("src") == " ") {
		document.getElementById(omg).src = "image/Apple.png";
	}
}
	
	while(d<chicken){
		d++;
		omg = yo+d;
	var hello = document.getElementById(omg);
	if(hello.getAttribute("src") == " ") {
		document.getElementById(omg).src = "image/WaterMelonLarge.png"
	}
	}
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
	numtoString();
	cost=0;
	document.getElementById("10").innerHTML = cost;
	document.getElementById("11").innerHTML = money;
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
	
	
		
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

