function checkSI(p,t,r) {


		return (p*t*r)/100;
}


var p=prompt("Enter Principle");
var r=prompt("Enter Rate");
var t=prompt("Enter Time");

console.log(checkSI(p,t,r));