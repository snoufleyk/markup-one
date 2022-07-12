// webp check
export function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('html').classList.add('webp');
		} else {
			document.querySelector('html').classList.add('no-webp');
		}
	});
}


export function mobileMenu(){
	let burger = document.querySelector('.js-burger');
	let headerBurger = document.querySelector('.burger');
	let html = document.getElementsByTagName('html')[0];
	let nav = document.getElementsByTagName('nav')[0];
	
	burger.addEventListener('click', function(evt){
		evt.preventDefault();
		headerBurger.classList.toggle('is--open');
		html.classList.toggle('no--scroll');
		nav.classList.toggle('is--open');
	})
}

// export function isOpenToggler(el){
// 	let elm = document.querySelectorAll(el);
	
// 	for (let i = 0; i < elm.length; i++){
// 		elm[i].addEventListener('click', function(evt){
// 			evt.preventDefault();
// 			elm[i].classList.toggle('is-open');
// 		})
// 	}
// }

// document ready
export function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}