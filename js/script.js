const bezier = document.getElementById("canvas");
const svg = document.getElementById("svgphoto");
const original = document.getElementById("original");
const bottom = document.getElementById("bottom");
var bezbutton = document.getElementById("bezbutton");
var svgbutton = document.getElementById("svgbutton");
var originalbutton = document.getElementById("origibutton");
var compare = document.getElementById("compare");
var closecompare = document.getElementById("close");




function closeHeader(){
	var header = document.getElementById("header");
	var arrowup = document.getElementById("arrow-up");
	var arrowdown = document.getElementById("arrow-down");
	var bottom = document.getElementById("bottom");
	bottom.style.opacity="0";
	bottom.style.transition="opacity 0.5s"
	header.style.transform="translateY(-110px)";
	header.style.transition="transform 0.5s"
	arrowup.style.opacity ="0";
	arrowup.style.transition = "opacity 0.5s";
	setTimeout(function(){ arrowup.style.display="none";
	arrowdown.style.display="inherit";
	arrowup.style.opacity = "1";
 	}, 500);
	
}
function openHeader(){
	var header = document.getElementById("header");
	var arrowup = document.getElementById("arrow-up");
	var arrowdown = document.getElementById("arrow-down");
	var bottom = document.getElementById("bottom");
	if(arrowdown.style.display==="inherit"){
		header.style.transform="translateY(0px)";
		header.style.transition="transform 0.5s"
		arrowdown.style.opacity ="0";
		arrowdown.style.transition = "opacity 0.5s";
		setTimeout(function(){ arrowup.style.display="inherit";
		arrowdown.style.display="none"; 
		arrowdown.style.opacity = "1";
		bottom.style.opacity="1";
		bottom.style.transition="opacity 0.5s"
		}, 500);
		
	}
}

function design(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	context.beginPath();
	context.moveTo(150, 60);
	context.bezierCurveTo(-160, 400, 110, 520, 890, 90);
	context.bezierCurveTo(890, 90, -50, 480, 150, 60);
	context.lineWidth = 4;
	context.fillStyle = "#32a852"
	context.fill()

	
	

	// line color
	context.strokeStyle = '#164a24';
	context.stroke();
	var svg = document.getElementById("svgphoto");
	var original = document.getElementById("original");
	svg.style.display="none";
	original.style.display="none";

	bezbutton.style.width = "17%";
	bezbutton.style.transitionProperty = "width, color";
	bezbutton.style.transitionDuration = "0.4s";
	bezbutton.style.backgroundColor = "#3bd465";
	bezbutton.style.color = "#164a24"

	compare.style.opacity = "1";
	compare.style.transition = "opacity 1s"
	
	svg.style.opacity = "0";
	original.style.opacity = "0";
}
document.addEventListener("DOMCOntentLoaded", function(event){
	document.getElementById("mybutton").click();
});


