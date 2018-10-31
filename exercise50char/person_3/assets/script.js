let button3 = document.querySelector('#button-3')
let button4 = document.querySelector('#button-4')
let button5 = document.querySelector('#button-5')
let button6 = document.querySelector('#button-6')
let button7 = document.querySelector('#button-7')

button3.addEventListener('click', function () {
	this.classList.toggle('but3');
})

button4.addEventListener('click', function () {
	this.classList.toggle('gradient-background');
})

button5.addEventListener('click', function () {
	this.nextElementSibling.classList.toggle('circle');
})

button6.addEventListener('click', function () {
	var cars = new Array("Saab", "Volvo", "BMW");
	document.getElementById("#button6").innerHTML = cars[0];
})

button7.addEventListener('click', function () {
	window.location.replace("https://jfu103.github.io/Interactive2/");
})
