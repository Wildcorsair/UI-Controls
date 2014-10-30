$(document).ready(function() {
	/*
		Рабочий код
	*/
	var items = $('.items');
	var dropdown = $('.dropdown').innerWidth();
	items.width(dropdown);

	$('.dropdown input[type="text"]').attr({'readonly':'readonly'});
	$('div.dt-picker>input[type="text"]').attr({'readonly':'readonly'});

	$('.dropdown').click(function() {
		var visibleItems = $('.items:visible');
		if (visibleItems.length > 0) {
			visibleItems.hide();
			var ddId = this.id;
			var itemsId = visibleItems.attr('id');
			if (ddId !== itemsId) {
				var id = $(this).attr('id');
				$(this).css('zIndex', id);
				var itemsBlock = $('.items[id="'+id+'"]');
				itemsBlock.css('zIndex', 100).show();
			}
		} else {
			var id = $(this).attr('id');
			$(this).css('zIndex', id);
			var itemsBlock = $('.items[id="'+id+'"]');
			itemsBlock.css('zIndex', 100).show();
		}
	});
	
	$('.items').on('click', 'li', function(e) {
		/* Отменяем передачу события по цепочке вверх
		*  иначе список исчезнет и снова распахнется
		*  так как у dropdown-а сработает событие клика
		*/
		e.stopPropagation();
		$('.items:visible').hide();
		var id = $(this).parents('.dropdown').attr('id');
		var txt = $(this).text();
		var val = $(this).data('value');
		$('.dropdown[id="'+id+'"] input[type="text"]').val(txt);
		$('.dropdown[id="'+id+'"] input[type="hidden"]').val(val);
	});

	/*
	*  Обрабатываем клик вне елемента DropDownList
	*  для того чтобы свернуть раскрытые списки
	*  если они есть
	*/
	$(document).click(function(e) {
		var myEvent = e || window.e;
		var myTarget = myEvent.target || myEvent.srcElement;
		if ($(myTarget).next('.items').length ||
			$(myTarget).closest('.dropdown').length ||
			$(myTarget).closest('.dt-picker').length) {
			return;
		}
		$('.items').hide();
		myEvent.stopPropagation();
	});
	
	$('input[readonly]').focus(function(){
	    this.blur();
	});
	/*
		Конец рабочего кода
	*/

	$('div.dt-picker').click(function() {
		/*var myEvent = e || window.e;
		var myTarget = myEvent.target || myEvent.srcElement;
			if (myTarget.className == 'dt-picker') {
				console.log(myTarget.className);
			}*/
		var id = this.id;
		var dateValue = $(this).children('input').val();
		if (dateValue == '') {
			dateValue = null;
		}
		$(this).css('zIndex', id);
		$('.dt-conteiner[id="'+id+'"] table tbody').html(drawCalendar(dateValue));
		$('.dt-conteiner[id="'+id+'"]').css('zIndex', 100).show();
	});
	
	$('.dt-calendar').on('click', 'td[class="cm"]', function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
		var myTarget = myEvent.target || myEvent.srcElement;
		var dd = ($(myTarget).data('value'));
			dd = checkZero(dd);
		
		var mm = $('.month').data('value');
			mm = checkZero(mm);
		var yy = $('.year').data('value');

		var conteiner = $(this).parents('.dt-conteiner');
		var id = conteiner.attr('id');

		var timeBlock = conteiner.children('.time-block');
		var hour = timeBlock.children('input[name="hour"]').val();
		var min = timeBlock.children('input[name="min"]').val();
		var sec = timeBlock.children('input[name="sec"]').val();

			hour = validateHour(hour);
			min = validateMinSec(min);
			sec = validateMinSec(sec);

			//console.log(sec);
		var fullDate = dd+'-'+mm+'-'+yy+' '+hour+':'+min+':'+sec;
			$('div[id="'+id+'"].dt-picker>input').val(fullDate);
			conteiner.hide();
	});

	$('.dt-conteiner').on('click',
		                  'button[class="btn-tb ico-prev f-left"]',
		                  function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
		var monthBlock = $(this).next('.month');
		var yearBlock = $(this).parents('.dt-conteiner').children('.year');
		var monthID = monthBlock.data('value');
		var year = yearBlock.data('value');
		var	prevMonthID = monthID - 1;
			if (prevMonthID < 1) {
				prevMonthID = 12;
			}
		var	prevMonth = checkZero(prevMonthID);
			dateValue = '01-'+prevMonth+'-'+year;
			monthBlock.html(calendar.month[prevMonthID][0]);
			monthBlock.data('value', prevMonthID);
			$(this).parents('.dt-conteiner').children('table')
					.children('tbody').html(drawCalendar(dateValue));
	});

	$('.dt-conteiner').on('click',
		                  'button[class="btn-tb ico-next f-right"]',
		                  function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
		var monthBlock = $(this).prev('.month');
		var yearBlock = $(this).next('.year');
		var monthID = monthBlock.data('value');
		var year = yearBlock.data('value');
		var	nextMonthID = monthID + 1;
			if (nextMonthID > 12) {
				nextMonthID = 1;
			}	
		var	nextMonth = checkZero(nextMonthID);
			dateValue = '01-'+nextMonth+'-'+year;
			monthBlock.html(calendar.month[nextMonthID][0]);
			monthBlock.data('value', nextMonthID);
			$(this).parents('.dt-conteiner').children('table')
					.children('tbody').html(drawCalendar(dateValue));
	});

	/*$('.dt-conteiner').on('click',
	                      'button[class="btn-tb ico-down"]',
						  function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
			$('.yearList').show();
	});*/

	$('.dt-conteiner').on('click', this, function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
	});
	
	$('.time-block').on('click', this, function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
	});
}); //End of ready

