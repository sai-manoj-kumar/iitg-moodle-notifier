// Saves options to localStorage.

var username = document.getElementById("username");
var password = document.getElementById("password");

var course1 = document.getElementById("course1");
var course2 = document.getElementById("course2");

var save_options = function() {
//console.log("Saving options");

	localStorage["username"] = username.value;
	localStorage["password"] = password.value;

	localStorage["course1"] = course1.checked;
	localStorage["course2"] = course2.checked;
	localStorage["course1_url"] = "https://intranet.iitg.ernet.in/moodle/course/view.php?id=125";
	localStorage["course2_url"] = "https://intranet.iitg.ernet.in/moodle/course/view.php?id=149";
	
}

window.onload = function(){
	var button = document.getElementById("save");
	button.onclick = save_options;

	username = document.getElementById("username");
	password = document.getElementById("password");

	course1 = document.getElementById("course1");
	course2 = document.getElementById("course2");

	
	username.value = localStorage["username"]||"";
	password.value = localStorage["password"]||"";
	
//	alert( localStorage["course1"]||false );
	course1.checked = localStorage["course1"] === "true";
	course2.checked = localStorage["course2"] === "true";
//	course1_url.value = localStorage["course1_url"];
//	course2_url.value = localStorage["course2_url"];
	
}

