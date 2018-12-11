let modimgs = [
	
	"/assets/00.png",
	"/assets/01.png",
	"/assets/02.png",
	"/assets/03.png",
	"/assets/04.png",
	"/assets/05.png",
	"/assets/06.png",
	
];


let r = "0"+Math.floor(Math.random() * modimgs.length);
let r2 = "0"+Math.floor(Math.random() * modimgs.length);
let r3 = "0"+Math.floor(Math.random() * modimgs.length);
let r4 = "0"+Math.floor(Math.random() * modimgs.length);
let r5 = "0"+Math.floor(Math.random() * modimgs.length);
let r6 = "0"+Math.floor(Math.random() * modimgs.length);


console.log(r);
//let mod1 = document.getElementById("mod1");



document.getElementById('mod1').style.backgroundImage = 'url("/cwool/assets/'+r+'.png")';

document.getElementById('mod2').style.backgroundImage = 'url("/cwool/assets/'+r2+'.png")';

document.getElementById('mod3').style.backgroundImage = 'url("/cwool/assets/'+r3+'.png")';

document.getElementById('mod4').style.backgroundImage = 'url("/cwool/assets/'+r4+'.png")';

document.getElementById('mod5').style.backgroundImage = 'url("/cwool/assets/'+r5+'.png")';

document.getElementById('mod6').style.backgroundImage = 'url("/cwool/assets/'+r6+'.png")';

//$('#mod1').css('backgroundImage', [r]+'.jpg'); 

//ADD THE FILE PATH CORRECTLY
//FIX THE 
