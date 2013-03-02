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


window.onload = function(){
	
	//retrieving saved options

	var un = localStorage["username"];
	var pw = localStorage["password"];

	if (!un || !pw) {
		alert("Set Username and Password in Options Page");
		return;
	}

	url = "https://intranet.iitg.ernet.in/moodle/login/index.php";

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);

	xhr.onload = function(){
		var content;
		if( xhr.response.indexOf("IITG Online Course Management System") !== -1 ){
//			alert("Logged in successfully");

			var course1_url = localStorage["course1_url"];
			var	course2_url = localStorage["course2_url"];
//			var	course1_url = "https://intranet.iitg.ernet.in/moodle/course/view.php?id=149";
//			var course2_url = "";

			var xhobj = new XMLHttpRequest();

			if(localStorage["course2"]){
				xhobj.open("GET", course2_url, true);
				xhobj.onload = function(){
					if( xhobj.response.indexOf("<p class=\"message\">Nothing new since your last login</p>") == -1 ){
						console.log("Notification available");
						content = "Notification available. Visit this link for more info. "
					}else{
						console.log("No Notification available");
						content = "No Notification available. For older topics of this course. ";
					}
					
					var url = "https://intranet.iitg.ernet.in/moodle/mod/forum/view.php?f=165";
//						var link = document.createElement("a");
//						link.href = "https://intranet.iitg.ernet.in/moodle/mod/forum/view.php?f=165";
//						link.id = "ee657";
//						link.appendChild(document.createTextNode("ee 657"));
//						var para = document.createElement("p");
//						var newText = document.createTextNode(content);
//				        para.appendChild(newText);						
//				        para.appendChild(link);
//				        body.appendChild(para);
			        document.write(content+"<a href="+url+" id=\"ee657\">Course Website</a");
		        	var linkele = document.getElementById("ee657");
					linkele.onclick = function(){
						window.open(linkele);
					}
				}	
				xhobj.send();
			}
		}
	}
	var myForm = new FormData();
	myForm.append("username", un);
	myForm.append("password", pw); 
	xhr.send(myForm);

}


