$(document).ready(function() {
	/*
		Рабочий код
	*/
	var items = $('.items');
	var dropdown = $('.dropdown').innerWidth();
	items.width(dropdown);

	$('.dropdown input[type="text"]').attr({'readonly':'readonly'});
	$('div.dt-picker input[type="text"]').attr({'readonly':'readonly'});

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
		drawCalendar();
		$('.dt-conteiner[id="'+id+'"]').css('zIndex', 100).show();
	});
	
	$('.dt-calendar').on('click', 'td', function(e) {
		e.stopPropagation();
		$('.dt-conteiner').hide();
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
	var firstDay = new Date(firstDayStr);
	
	console.log(firstDayStr);
	console.log('Номер дня первого числа: '+firstDay.getDay());
	console.log('Номер дня сегодняшнего число: '+today.getDay());
	if (today.getMonth() == 1) {
		if (cYear % 4 == 0) {
			currentMonthDays = 29;
		} else {
			currentMonthDays = month[today.getMonth()][1];
		}
	}
	if (cYear % 4 == 0) {
		console.log('Высокостный');
	} else {
		console.log('Не высокостный');
	}
	var prevMonth = month[today.getMonth()-1][1];
	var currentMonth = month[today.getMonth()][1];
	console.log('К-ство дней в предыдущем месяце: '+prevMonth);
	console.log('К-ство дней в текущем месяце: '+currentMonth);
}