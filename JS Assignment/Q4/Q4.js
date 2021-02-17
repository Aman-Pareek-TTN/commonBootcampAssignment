const person = {

	id: 101,
	fName: "jay",
	lName: 'peters',

	address:{

		hNo: 330,
		street:'VII street',
		city:'London'
	}

}

console.log(person);

document.getElementById("div1").innerHTML="Person: " + person.id + " " + person.fname + " " + person.lName + " "+ person.address.hNo + " " + person.address.street + " " + person.address.city;



const copiedPerson = JSON.parse(JSON.stringify(person));

document.getElementById("div2").innerHTML="Copied Person: " +  copiedPerson.id + " " +  copiedPerson.fname  + " " +  copiedPerson.lName + " " +  copiedPerson.address.hNo + " " +  copiedPerson.address.street + " " +  copiedPerson.address.city;


console.log(copiedPerson);

