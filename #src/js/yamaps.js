// Задержка загрузки yaMaps


var YaMapsShown = false; 

document.addEventListener('scroll', () => { 
	let scrollTop = document.documentElement.scrollTop;    
	if (scrollTop >= 2000) {
		showYaMaps();
		YaMapsShown = true;
	}
});

function showYaMaps(){
	var script   = document.createElement("script");
	script.type  = "text/javascript";
	script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9b6066007d2a10adcbdac165fce87a97b3b6229e2ce4402bf66155f39a195930&amp;width=100%25&amp;height=588&amp;lang=ru_RU&amp;scroll=true";
	document.getElementById("YaMaps").appendChild(script);
}


// ==========