function drawCalendar(dateValue) {
	if (dateValue == null) {
		var today = new Date();
		var mm = today.getMonth()+1;
	} else {
		var dd = dateValue.substr(0, 2);
			//dd = checkZero(dd);
		var mm = dateValue.substr(3, 2);
			//mm = checkZero(mm);
		var yy = dateValue.substr(6, 4);
		var today = new Date(yy, mm-1, dd);
		//var mon = today.getMonth();
	}

	mm = parseInt(mm, 10);
	var cYear = today.getFullYear();
	//var firstDayStr = cYear+'/'+mon+'/1';
	var monthDiv = $('.month');
	var yearDiv = $('.year');

	//monthDiv.html(calendar.month[today.getMonth()][0]);
	monthDiv.html(calendar.month[mm][0]);
	yearDiv.html(cYear);

	//monthDiv.data('value', today.getMonth()+1);
	monthDiv.data('value', mm);
	yearDiv.data('value', cYear);

	//var firstDay = new Date(firstDayStr);
	var firstDay = new Date(cYear, mm-1);
	var firstDayNum = firstDay.getDay();
	
	if (firstDayNum == 0) {
		firstDayNum = 7;
	}

	//var prevMonthDays = calendar.month[today.getMonth()-1][1];
	var prevMM = mm - 1;
	if (prevMM < 1) {
		prevMM = 12;
	}
	var prevMonthDays = calendar.month[prevMM][1];
	//var currentMonthDays = calendar.month[today.getMonth()][1];
	var currentMonthDays = calendar.month[mm][1];
	
	/*if (today.getMonth() == 1) {
		if (cYear % 4 == 0) {
			currentMonthDays = 29;
		}
	}
	if ((today.getMonth()-1) == 1) {
		if (cYear % 4 == 0) {
			prevMonthDays = 29;
		}
	}*/
	if (mm == 2) {
		if (cYear % 4 == 0) {
			currentMonthDays = 29;
		}
	}
	if ((mm-1) == 2) {
		if (cYear % 4 == 0) {
			prevMonthDays = 29;
		}
	}

	var prevMonthOffset = prevMonthDays - (firstDayNum-2);
	var res = '<tr>';
	var currentMonthDay = 1;
	var nextMonthDay = 1;

	for (var i = 1; i <= 42; i++) {
		if (prevMonthOffset <= prevMonthDays) {
			res += '<td class="prev-month">'+prevMonthOffset+'</td>';
			prevMonthOffset++;
		} else if (currentMonthDay <= currentMonthDays) {
			res += '<td class="cm" data-value="'+currentMonthDay+'">'+currentMonthDay+'</td>';
			currentMonthDay++;
		} else {
			res += '<td class="next-month">'+nextMonthDay+'</td>';
			nextMonthDay++;
		}
		if (i % 7 == 0) {
			res +='</tr>';
		}
		if (i % 7 == 0 && i != 42) {
			res += '<tr>';
		}
	}
	return res;
}

function checkZero(value) {
	if (value === '') {
		value = '00';
	}
	if (value != '00') {
		value = parseInt(value, 10);
		if (value < 10) {
			value = '0'+value;
		}
	}
	return value;
}

function validateHour(hour) {
	if (hour < 0 || hour > 23) {
		hour = '00';
	}
	hour = checkZero(hour);
	return hour;
}

function validateMinSec(value) {
	if (value < 0 || value > 59) {
		value = '00';
	}
	value = checkZero(value);
	return value;
}

/*var calendar = {}
calendar.month = {
					0: ['Январь', 31],
					1: ['Февраль', 28],
					2: ['Март', 31],
					3: ['Апрель', 30],
					4: ['Май', 31],
					5: ['Июнь', 30],
					6: ['Июль', 31],
					7: ['Август', 31],
					8: ['Сентябрь', 30],
					9: ['Октябрь', 31],
					10: ['Ноябрь', 30],
					11: ['Декабрь', 31]
}*/

var calendar = {}
calendar.month = {
					1: ['Январь', 31],
					2: ['Февраль', 28],
					3: ['Март', 31],
					4: ['Апрель', 30],
					5: ['Май', 31],
					6: ['Июнь', 30],
					7: ['Июль', 31],
					8: ['Август', 31],
					9: ['Сентябрь', 30],
				   10: ['Октябрь', 31],
				   11: ['Ноябрь', 30],
				   12: ['Декабрь', 31]
}

var t = {}
t.test = function() {
			console.log('Qu!Qu!');
}