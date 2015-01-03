jQuery(function($) {
	var quote = $('#quote').text();

	var boxes = [];

	for (var i=1; i<quote.length; i++) {
		var symbol = quote.charAt(i);

		if (symbol === ' ') {
			symbol = '&nbsp;';
		}

		if (symbol === '\n') {
			boxes.push($('<br>'));
		} else {
			var box = $('<span>', {
				'html': symbol,
				'data-code': quote.charCodeAt(i)
			});

			if (symbol !== '&nbsp;') {
				box.css('opacity', 0);
			}

			boxes.push(box);
		}
	}

	$('#canvas').html(boxes);

	var pressed = [];

	$(document).keypress(function(ev) {
		var code = ev.charCode || ev.keyCode;

		var wasPressed = pressed[code];
		pressed[code] = !wasPressed;

		var css = {
			opacity: wasPressed ? 0 : 1,
		};

		$('#canvas span[data-code="' + code + '"]').animate(css, 1000);
	});
});
