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
		$('.dt-conteiner').toggle();
	});
}); //End of ready