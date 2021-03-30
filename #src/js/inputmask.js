// let inputsPhone = Array.prototype.slice.call(document.querySelectorAll('.inp-phone'));

// inputsPhone.forEach((e) => {
// 	const phoneMask = IMask( e, { mask: '+{7}(000)000-00-00' })
// })



var phoneMask = IMask(
	document.querySelector('.inp-phone1'), {
	  mask: '+{7}(000)000-00-00'
});

var phoneMask2 = IMask(
	document.querySelector('.inp-phone2'), {
	  mask: '+{7}(000)000-00-00'
});

var phoneMask3 = IMask(
	document.querySelector('.inp-phone3'), {
	  mask: '+{7}(000)000-00-00'
});