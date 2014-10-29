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
		var id = this.id;
		//drawCalendar();
		$(this).css('zIndex', id);
		$('.dt-conteiner[id="'+id+'"] table tbody').html(drawCalendar());
		$('.dt-conteiner[id="'+id+'"]').css('zIndex', 100).show();
		//t.test();
	});
	
	$('.dt-calendar').on('click', 'td[class="cm"]', function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
		var myTarget = myEvent.target || myEvent.srcElement;
		var dd = ($(myTarget).data('value'));
			dd = checkZero(dd);
		
		var mm = ($('.month').data('value'));
			mm = checkZero(mm);
		var yy = ($('.year').data('value'));

		var conteiner = $(this).parents('.dt-conteiner');
		var id = conteiner.attr('id');

		var timeBlock = conteiner.children('.time-block');

		/*var hour = timeBlock.children('input[name="hour"]').val();
		var min = timeBlock.children('input[name="min"]').val();
		var sec = timeBlock.children('input[name="sec"]').val();

		
		var fullDate = dd+'-'+mm+'-'+yy+' '+hour+':'+min+':'+sec;*/
		/*var time = [];
			time[0] = timeBlock.children('input[name="hour"]').val();
			time[1] = timeBlock.children('input[name="min"]').val();
			time[2] = timeBlock.children('input[name="sec"]').val();*/
		var hour = timeBlock.children('input[name="hour"]').val();
		var min = timeBlock.children('input[name="min"]').val();
		var sec = timeBlock.children('input[name="sec"]').val();

			hour = validateHour(hour);
			min = validateMinSec(min);
			sec = validateMinSec(sec);

			/*for (var i = 0; i < time.length; i++) {
				time[i] = checkZero(time[i]);
			}*/
		//var fullDate = dd+'-'+mm+'-'+yy+' '+time[0]+':'+time[1]+':'+time[2];
		var fullDate = dd+'-'+mm+'-'+yy+' '+hour+':'+min+':'+sec;
			$('div[id="'+id+'"].dt-picker>input').val(fullDate);
			conteiner.hide();
	});

	$('.dt-conteiner').on('click', 'button', function() {
		//console.log('Click prev button');
	});
}); //End of ready

function drawCalendar() {
	var month = {
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
	}
	var today = new Date();
	var mon = today.getMonth()+1;
	var cYear = today.getFullYear();
	var firstDayStr = cYear+'/'+mon+'/1';
	var monthDiv = $('.month');
	var yearDiv = $('.year');
	monthDiv.html(month[today.getMonth()][0])
	monthDiv.data('value', mon);
	yearDiv.html(cYear);
	yearDiv.data('value', cYear);

	var firstDay = new Date(firstDayStr);
	var firstDayNum = firstDay.getDay();
	
	if (firstDayNum == 0) {
		firstDayNum = 7;
	}

	var prevMonthDays = month[today.getMonth()-1][1];
	var currentMonthDays = month[today.getMonth()][1];
	
	if (today.getMonth() == 1) {
		if (cYear % 4 == 0) {
			currentMonthDays = 29;
		}
	}
	if ((today.getMonth()-1) == 1) {
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
	if (value != '' || value != '00') {
		value = parseInt(value, 10);
		console.log(value);
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

var t = {}
t.test = function() {
			console.log('Qu!Qu!');
}