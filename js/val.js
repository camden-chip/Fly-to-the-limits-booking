var registrationForm = document.querySelector("#registration");



registrationForm.onsubmit = function(event) {
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");

	var nameInput = document.querySelector("#full-name");
 	var nameMessage = document.querySelector("#full-name-message");
 	
 	if( namePattern.test( nameInput.value ) ) {
 		// Name is valid
 		nameMessage.innerHTML = "";
 	} else {
 		// Name is invalid
 		nameMessage.innerHTML = "Name is invalid";
 	}
 	event.preventDefault();
 }