// Якори для меню


function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scroll(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);

}


// Это кнопки меню, которые скролят до нужного блока

var mainAnchor = document.querySelector('.main-anchor');
var block2Anchor = Array.prototype.slice.call(document.querySelectorAll('.aboutus-anchor'));
var block3Anchor = Array.prototype.slice.call(document.querySelectorAll('.projects-anchor'));
var block4Anchor = Array.prototype.slice.call(document.querySelectorAll('.skill-anchor'));
var block5Anchor = Array.prototype.slice.call(document.querySelectorAll('.review-anchor'));
var block6Anchor = Array.prototype.slice.call(document.querySelectorAll('.steps-anchor'));
var block7Anchor = Array.prototype.slice.call(document.querySelectorAll('.final-anchor'));

mainAnchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('#first-screen', 1000);
});

block2Anchor.forEach(function(i) {
	i.addEventListener('click', function() {
		// Тут вставляешь название блока куда скролить
		smoothScroll('#aboutus', 1000);
	});
})

block3Anchor.forEach(function(i) {
	i.addEventListener('click', function() {
		// Тут вставляешь название блока куда скролить
		smoothScroll('#projects', 1000);
	});
})


block4Anchor.forEach(function(i) {
	i.addEventListener('click', function() {
		// Тут вставляешь название блока куда скролить
		smoothScroll('#skill', 1000);
	});
});

block5Anchor.forEach(function(i) {
	i.addEventListener('click', function() {
		// Тут вставляешь название блока куда скролить
		smoothScroll('#review', 1000);
	});
});

block6Anchor.forEach(function(i) {
	i.addEventListener('click', function() {
		// Тут вставляешь название блока куда скролить
		smoothScroll('#steps', 1000);
	});
});

block7Anchor.forEach(function(i) {
	i.addEventListener('click', function() {
		// Тут вставляешь название блока куда скролить
		smoothScroll('#final', 1000);
	});
});


// // ==========
