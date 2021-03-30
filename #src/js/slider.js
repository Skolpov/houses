// Слайдер отзывов


const mySiema = new Siema({
	perPage: {
		768: 1,
   		1024: 2
	},
	duration: 200,
	easing: 'ease-out',
	loop: true,

	
});
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());


// ==========




// Слайдер карточка домов


const imgs = Array.prototype.slice.call(document.querySelectorAll('.min-img'));
// const imgBtns = [ ... imgs];
let imgId = 1;

imgs.forEach((imgItem) => {
	imgItem.addEventListener('click', (event) => {
		event.preventDefault();
		imgId = imgItem.dataset.id;
		slideImage();
	});
});

function slideImage() {
	const displayWidth = document.querySelector('.main-img img:first-child').clientWidth;
	document.querySelector('.main-img').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);




// ==========