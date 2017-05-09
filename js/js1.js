var food = ["R1", "R2", "R3", "R4", "SR1", "SR2", "SR3", "SR4", "SR5", "SR6", "SSR1", "SSR2", "SSR3"];
var recipe = ["R1+R2+SR1+SR2", "R1+R3+SR3+SR4", "R2+R4+SR5+SR6", "R3+R4+SR2+SR4", "R1+R4+SR1+SSR1"];
var day=1, money=2000, health=100, hunger=100, happy=60;
var shop = $("#shop"), storage = $("#storage"), feed = $("#feed"), status = $("#status"), sleep = $("#sleep");
var canvas = $("#canvas")


$("#shop").click(function() {
	$("#canvas").css('display', 'inline');
});


/*
$(document).ready(function() {   
	$("#sleep").click(function() {
		for(var i=0;i<6;i++) {
			var id1 = "shop" + (i+1);
			var id2 = "price" + (i+1);
			var rand = parseInt(Math.random() * 100);
			var q = parseInt(Math.random() * 3 + 2);
			var price = parseInt(Math.random() * 11 + 10);
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
		else if(hunger == 50) {health -= 10;hunger -= 50;}
		else if(hunger == 0) {health -= 40;}
		money += 200;
		day++;
		$("#day").text("DAY " + day);
		$("#money").text("Money: " + money);
		$("#health").text("Health " + health);
		$("#hunger").text("Hunger " + hunger);
		$("#happy").text("Happy " + happy);
	});
});
*/