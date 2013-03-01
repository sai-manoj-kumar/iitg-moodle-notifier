
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


