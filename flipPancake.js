// I hate javascript who invented this shit
const pancake = document.getElementById('pancake');
const flipButton = document.getElementById('flipBtn');

let rotation = 0;

if (flipButton) {
	flipButton.onclick = () => {
		rotation += 180;
		pancake.style.transform = `rotateY(${rotation}deg)`;
	};
}