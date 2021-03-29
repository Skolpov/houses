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
	$(".burger-menu, .main-menu").on("click", "a", function (event) {
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



// const anchors = () => {
// 	function anchorsMove(trigger, target) {

// 		const target = document.querySelector(target);
// 		const trigger = document.querySelector(trigger);

// 		trigger.forEach(function(item) {
// 			item.addEventListener('click', openModal)
// 		});

// 		target.addEventListener('click', (e) => {
// 			if (e.target === modal) {
// 			}
// 		});

// 		function openModal() {
// 				modal.classList.add('modal--show');
// 				document.body.style.overflow = 'hidden';
// 				modal.classList.add('animate__animated', 'animate__fadeIn');
// 		}



// 	}

// 	anchorsMove('.phone__link', '.application__form', '.modal__close');



// };