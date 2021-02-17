function circleArea(radius)
{
    return Math.PI * radius * radius;
}

var radius=prompt("Enter radius");

var res=circleArea(radius).toFixed(2)

console.log(res);

function changetext()
{
	document.getElementById("div1").innerHTML=res ;
}

changetext();

