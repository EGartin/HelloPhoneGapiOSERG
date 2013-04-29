function sayHello(){
	var nameText = document.getElementById("nameTextField").value;
	var displayString = "Hello, " + nameText + "!";
	
	if(nameText.length <= 0){
		document.getElementById("nameLabel").innerHTML = "Please enter your name.";
		document.getElementById("nameTextField").style.background = "red";
		document.getElementById("nameTextField").style.color = "white";
		document.getElementById("helloButton").value = "Try Again.";
	}
	else{	
	document.getElementById("nameLabel").innerHTML = displayString;
	document.getElementById("nameTextField").style.background = "none";
	document.getElementById("helloButton").value = "Thank you.";
	}
	
	
}
