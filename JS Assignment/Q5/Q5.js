employee1={

	name:"suraj",
	salary:8000,
	dob: new Date(1997,12,15)
}



employee2={

	name:"shayam",
	salary:900,
	dob: new Date(1995,8,21)
}



employee3={

	name:"rohit",
	salary:800,
	dob: new Date(1976,9,25)
}



employee4={

	name:"ajay",
	salary:3000,
	dob: new Date(1990,3,5)
}


employee5={

	name:"jai",
	salary:5000,
	dob: new Date(2000,12,3)
}



employee6={

	name:"raj",
	salary:10000,
	dob: new Date(2003,2,1)
}


employee7={

	name:"aman",
	salary:400,
	dob: new Date(1994,1,18)
}



var arrEmp=[employee7,employee6,employee5,employee4,employee3,employee2,employee1];



//5.1
// 5.1 
for(var i=0;i<arrEmp.length;i++)
{
  
  if(arrEmp[i].salary>5000)
  {
    console.log(arrEmp[i]);
  }
}

document.getElementById("div1").innerHTML=res ;

//5.2
var groupAge = {};

for(var emp of arrEmp) {
  if(!groupAge[emp.dob]) {
    groupAge[emp.dob] = [];
  }
  groupAge[emp.dob].push(emp);
}

console.log(groupAge);


//5.3
for(var i=0;i<arrEmp.length;i++)
{
	if(arrEmp[i].salary<1000 && arrEmp[i].dob.getFullYear()<2000){

		arrEmp[i].salary=(arrEmp[i].salary*5);
		console.log(arrEmp[i]);

	}
}
