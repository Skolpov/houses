// модальные окна


const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {

		const modal = document.querySelector(modalSelector);
		let btnsclose = Array.prototype.slice.call(document.querySelectorAll(closeSelector));
		let triggers = Array.prototype.slice.call(document.querySelectorAll(triggerSelector));

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

		document.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && modal.classList.contains('show')) {
				closeModal()
			}
		} )

		function openModal() {
				modal.classList.add('modal--show');
				document.body.style.overflow = 'hidden';
				modal.classList.add('animate__animated', 'animate__fadeIn');
			// clearInterval(openTimer);
		}

		function closeModal() {
				modal.classList.remove('modal--show');
				document.body.style.overflow = '';
				modal.classList.remove('animate__animated', 'animate__fadeIn');

		};

		var contentBtn = document.querySelector('.content-btn');
		contentBtn.addEventListener('click', function() {
			var contentM = document.querySelector('.content__modal');
			contentM.classList.remove('modal--show');
			document.body.style.overflow = '';
			// contentM.classList.remove('animate__animated', 'animate__fadeIn');
		});





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


	bindModal('.phone__link', '.application__form', '.modal__close');
	bindModal('.burger__call-btn', '.application__form', '.modal__close');
	bindModal('.btn-signup', '.application__form', '.modal__close');
	bindModal('.info-modal__btn', '.content__modal', '.content__close');
	
	var burgerCallBtn = document.querySelector('.burger__call-btn');

	burgerCallBtn.addEventListener('click', function() {
		closeNav();
	});


};


// ==========