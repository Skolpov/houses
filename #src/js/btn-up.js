// Кнопка вверх


var scrolled;
var timer;

document.querySelector('.btn-up').onclick = function() {
	scrolled = window.pageYOffset;
	scrollToTop();
}

function scrollToTop() {
	if(scrolled > 0) {
		window.scrollTo(0, scrolled);
		scrolled = scrolled - 100;
		timer = setTimeout(scrollToTop, 20);
	}
	else {
		clearTimeout(timer);
		window.scrollTo(0, 0);
	}
};


// ==========