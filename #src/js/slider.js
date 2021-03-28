// Слайдер


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