function showBezier(){

	bezier.style.display = "inherit";
	setTimeout(function(){ bezier.style.opacity = "1";
		}, 50);
	bezier.style.width = "900px";
	bezier.style.height = "450px";

	svg.style.display = "none";
	svg.style.opacity = "0";

	original.style.display = "none";
	original.style.opacity = "0";

	var bottom = document.getElementById("bottom");
	bottom.style.marginTop="8em"
	center.style.marginTop="8em";
	bottom.style.marginBottom="0em";

	bezbutton.style.width = "17%";
	bezbutton.style.transitionProperty = "width, color";
	bezbutton.style.transitionDuration = "0.4s";
	bezbutton.style.backgroundColor = "#3bd465";
	bezbutton.style.color = "#164a24"

	svgbutton.style.backgroundColor="#32a852";
	svgbutton.style.width = "15%";
	svgbutton.style.transitionProperty = "width,color";
	svgbutton.style.transitionDuration = "0.4s";
	svgbutton.style.color = "white";

	originalbutton.style.backgroundColor = "#32a852";
	originalbutton.style.width = "15%";
	originalbutton.style.transitionProperty = "width,color";
	originalbutton.style.transitionDuration = "0.4s";
	originalbutton.style.backgroundColor = "#32a852";
	originalbutton.style.color = "white"
	

	

	
}
function showSvg(){

	bezier.style.opacity = "0";
	bezier.style.display="none";

	svg.style.display="inherit";
	svg.style.transition = "opacity 1s";
	setTimeout(function(){ svg.style.opacity = "1";
		}, 50);

	original.style.display="none";
	original.style.opacity = "0";

	var bottom = document.getElementById("bottom");

	bottom.style.marginTop="8em"
	original.style.height="200px";
	original.style.width="500px";
	svg.style.height="450px";
	svg.style.width="900px";
	center.style.marginTop="8em";
	bottom.style.marginBottom="0em";

	bezbutton.style.backgroundColor="#32a852";
	bezbutton.style.width="15%";
	bezbutton.style.transitionProperty = "width,color";
	bezbutton.style.transitionDuration = "0.4s";
	bezbutton.style.backgroundColor = "#32a852";
	bezbutton.style.color = "white"
	

	svgbutton.style.backgroundColor="#3bd465";
	svgbutton.style.width="17%";
	svgbutton.style.transitionProperty = "width,color";
	svgbutton.style.transitionDuration = "0.4s";
	svgbutton.style.color = "#164a24"

	originalbutton.style.backgroundColor="#32a852";
	origibutton.style.width="15%";
	origibutton.style.transitionProperty = "width,color";
	origibutton.style.transitionDuration = "0.4s";
	origibutton.style.backgroundColor = "#32a852";
	origibutton.style.color = "white"

}
function showLogo(){

	bezier.style.display="none";
	bezier.style.opacity = "0";

	svg.style.display="none";
	svg.style.opacity = "0";
	

	original.style.display="inherit";
	original.style.transition = "opacity 1s";
	setTimeout(function(){ original.style.opacity = "1";
		}, 30);

	bottom.style.marginTop="11.3em"
	original.style.height="350px";
	original.style.width="900px";
	center.style.marginTop="8em";
	bottom.style.marginBottom="0em";

	bezbutton.style.backgroundColor="#32a852";
	bezbutton.style.width="15%";
	bezbutton.style.transitionProperty = "width, color";
	bezbutton.style.transitionDuration = "0.4s";
	bezbutton.style.color = "white"

	svgbutton.style.backgroundColor="#32a852";
	svgbutton.style.width="15%";
	svgbutton.style.transitionProperty = "width, color";
	svgbutton.style.transitionDuration = "0.4s";
	svgbutton.style.color = "white"

	originalbutton.style.backgroundColor="#3bd465";
	originalbutton.style.width="17%";
	originalbutton.style.transitionProperty = "width,color";
	originalbutton.style.transitionDuration = "0.4s";
	originalbutton.style.color = "#164a24"

	

}
function showAll(){

	bezier.style.display="inherit";
	bezier.style.height="250px";
	bezier.style.width="500px";
	bezier.style.opacity = "0";
	setTimeout(function(){ bezier.style.opacity = "1";
		}, 50);


	svg.style.display="inherit";
	svg.style.height="200px";
	svg.style.width="500px";
	svg.style.transition = "opacity 0.3s";
	setTimeout(function(){ svg.style.opacity = "1";
		}, 50);

	original.style.display="inherit";
	original.style.height="200px";
	original.style.width="500px";
	original.style.transition = "opacity 0.3s";
	setTimeout(function(){ original.style.opacity = "1";
		}, 30);

	
	
	bottom.style.marginTop="3em";
	bottom.style.marginBottom="2.5em";
	var center = document.getElementById("center");
	center.style.marginTop="2.5em";

	bezbutton.style.backgroundColor="#32a852";
	bezbutton.style.color = "white";
	bezbutton.style.width = "15%";
	
	svgbutton.style.backgroundColor="#32a852";
	svgbutton.style.color = "white";
	svgbutton.style.width = "15%";

	originalbutton.style.backgroundColor="#32a852";
	originalbutton.style.color = "white";
	originalbutton.style.width = "15%";

	compare.style.display = "none";
	closecompare.style.display = "inherit";
	

}
function closeAll(){
	showBezier();
	compare.style.display = "inherit";
	closecompare.style.display = "none";
}

