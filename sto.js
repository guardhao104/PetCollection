
		
		
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/Noah
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
<<<<<<< HEAD
	};
		var day = 1;
	function nextDay() {
		day++;
		document.getElementById("12").innerHTML = day;
		};
	function changeStore() {
		yot = document.getElementById("store1").src;
		
		if(milkArray.includes(num) && document.getElementById("store2").src != milkimg) {
		document.getElementById("store1").src =milkimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(butterArray.includes(num) && document.getElementById("store2").src != butterimg) {
		document.getElementById("store1").src =butterimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(creamArray.includes(num) && document.getElementById("store2").src != creamimg) {
		document.getElementById("store1").src =creamimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(eggArray.includes(num) && document.getElementById("store2").src != eggimg) {
		document.getElementById("store1").src =eggimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(bananaArray.includes(num) && document.getElementById("store2").src != bananaimg) {
		document.getElementById("store1").src =bananaimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(appleArray.includes(num) && document.getElementById("store2").src != appleimg) {
		document.getElementById("store1").src =appleimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(strawberryArray.includes(num) && document.getElementById("store2").src != strawberryimg) {
		document.getElementById("store1").src =strawberryimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(onionArray.includes(num) && document.getElementById("store2").src != onionimg) {
		document.getElementById("store1").src =onionimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(garlicArray.includes(num) && document.getElementById("store2").src != garlicimg) {
		document.getElementById("store1").src =garlicimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(pepperArray.includes(num) && document.getElementById("store2").src != pepperimg) {
		document.getElementById("store1").src = pepperimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(chocolateArray.includes(num) && document.getElementById("store2").src != chocolateimg) {
		document.getElementById("store1").src =chocolateimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(saltArray.includes(num) && document.getElementById("store2").src != saltimg) {
		document.getElementById("store1").src =saltimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(flourArray.includes(num) && document.getElementById("store2").src != flourimg) {
		document.getElementById("store1").src =flourimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
	};
		function changeStore2() {
		if(milkArray.includes(num) && document.getElementById("store1").src != milkimg) {
		document.getElementById("store2").src =milkimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		if(butterArray.includes(num) && document.getElementById("store1").src != butterimg) {
		document.getElementById("store2").src =butterimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(creamArray.includes(num) && document.getElementById("store1").src != creamimg) {
		document.getElementById("store2").src =creamimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(eggArray.includes(num) && document.getElementById("store1").src != eggimg) {
		document.getElementById("store2").src =eggimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(bananaArray.includes(num) && document.getElementById("store1").src != bananaimg) {
		document.getElementById("store2").src =bananaimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(appleArray.includes(num) && document.getElementById("store1").src != appleimg) {
		document.getElementById("store2").src =appleimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(strawberryArray.includes(num) && document.getElementById("store1").src != strawberryimg) {
		document.getElementById("store2").src =strawberryimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(onionArray.includes(num) && document.getElementById("store1").src != onionimg) {
		document.getElementById("store2").src =onionimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(garlicArray.includes(num) && document.getElementById("store1").src != garlicimg) {
		document.getElementById("store2").src =garlicimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(pepperArray.includes(num) && document.getElementById("store1").src != pepperimg) {
		document.getElementById("store2").src = pepperimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(chocolateArray.includes(num) && document.getElementById("store1").src != chocolateimg) {
		document.getElementById("store2").src =chocolateimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(saltArray.includes(num) && document.getElementById("store1").src != saltimg) {
		document.getElementById("store2").src =saltimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
		
		if(flourArray.includes(num) && document.getElementById("store1").src != flourimg) {
		document.getElementById("store2").src =flourimg;
		} else {
		num = Math.floor((Math.random() * 100) + 1);		
		}
	
=======
>>>>>>> origin/Noah
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
	
	
<<<<<<< HEAD
		
		
		
		
		
		
		
		
=======
	
	m = 0;
	d = 0;
	yo = "slot";
	omg = yo+d;
	foo;
>>>>>>> origin/Noah
	
	
	bananaimg = "image/banana.png";
		pepperimg = "image/pepper.jpg";
		strawberryimg = "image/strawberry.png";
		milkimg = "image/milk2.png";
		onionimg = "image/onion.png";
		chocolateimg = "image/choco.png";
		garlicimg = "image/garlic2.jpg";
		eggimg = "image/egg.png";
		saltimg = "image/salt3.jpg";
		creamimg = "image/cream2.png";
		flourimg = "image/flour2.jpg";
		butterimg = "image/butter3.jpg";
		appleimg = "image/apple.png";
		milkArray = [1,2,3,4,5,6,7,8,9,10,11,13];
		butterArray = [14,15,16,17,18,19,20,21,22,23,24,25,26];
		creamArray = [27,28,29,30,31,32,33,34,35,36,37,38,39];
		eggArray = [40,41,42,43,44,45,46,47,48,49,50,51,52];
		bananaArray = [53,54,55,56,57,58,59];
		appleArray = [60,61,62,63,64,65,66];
		strawberryArray = [67,68,69,70,71,72,73];
		onionArray = [74,75,76,77,78,79,80];
		garlicArray = [81,82,83,84,85,86,87];
		pepperArray = [88,89,90,91,92,93,94];
		chocolateArray = [95,96];
		saltArray = [97,98];
		flourArray = [99,100];
		num = Math.floor((Math.random() * 100) + 1);
	m = 0;
	d = 0;
	yo = "slot";
	omg = yo+d;
	foo;
	yot;
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

