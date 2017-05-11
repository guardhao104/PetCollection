
		
		
	var banana = 0;
	var bread = 0;
	var steak = 0;
	var apple = 0;
	var yogurt = 0;
	var chicken = 0;
	var cost=0;
	var appleCost = 65;
	var money = 2000;
	var hello;
	var items = banana+bread+steak+apple+yogurt+chicken;

	
	

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
		
	
	function numtoString() {
	m=d;
	while(d<apple+m){
	d++;
	omg = yo+d;
	hello = document.getElementById(omg);
	if(hello.getAttribute("src") == " ") {
		document.getElementById(omg).src = "image/Apple.png";
	}
	}
	m=d
	while(d<chicken+m){
	d++;
	omg = yo+d;
	hello = document.getElementById(omg);
	if(hello.getAttribute("src") == " ") {
		document.getElementById(omg).src = "image/coffee1.png";
	}
	}
	m=d
	while(d<bread+m){
	d++;
	omg = yo+d;
	hello = document.getElementById(omg);
	if(hello.getAttribute("src") == " ") {
		document.getElementById(omg).src = "image/WaterMelonLarge.png";
	}
	}
	m=d
	while(d<yogurt+m){
	d++;
	omg = yo+d;
	hello = document.getElementById(omg);
	if(hello.getAttribute("src") == " ") {
		document.getElementById(omg).src = "image/pancakes1.png";
	}
	}
	m=d
	while(d<steak+m){
	d++;
	omg = yo+d;
	hello = document.getElementById(omg);
	if(hello.getAttribute("src") == " ") {
		document.getElementById(omg).src = "image/honeybun1.png";
	}
	}
	m=d
	while(d<banana+m){
	d++;
	omg = yo+d;
	hello = document.getElementById(omg);
	if(hello.getAttribute("src") == " ") {
		document.getElementById(omg).src = "image/crab_meat.png";
	}
	}
	};
	
	

	function helloy() {
		document.write(m);
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
	yogurt=0;
	steak =0;
	bread =0;
	banana=0;
	apple=0;
	chicken=0;
	
	}
	};
	
	function urMoney() {
		document.getElementById("10").innerHTML = cost;
		document.getElementById("11").innerHTML = money;
		document.getElementById("12").innerHTML = day;
   };
	
	function openStore() {
	document.getElementById('sInventory').style.visibility = 'hidden';
	document.getElementById('store').style.visibility = 'visible';
	};
	
	function openInventory() {
	document.getElementById('store').style.visibility = 'hidden';
	document.getElementById('sInventory').style.visibility = 'visible';
	};
	
function allowDrop(ev) {
ev.preventDefault();
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
};
	
	function divtoimg() {
		var child1 = document.getElementById('slot1');
			child1.parentNode.removeChild(child1);
	};
		var day = 1;
	function nextDay() {
		day++;
		document.getElementById("12").innerHTML = day;
		};
	function changeStore() {
		"image/banana.png"
		"image/pepper.jpg"
		"image/strawberry.png"
		"image/milk2.png"
		"image/onion.png"
		"image/choco.png"
		"image/garlic2.jpg"
		"image/egg.png"
		"image/salt3.jpg"
		"image/cream2.png"
		"image/flour2.jpg"
		"image/butter3.jpg"
		"image/apple.png"
	}
	
	
	
	m = 0;
	d = 0;
	yo = "slot";
	omg = yo+d;
	foo;
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

