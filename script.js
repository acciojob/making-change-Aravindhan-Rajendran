const makeChange = (c) => {
  // your name here
	let quarters=Math.floor(c/25);
	c-=quarters*25;
	let dimes = Math.floor(c / 10);
  c -= dimes * 10;
	let nickels = Math.floor(c / 5);
  c -= nickels * 5;
	let pennies = c; 
	let change={
		"q";quarters,
		"d":dimes,
		"n":nickels,
		"p":pennies	
	};
	return change;
};
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
