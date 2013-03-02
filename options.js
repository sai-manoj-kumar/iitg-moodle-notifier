/*
*  Javascript for Popup Page.
*
* This file is part of IITG Moodle Notifier
*
* IITG Moodle Notifier is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation; either version 3 of the License, or
* (at your option) any later version.
*
* IITG Moodle Notifier is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with IITG Moodle Notifier. If not, see <http://www.gnu.org/licenses/>.
*
* Copyright (C) 2013, Sai Manoj Kumar Yadlapati <ysaimanojkumar@gmail.com>, India.
*
*/


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

