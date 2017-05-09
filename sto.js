
		
function test(){
document.write("hello");
};
var cost=0;
	var appleCost = 65;
	var money = 2000;

	function addApples() {
	cost += appleCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	var chickenCost = 33;
	
	function addChicken() {
	cost += chickenCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	var bananaCost = 16;
	
	function addBanana() {
	cost += bananaCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	var breadCost = 10;
	
	function addBread() {
	cost += breadCost;
	document.getElementById("10").innerHTML = cost;
	};

	var steakCost = 5;
	
	function addSteak() {
	cost += steakCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	var yogurtCost = 20;
	
	function addYogurt() {
	cost += yogurtCost;
	document.getElementById("10").innerHTML = cost;
	};
	
	function removeAll() {
	cost=0;
	document.getElementById("10").innerHTML = cost;
	};
	
	function attemptBuy() {
	if(cost>money) {
	alert("Were sorry you do not have enough money");
	cost=0;
	document.getElementById("10").innerHTML = cost;
	document.getElementById("11").innerHTML = money;
	}
	else {
	alert("Thank you for your purchase");
	money -= cost;
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
		