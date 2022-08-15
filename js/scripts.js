"use strict";
// alert("This is what I want to tell you");

// let con = confirm("Can we move on?");
// if (con == true) {
// 	alert("Here we go!");

// } else {
// 	alert("Thank You for your time!");

// }

// let country = prompt("What is country?");







// function display (num) {
// 	// let num = parseInt(prompt("Input a number: "));
// 	// console.log(num);

// 	if (num + 2 >= 10) {
// 		console.log("Greater than or equal to 10");
// 	} else if (num + 2 >= 8) {
// 		console.log("Greater than or equal to 8");
// 	} else {
// 		console.log("Small number");
// 		// display();
// 	}

// }






// let disp = () => {
// 	//
// }






// 	console.log(numb);
// let count = 0;
// let numb = 1;

// while(count < 10){
// 	count += 1;
// 	numb += 1;
// }




// let defin = Array("june", "april", "july");
// console.log(defin);


// let foods = ["Agbado", "Moi Moi", 54, 32];
// console.log(foods);
// foods.push("Indomie");
// console.log(foods);
// foods[1] = "Akara";
// console.log(foods);
// foods[5] = "Ogi";
// console.log(foods);
// foods[foods.length] = "Egusi";
// console.log(foods);





// for (let i = 0; i < foods.length; i++) {
// 	// console.log(foods[i]);

// 	if (typeof(foods[i]) == "number") {
// 		console.log(foods[i]);
// 	}
// }





// let name1 = "Arinze";
// console.log("My name is " + name1);
// console.log(`My name is ${name1}`);








/**
 * =================================================================
 * 					ELEMENTS SELECTIONS AND OBJECTS
 * =================================================================
 * */

 let idselect = document.getElementById("idselect");
 let heading = document.getElementById("heading");
 // console.log(idselect.innerHTML);
 // idselect.innerHTML = "This is the new ID element inserted by JS";

 // let newInsert = prompt("Put a new heading for the page:");
 // heading.innerHTML = newInsert;



 let colors = document.getElementsByClassName("color");
 // console.log(colors[0]);
 // colors[0].innerHTML = "Black";
 // console.log(colors);




 let h1 = document.querySelector("h1");
 // console.log(h1);




// let humanBeing = {
// 	firstname: "Kunle",
// 	lastname: "Funke",
// 	height: {
// 		unit: "feets",
// 		value: 5.6
// 	},
// 	age: 19,
// 	shout: (shout) => {
// 		alert(`I am shouting: ${shout}!!!`);
// 	}
// }

// console.log(humanBeing.height.unit);


let user = new humanBeing;
console.log(user);

let users = [
	{
		firstname: "Osaze",
		lastname: "Osas",
		age: 54,
		financialStatus: "Average",
		shout: (shout) => {
			alert(`I am shouting: ${shout}!!!`);
		}
	},
	{
		firstname: "Uchenna",
		lastname: "Chukwudi",
		age: 24,
		financialStatus: "Rich",
		shout: (shout) => {
			alert(`I am shouting: ${shout}!!!`);
		}
	}
]

console.log(users);

users[users.length] = {
	firstname: "Segun",
	lastname: "Ayo",
	age: 21,
	financialStatus: "Wealthy"
};
console.log(users);

users[users.length - 1].firstname = "Olu";
console.log(users[0].shout("I am a God"));