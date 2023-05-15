function displayText(buttonNum) {
	// Hide title and all buttons
	document.getElementById("blogtitle").style.display = "none";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "none";
	document.getElementById("button3").style.display = "none";
	document.getElementById("button4").style.display = "none";

	// Show the text
	var imageSrc = "";
	var title = "";
	var description = "";
	switch(buttonNum) {
		case 1:
			imageSrc = "../img/vienna.png";
			title = "Vienna";
			description = "This is the text for Button 1";
			break;
		case 2:
			imageSrc = "../img/cs.png";
			title = "Computer Science";
			description = "I'm currently doing my Bachelors degree in Computer Science. I've always been into Computers " +
			"but when I had to make the big decision to go to a HTL my teachers convinced me otherwise. Since they " +
			"saw me in a social job. I didn't get into the school for becoming a Kindergarden teacher and so my path" +
			"to achieve a CS job wasn't clear for a long time. But after a few detours I still managed to find the road I was" +
			"initially heading when I was about 14. ";
			break;
		case 3:
			imageSrc = "../img/pottery.jpg";
			title = "Pottery Painting";
			description = "This is the text for Button 3";
			break;
		case 4:
			imageSrc = "../img/bubbletea.png";
			title = "Bubble Tea Vienna";
			description = "This is the text for Button 4";
			break;
	}
	document.getElementById("image").src = imageSrc;
	document.getElementById("title").innerHTML = title;
	document.getElementById("description").innerHTML = description;
	document.getElementById("text").classList.remove("hidden");
}

function hideText() {
	// Hide the text and show title and buttons
	document.getElementById("text").classList.add("hidden");
	document.getElementById("blogtitle").style.display = "block";
	document.getElementById("button1").style.display = "block";
	document.getElementById("button2").style.display = "block";
	document.getElementById("button3").style.display = "block";
	document.getElementById("button4").style.display = "block";
}
