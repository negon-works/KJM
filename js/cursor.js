const cursorDot = document.querySelector("data-cursor-dot");
const cursorDot = document.querySelector("data-cursor-outline");

window.addEventListener("mousemove", function (e){
	
	const posX = e.clientX;
	const posY = e.clientY;
	
	cursorDot.style.left = '${posX}px';
	cursorDot.style.top = '${ posY}px';
	
	cursorOutline.style.left = '${posX}px';
	cursorOutline.style.top = '${ posY}px';
	
})
