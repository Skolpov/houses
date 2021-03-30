
var homeBtn = document.querySelector('.home');
var summerBtn = document.querySelector('.summer');
var saunaBtn = document.querySelector('.sauna');
var pergolaBtn = document.querySelector('.pergola');
var kidsBtn = document.querySelector('.kids');

var homeBlock = document.querySelector('.home-container');
var summerBlock = document.querySelector('.summer-container');
var saunaBlock = document.querySelector('.sauna-container');
var pergolaBlock = document.querySelector('.pergola-container');
var kidsBlock = document.querySelector('.kids-container');


// var text = document.querySelector('.skill-title h3');
// var info = document.querySelector('.skill-text p');
// var pic = document.querySelector('.skill-img img');

homeBtn.addEventListener('click', function() {
	if (!homeBlock.classList.contains('show-block')) {
		homeBlock.classList.add('show-block');
		summerBlock.classList.remove('show-block');
		saunaBlock.classList.remove('show-block');
		pergolaBlock.classList.remove('show-block');
		kidsBlock.classList.remove('show-block');
	}
});

summerBtn.addEventListener('click', function() {
	if (!summerBlock.classList.contains('show-block')) {
		summerBlock.classList.add('show-block');
		homeBlock.classList.remove('show-block');
		saunaBlock.classList.remove('show-block');
		pergolaBlock.classList.remove('show-block');
		kidsBlock.classList.remove('show-block');
	}
});

saunaBtn.addEventListener('click', function() {
	if (!saunaBlock.classList.contains('show-block')) {
		saunaBlock.classList.add('show-block');
		summerBlock.classList.remove('show-block');
		homeBlock.classList.remove('show-block');
		pergolaBlock.classList.remove('show-block');
		kidsBlock.classList.remove('show-block');
	}
});

pergolaBtn.addEventListener('click', function() {
	if (!pergolaBlock.classList.contains('show-block')) {
		pergolaBlock.classList.add('show-block');
		homeBlock.classList.remove('show-block');
		summerBlock.classList.remove('show-block');
		saunaBlock.classList.remove('show-block');
		kidsBlock.classList.remove('show-block');
	}
});

kidsBtn.addEventListener('click', function() {
	if (!kidsBlock.classList.contains('show-block')) {
		kidsBlock.classList.add('show-block');
		homeBlock.classList.remove('show-block');
		summerBlock.classList.remove('show-block');
		saunaBlock.classList.remove('show-block');
		pergolaBlock.classList.remove('show-block');
	}
});




// home.addEventListener('click', function() {
// 	text.innerHTML="Дома для жилья";
// 	info.innerHTML="Какой уютный современный дом сможет обойтись без тепла камина? HomeSrub предлагает установить профессиональные чугунные камины-топки на дровах с отделкой в ​​выбранном Вами стиле.";
// 	pic.src="./img/building-info/home-1x.jpg";
// 	pic.srcset="./img/building-info/home-2x.jpg 2x";
// 	pic.alt="Домик";
// });

// summer.addEventListener('click', function() {
// 	text.innerHTML="Летний домик";
// 	info.innerHTML="Кинетический момент влияет на составляющие гироскопического момента больше, чем гироскопический стабилизатоор, сводя задачу к квадратурам. Гироскопический маятник, в соответствии с модифицированным.";
// 	pic.src="./img/building-info/summer-1x.jpg";
// 	pic.srcset="./img/building-info/summer-2x.jpg 2x";
// 	pic.alt="Летний";
// });

// pergola.addEventListener('click', function() {
// 	text.innerHTML="Пергола";
// 	info.innerHTML="Традиционный канал конкурентоспособен. А вот по мнению аналитиков стимулирование коммьюнити отражает поведенческий таргетинг, учитывая современные тенденции.";
// 	pic.src="./img/building-info/pergola-1x.jpg";
// 	pic.srcset="./img/building-info/pergola-2x.jpg 2x";
// 	pic.alt="Пергола";
// });

// sauna.addEventListener('click', function() {
// 	text.innerHTML="Сауна";
// 	info.innerHTML="Легко проверить, что поле направлений определяет расходящийся ряд. Открытое множество естественно раскручивает экспериментальный лист Мёбиуса, что несомненно приведет нас к истине.";
// 	pic.src="./img/building-info/sauna-1x.jpg";
// 	pic.srcset="./img/building-info/sauna-2x.jpg 2x";
// 	pic.alt="Сауна";
// });

// kids.addEventListener('click', function() {
// 	text.innerHTML="Детская площадка";
// 	info.innerHTML="По сути, лемма реально порождает минимум. Длина вектора ускоряет положительный критерий интегрируемости, явно демонстрируя всю чушь вышесказанного. Полином обоснован необходимостью.";
// 	pic.src="./img/building-info/kids-1x.jpg";
// 	pic.srcset="./img/building-info/kids-2x.jpg 2x";
// 	pic.alt="Детская площадка";
// });



var skillContainer = document.querySelectorAll('.skill__type');
var skillBtns = document.getElementsByClassName('skill-item');

for (var i = 0; i < skillBtns.length; i++) {
	skillBtns[i].addEventListener("click", function(){
   		var active = document.getElementsByClassName("skill--active");
    	active[0].className = active[0].className.replace(" skill--active", "");
    	this.className += " skill--active";
  });
}
