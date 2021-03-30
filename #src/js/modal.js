// модальные окна


const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {

		let triggers = Array.prototype.slice.call(document.querySelectorAll(triggerSelector));
		const modal = document.querySelector(modalSelector);
		let btnsclose = Array.prototype.slice.call(document.querySelectorAll(closeSelector));

		btnsclose.forEach(function(item) {
				item.addEventListener('click', closeModal)
		});

		triggers.forEach(function(item) {
			item.addEventListener('click', openModal)
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal()
			}
		});

		document.body.addEventListener('keyup', function (e) {
			var key = e.keyCode;
			if (key == 27) {
				closeModal()
			};
		}, false);

		function openModal() {
				modal.classList.add('modal--show');
				document.body.style.overflow = 'hidden';
			// clearInterval(openTimer);
		}

		function closeModal() {
				modal.classList.remove('modal--show');
				document.body.style.overflow = '';

		};

		var burgerCallBtn = document.querySelector('.burger__call-btn');
		var politicsClose = document.querySelector('.politics-close');
		var politicsModal = document.querySelector('.politics-modal');

		burgerCallBtn.addEventListener('click', function() {
			closeNav();
			// closeNav лежит в файле burger-menu.js
		});

		politicsClose.addEventListener('click', function() {
			politicsModal.classList.remove('modal--show');
			// politicsModal.classList.remove('animate__animated', 'animate__fadeIn');
		});






		// var contentBtn = document.querySelector('.content-btn');
		// contentBtn.addEventListener('click', function() {
		// 	var contentM = document.querySelector('.content__modal');
		// 	contentM.classList.remove('modal--show');
		// 	document.body.style.overflow = '';
		// 	// contentM.classList.remove('animate__animated', 'animate__fadeIn');
		// });





		// function showModalByScroll() {
		// 	if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
		// 		if (modal.classList.contains('form__modal')) {
		// 			openModal();
		// 			window.removeEventListener('scroll', showModalByScroll);
		// 		}
		// 	}
		// }

		// window.addEventListener('scroll', showModalByScroll);

		// function openTimer() {
		// 	setTimeout(openModal, 2000);
		// }

		// if (modal.classList.contains('form__modal')) {
		// 	openTimer();
		// }

	}


	bindModal('.phone__link', '.application-form', '.modal-close');
	bindModal('.burger__call-btn', '.application-form', '.modal-close');
	bindModal('.btn-signup', '.application-form', '.modal-close');
	bindModal('.consultation-btn', '.application-form', '.modal-close');
	bindModal('.card', '.content-modal', '.modal-close');
	bindModal('.btn-politics', '.politics-modal', '.politics-close');

};


// ==========