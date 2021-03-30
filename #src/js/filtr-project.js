// Табы проектов

const filter = () => {
	let projectsMenu = document.querySelector('.projects-menu');
	let projectType = Array.prototype.slice.call(projectsMenu.querySelectorAll('.tab-btn'));
	
	let typeAll = projectsMenu.querySelector('.all');
	let typeWild = projectsMenu.querySelector('.wild');
	let typeCarcass = projectsMenu.querySelector('.carcass');
	let typeGlue = projectsMenu.querySelector('.glue');

	
	let projectsCards = document.querySelector('.projects__cards');
	let cardAll = Array.prototype.slice.call(projectsCards.querySelectorAll('.all'));
	let cardWild = Array.prototype.slice.call(projectsCards.querySelectorAll('.wild'));
	let cardCarcass = Array.prototype.slice.call(projectsCards.querySelectorAll('.carcass'));
	let cardGlue = Array.prototype.slice.call(projectsCards.querySelectorAll('.glue'))



	const typeFilter = (markType) => {
		cardAll.forEach(mark => {
			mark.style.display = 'none';
		});

		if (markType) {
			markType.forEach(mark => {
				mark.style.display = 'block';
				mark.classList.add('animate__animated', 'animate__fadeIn');
			})
		}
	};

	typeAll.addEventListener('click', () => {
		typeFilter(cardAll);
	});

	typeWild.addEventListener('click', () => {
		typeFilter(cardWild);
	});

	typeCarcass.addEventListener('click', () => {
		typeFilter(cardCarcass);
	});

	typeGlue.addEventListener('click', () => {
		typeFilter(cardGlue);
	});

	projectsMenu.addEventListener('click', (e) => {
		let target = e.target;

		if (target && target.className === 'tab-btn') {
			projectType.forEach(btn => btn.classList.remove('active'));
			target.classList.add('active');
		}
	});
	

}

// ==========