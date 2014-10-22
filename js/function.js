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
		$('.items:visible').hide();
		var id = $(this).attr('id');
		$(this).css('zIndex', id);
		var itemsBlock = $('.items[id="'+id+'"]');
		//itemsBlock.css('zIndex', 100).toggle();
		itemsBlock.css('zIndex', 100).show();
	});
	
	/*$('li').click(function() {
		$('.items').hide();
		var id = $(this).parents('.dropdown').attr('id');
		var txt = $(this).text();
		var val = $(this).data('value');
		$('.dropdown[id="'+id+'"] input[type="text"]').val(txt);
		$('.dropdown[id="'+id+'"] input[type="hidden"]').val(val);
	});*/
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
	$('.items').on('click', 'li', function(e) {
		e.stopPropagation();
		$('.items:visible').hide();
		var id = $(this).parents('.dropdown').attr('id');
		var txt = $(this).text();
		var val = $(this).data('value');
		$('.dropdown[id="'+id+'"] input[type="text"]').val(txt);
		$('.dropdown[id="'+id+'"] input[type="hidden"]').val(val);
	});

	$(window).click(function(e) {
		var myEvent = e || window.e;
		var myEvent2 = myEvent.target || myEvent.srcElement;
		console.log(myEvent2.tagName);
		if (myEvent2.tagName == 'INPUT' && myEvent2.className == 'ddValue') {
			var id = $(myEvent2).closest('.dropdown').attr('id');
			console.log($(myEvent2).closest('.dropdown').attr('id'));
		}
		if (myEvent2.tagName == 'DIV' && myEvent2.className == 'dropdown') {
			var id = $(myEvent2).attr('id');
			//console.log($(myEvent2).attr('id'));
			console.log(id);
		}
		var itemsId = $('.items:visible').attr('id');
		console.log('Items ID is: '+itemsId);
		/*alert(myEvent2.className);
		alert(myEvent2.tagName);
		alert(myEvent2.id);
		alert($(myEvent2).closest('.dropdown').id);*/
		/*if ($(even.target).closest('.items').length ||
			$(even.target).closest('.dropdown').length) {
			//console.log('te');
			return;
		}*/
		//var cn = myEvent2.className();
		console.log($(myEvent2).next('.items').length);
		if ($(myEvent2).next('.items').length ||
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