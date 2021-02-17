function palindrome(str) {


		var len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'Not a palindrome';
        }
    }  return "Palindrome";
}


var string = prompt('Enter a string: ');

var res=palindrome(string);

console.log(res);

function changetext()
{
	document.getElementById("div1").innerHTML=res ;
}

changetext();




