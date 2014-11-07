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
		/* 
		*  Отменяем передачу события по цепочке вверх
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
		$('.dt-conteiner').hide();
		myEvent.stopPropagation();
	});
	
	$('input[readonly]').focus(function(){
	    this.blur();
	});

	/*
	*	Описание функций DateTimePicker-а
	*	
	*	Функция раскрытия календаря
	*/
	$('div.dt-picker').click(function() {
		var visibleContainer = $('.dt-conteiner:visible');
		if (visibleContainer.length > 0) {
			visibleContainer.hide();
			var thisId = this.id;
			var conteinerId = visibleContainer.attr('id');
			if (thisId !== conteinerId) {
				var dateValue = $(this).children('input').val();
				if (dateValue == '') {
					dateValue = null;
				}
				$(this).css('zIndex', thisId);
				$('.dt-conteiner[id="'+thisId+'"] table[class="dt-calendar"] tbody').html(drawCalendar(dateValue));
				$('.dt-conteiner[id="'+thisId+'"]').css('zIndex', 100).show();
			}
		} else {
			var id = this.id;
			var dateValue = $(this).children('input').val();
			if (dateValue == '') {
				dateValue = null;
			}
			$(this).css('zIndex', id);
			$('.dt-conteiner[id="'+id+'"] table[class="dt-calendar"] tbody').html(drawCalendar(dateValue));
			$('.dt-conteiner[id="'+id+'"]').css('zIndex', 100).show();
		}
	});
	
	/*
	*	Функция выбора даты в календаре
	*/
	$('.dt-calendar').on('click', 'td[class="cm"]', function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
		var myTarget = myEvent.target || myEvent.srcElement;
		var dd = ($(myTarget).data('value'));
			dd = checkZero(dd);

		var monthYear = $('.monthYear');
		var mm = monthYear.data('month');
			mm = checkZero(mm);
		var yy = monthYear.data('year');

		var conteiner = $(this).parents('.dt-conteiner');
		var id = conteiner.attr('id');

		var timeBlock = conteiner.children('.time-block');
		var hour = timeBlock.find('input[name="hour"]').val();
		var min = timeBlock.find('input[name="min"]').val();
		var sec = timeBlock.find('input[name="sec"]').val();

			hour = validateHour(hour);
			min = validateMinSec(min);
			sec = validateMinSec(sec);

		var fullDate = dd+'-'+mm+'-'+yy+' '+hour+':'+min+':'+sec;
			$('div[id="'+id+'"].dt-picker>input').val(fullDate);
			conteiner.hide();
	});

	/*
	*	Функция перелистывания месяца (на предыдущий)
	*/
	$('.dt-conteiner').on('click',
		                  'button[class="btn-tb ico-prev f-left"]',
		                  function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
		var monthBlock = $(this).next('.monthYear');
		var monthID = monthBlock.data('month');
		var year = monthBlock.data('year');
		var	prevMonthID = monthID - 1;
			if (prevMonthID < 1) {
				prevMonthID = 12;
				year = year - 1;
			}
		var	prevMonth = checkZero(prevMonthID);
			dateValue = '01-'+prevMonth+'-'+year;
			monthBlock.html(calendar.month[prevMonthID][0]);
			monthBlock.data('month', prevMonthID);
			$(this).parents('.dt-conteiner').children('table')
					.children('tbody').html(drawCalendar(dateValue));
	});

	/*
	*	Функция перелистывания месяца (на следующий)
	*/
	$('.dt-conteiner').on('click',
		                  'button[class="btn-tb ico-next f-right"]',
		                  function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
		var monthBlock = $(this).prev('.monthYear');
		var monthID = monthBlock.data('month');
		var year = monthBlock.data('year');
		var	nextMonthID = monthID + 1;
			if (nextMonthID > 12) {
				nextMonthID = 1;
				year = year + 1;
			}	
		var	nextMonth = checkZero(nextMonthID);
			dateValue = '01-'+nextMonth+'-'+year;
			monthBlock.html(calendar.month[nextMonthID][0]);
			monthBlock.data('month', nextMonthID);
			$(this).parents('.dt-conteiner').children('table')
					.children('tbody').html(drawCalendar(dateValue));
	});

	$('.dt-conteiner').on('click', this, function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
	});
	
	$('.time-block').on('click', this, function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
	});

	/*
	*	Конец рабочего кода
	*/
}); //End of ready

/*
*	Описание функций
*	
*	Функция отрисовки календаря
*/
function drawCalendar(dateValue) {
	var hh = '00';
	var min = '00';
	var sec = '00';
	
	if (dateValue == null) {
		var today = new Date();
		var mm = today.getMonth()+1;
	} else {
		var dd = dateValue.substr(0, 2);
		var mm = dateValue.substr(3, 2);
		var yy = dateValue.substr(6, 4);
			hh = dateValue.substr(11, 2);
			min = dateValue.substr(14, 2);
			sec = dateValue.substr(17, 2);
		var today = new Date(yy, mm-1, dd);
	}

	mm = parseInt(mm, 10);
	var cYear = today.getFullYear();
	var monthDiv = $('.monthYear');
	monthDiv.html(calendar.month[mm][0] + " " + cYear);

	monthDiv.data('month', mm);
	monthDiv.data('year', cYear);
	
	if ((hh != '') && (min != '') && (sec !='')) {
		var timeBlock = $('.time-block');
		timeBlock.find('input[name="hour"]').val(hh);
		timeBlock.find('input[name="min"]').val(min);
		timeBlock.find('input[name="sec"]').val(sec);
	}

	var firstDay = new Date(cYear, mm-1);
	var firstDayNum = firstDay.getDay();
	
	if (firstDayNum == 0) {
		firstDayNum = 7;
	}

	var prevMM = mm - 1;
	if (prevMM < 1) {
		prevMM = 12;
	}
	var prevMonthDays = calendar.month[prevMM][1];
	var currentMonthDays = calendar.month[mm][1];

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
/*
*	Конец описания функций
*/