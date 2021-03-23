// Якори для меню


var t;
function up() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, -150);
		t = setTimeout('up()', 20);
	} else clearTimeout(t);
	return false;
}

$(document).ready(function () {
	$(".burger-menu").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 600);
	});
});


// ==========
