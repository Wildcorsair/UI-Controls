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
		$('.dt-conteiner[id="'+id+'"]').css('zIndex', 100).show();
		$('.dt-conteiner table tbody').html(drawCalendar());
		//t.test();
	});
	
	$('.dt-calendar').on('click', 'td[class="cm"]', function(e) {
		var myEvent = e || window.e;
			myEvent.stopPropagation();
		var myTarget = myEvent.target || myEvent.srcElement;
		var dd = ($(myTarget).data('value'));
		var mm = ($('.month').data('value'));
		var yy = ($('.year').data('value'));
		var fullDate = dd+'-'+mm+'-'+yy;
		var id = $(this).parents('.dt-conteiner').attr('id');
			console.log(id);
		$('div[id="'+id+'"].dt-picker>input').val(fullDate);
		$('.dt-conteiner').hide();
	});

	$('.dt-conteiner').on('click', 'button', function() {
		console.log('Click prev button');
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
	
	/*
	console.log('Номер дня первого числа: '+firstDayNum);
	console.log('Номер дня сегодняшнего числа: '+today.getDay());*/
	
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

	/*console.log('К-ство дней в предыдущем месяце: '+prevMonthDays);
	console.log('К-ство дней в текущем месяце: '+currentMonthDays);*/
	return res;
}

function getFebruaryDaysCount(year) {
	if (year % 4 == 0) {
		return 29;
	}
}

var t = {}
t.test = function() {
			console.log('Qu!Qu!');
}