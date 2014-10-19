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
	$('div.dt-picker').click(function() {
		$('.dt-conteiner').toggle();
	});
}); //End of ready