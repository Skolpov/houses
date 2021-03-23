// Шапка при скроле


window.onscroll = function() {myFunction()};

var header = document.querySelector(".header"); 
var headerWrap = document.querySelector('.header-wrap');
var sticky = header.offsetTop; 
var section = document.querySelector('.first-screen');
var content = document.querySelector('.banner__container');

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("header--fixed");
		header.classList.add('animate__animated', 'animate__fadeIn');
		content.style.paddingTop="75px";
	} else {
		header.classList.remove("header--fixed");
		content.style.paddingTop="";
		header.classList.remove('animate__animated', 'animate__fadeIn');
	}
};


// ==========