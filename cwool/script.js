let modimgs = [
	
	"/assets/01.jpg",
	"/assets/02.jpg",
	"/assets/03.jpg",
	"/assets/04.jpg",
	"/assets/05.jpg",
	"/assets/06.jpg",
	
];


let r = "0"+Math.floor(Math.random() * modimgs.length)
console.log(r)
let mod1 = document.querySelector("#mod1")

mod1.style.backgroundImage = `url(${[r]})`;
