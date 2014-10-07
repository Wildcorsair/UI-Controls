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
		$('.items[id="'+id+'"]').toggle();
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

}); //End of ready

function getElement() {
	var obj = $('.window-frame');
	return obj;
}

function onOpen() {
	$('<div class="item">Item1</div>').appendTo('.dropdown');
}