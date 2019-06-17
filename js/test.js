// window.onload = prepareLinks;
// function prepareLinks () {
// 	var links = document.getElementsByTagName('a');
// 	for (var i=0;i<links.length;i++) {
// 		if (links[i].getAttribute('class') === 'popup') {
// 			links[i].onclick = function  () {
// 				popUp(this.getAttribute('href'));
// 				return false;
// 			}
// 		}
// 	}
// }
function moveMessage() {
	var elem = document.getElementById('message');
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos === 200 && ypos === 100) {
		return true;
	}
	if (xpos < 200){
		xpos++;
	}else if (xpos > 200) {
		xpos--;
	}
	if (ypos < 100) {
		ypos++;
	}else if (ypos > 100) {
		ypos--;
	}
	elem.style.left = xpos + 'px';
	elem.style.top = ypos +'px';
	movement = setTimeout('moveMessage()',10);
}

function positionMessage() {
	var elem = document.getElementById('message');
	elem.style.position = 'absolute';
	elem.style.left = '50px';
	elem.style.top = '100px';
	moveElement('message',200,100,10)
}

window.onload = positionMessage;

function moveElement(elementID,final_x,final_y,interval) {
	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos === final_x && ypos === final_y) {
		return true;
	}
	if (xpos < final_x){
		xpos++;
	}else if (xpos > final_x) {
		xpos--;
	}
	if (ypos < final_y) {
		ypos++;
	}else if (ypos > final_y) {
		ypos--;
	}
	elem.style.left = xpos + 'px';
	elem.style.top = ypos +'px';
	var repeat = 'moveElement("'+elementID+'",'+final_x+','+final_y+','+interval+')'
	movement = setTimeout(repeat,interval);
}