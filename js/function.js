$(document).ready(function() {
	/*
		Рабочий код
	*/
	var items = $('.items');
	var dropdown = $('.dropdown').innerWidth();
	items.width(dropdown);

	$('.dropdown input[type="text"]').attr({'readonly':'readonly'});

	$('.dropdown').click(function() {
		var id = $(this).attr('id');
		$(this).css('zIndex', id);
		var itemsBlock = $('.items[id="'+id+'"]');
		itemsBlock.css('zIndex', 100).toggle();
		//itemsBlock.css('zIndex', 100).show();
	});
	
	$('li').click(function() {
		var id = $(this).parents('.dropdown').attr('id');
		var txt = $(this).text();
		var val = $(this).data('value');
		$('.dropdown[id="'+id+'"] input[type="text"]').val(txt);
		$('.dropdown[id="'+id+'"] input[type="hidden"]').val(val);
	});
	/*
		Конец рабочего кода
	*/
	/*$(document).click(function(event) {
		if ($(event.target).closest('.items').length ||
			$(event.target).closest('.dropdown').length) {
			return;
		}
		$('.items').hide();
		event.stopPropagation();
	});*/
	$(window).click(function(event) {
		var myEvent = event || window.event;
		var myEvent2 = myEvent.target || myEvent.srcElement;
		console.log($(myEvent));
		/*if ($(even.target).closest('.items').length ||
			$(even.target).closest('.dropdown').length) {
			//console.log('te');
			return;
		}*/
		if ($(myEvent2).closest('.items').length ||
			$(myEvent2).closest('.dropdown').length) {
			return;
		}
		$('.items').hide();
		myEvent.stopPropagation();
	});

	$('div.dt-picker').click(function() {
		$('.dt-conteiner').toggle();
	});
}); //End of ready