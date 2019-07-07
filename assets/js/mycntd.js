var years, months, days, hours, minutes, seconds, timeout;
var speed = 1000;

seconds = document.getElementById('seconds');
minutes = document.getElementById('minutes');
hours = document.getElementById('hours');
days = document.getElementById('days');
months = document.getElementById('months');
years = document.getElementById('years');
timeout = false;

function recenterLabel() {
	var w = $($('.countdown-label')[0]).outerWidth();
	var imgW = $('.countdown-label img').outerWidth();
	var imgH = $('.countdown-label img').outerHeight();
	var lbs = $('.countdown-label');
	for (var i = 0; i < lbs.length; i++) {
		var left = $(lbs[i]).offset().left;
		var top =  $(lbs[i]).offset().top;
		$($('.countdown-label img')[i]).offset({left: left + 0.5*Math.abs(w - imgW)});
		var lbtopW = $($('.countdown-label-top')[i]).outerWidth();
		var lbbottomW = $($('.countdown-label-bottom')[i]).outerWidth();
		$($('.countdown-label-top')[i]).offset({left: left + 0.5*Math.abs(w - lbtopW)});
		$($('.countdown-label-bottom')[i]).offset({left: left + 0.5*Math.abs(w - lbbottomW), top: top + 0.35*imgH});
	}
}

$('.countdown-label img').load(function() {
	console.log(seconds);
	recenterLabel();
});


$(window).resize(function() {
	console.log(seconds);
	recenterLabel();
});


function automate() {
	if(timeout != false) {
		clearTimeout(timeout);
	}
	var units = ~countdown.ALL,
		max = 11,
		digits = 0;

	var yyyy = 2012,
		MM = 5,
		dd = 20,
		HH = 05,
		mm = 30,
		ss = 0,
		fff = 0;


	// var yyyy = 2013,
	// 	MM = 5,
	// 	dd = 16,
	// 	HH = 05,
	// 	mm = 0,
	// 	ss = 0,
	// 	fff = 0;

	// var yyyy = 2015,
	// 	MM = 4,
	// 	dd = 3,
	// 	HH = 22,
	// 	mm = 20,
	// 	ss = 0,
	// 	fff = 0;

	// var yyyy = 2017,
	// 	MM = 4,
	// 	dd = 12,
	// 	HH = 11,
	// 	mm = 53,
	// 	ss = 0,
	// 	fff = 0;
	
	// var yyyy = 2018,
	// 	MM = 4,
	// 	dd = 19,
	// 	HH = 14,
	// 	mm = 10,
	// 	ss = 0,
	// 	fff = 0;
	
	var start = new Date(yyyy, MM, dd, HH, mm, ss, fff);
	//var ts = countdown(start, null, units, max, digits);
	var ts = countdown(start);
	//console.log(ts);
	seconds.innerHTML = ts.seconds;
	minutes.innerHTML = ts.minutes;
	hours.innerHTML = ts.hours;
	days.innerHTML = ts.days;
	months.innerHTML = ts.months;
	years.innerHTML = ts.years;

	recenterLabel();
	timeout = setTimeout('automate()', speed);
}

console.log(seconds);
if (seconds) {
	automate();
}

/*
(function() {
	function byId(id) {
		return document.getElementById(id);
	}

	function formatTens(n) {
		// format integers to have at least two digits
		return (n < 10) ? '0'+n : ''+n;
	}

	// initialize units
	for (var key in countdown) {
		if (countdown.hasOwnProperty(key)) {
			var unit = byId('units-'+key.toLowerCase());
			if (unit) {
				unit.value = countdown[key];
				unit.checked = countdown[key] & countdown.DEFAULTS;
			}
		}
	}

	// Mayan Calendar: 1356088271111

	// https://groups.google.com/group/alt.hypertext/msg/06dad279804cb3ba?dmode=source
	var DEMO_MS = 681490580000,
		DEMO_PAST = 'The World Wide Web debuted',
		DEMO_FUTURE = 'The World Wide Web debuts';

	// adjust initial demo time for local timezone
	byId('hours').value -= new Date(DEMO_MS).getTimezoneOffset() / 60;

	function update() {
		var units = ~countdown.ALL,
			chx = byId('countdown-units').getElementsByTagName('input'),
			empty = byId('empty-label').value || '',
			max = +(byId('max-units').value),
			digits = +(byId('frac-digits').value);

		for (var i=0, count=chx.length; i<count; i++) {
			if (chx[i].checked) {
				units |= +(chx[i].value);
			}
		}

		var yyyy = +(byId('year').value),
			MM = +(byId('month').value)-1,
			dd = +(byId('date').value),
			HH = +(byId('hours').value),
			mm = +(byId('minutes').value),
			ss = +(byId('seconds').value),
			fff = +(byId('milliseconds').value);

		var start = new Date(yyyy, MM, dd, HH, mm, ss, fff),
			ts = countdown(start, null, units, max, digits);

		var counter = byId('counter'),
			timespan = byId('timespan'),
			msg = ts.toHTML('strong') || empty;

		if (start.getTime() === DEMO_MS) {
			msg = (ts.value > 0) ?
				DEMO_PAST+' '+msg+' ago!' :
				DEMO_FUTURE+' in '+msg+'!';
		}

		counter.innerHTML = msg;
		timespan.innerHTML = JSON.stringify(ts, null, '  ');

		// update timezone label
		var tz = start.getTimezoneOffset();
		if (tz) {
			var tzh = Math.floor(Math.abs(tz) / 60),
				tzm = (Math.abs(tz) % 60);
			byId('timezone').innerHTML = 'UTC'+((tz > 0) ? '-' : '+')+formatTens(tzh)+':'+formatTens(tzm);

		} else {
			byId('timezone').innerHTML = 'UTC';
		}

		requestAnimationFrame(update, timespan.parentNode);
	}
	update();
})();*/

