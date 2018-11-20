$(document).ready(function () {

	// add a zero to times below 10
	// from w3school
	function addZero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	// set up time getting function
	function getTime() {
		// get the date
		// storing variable: d
		var d = new Date();
		// get hours, minutes, and seconds
		var h = addZero(d.getHours()-12);
		var m = addZero(d.getMinutes());
		var s = addZero(d.getSeconds());


		// update the clock's text
		$('.clock').html(m+":"+s);

		var i = [s];

		// rotate clock based on the minute
		//         $('#clock').css('transform', 'rotate('+ s * 6 +'deg');

		// detect a specific time
		// temperal statement 
		
	}


	// call getTime every 1 second
	// ie, refresh rate 
	setInterval(function () {
		getTime();
		$('body').append('<div class="type"><div class="clock"></div></div>');
	}, 1000);

	



});
