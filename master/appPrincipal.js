/* ---------- PRIMER SLIDER ---------- Para cuando le demos click a las flechas, hagan un scroll de la fila --------- */
const movies = document.querySelectorAll(".movies"); 

let lineOne = document.getElementById("container-slider1")
let RightArrowOne = document.getElementById("right-arrow1");		
let LeftArrowOne = document.getElementById("left-arrow1");

RightArrowOne.addEventListener("click", () => {
    lineOne.scrollLeft += lineOne.offsetWidth;
});

LeftArrowOne.addEventListener("click", () => {
    lineOne.scrollLeft -= lineOne.offsetWidth;
});

/* -------------- SEGUNDO SLIDER ---------- */
let lineTwo = document.getElementById("container-slider2")
let RightArrowTwo = document.getElementById("right-arrow2");		
let LeftArrowTwo = document.getElementById("left-arrow2");

RightArrowTwo.addEventListener("click", () => {
    lineTwo.scrollLeft += lineTwo.offsetWidth;
});

LeftArrowTwo.addEventListener("click", () => {
    lineTwo.scrollLeft -= lineTwo.offsetWidth;
});

/* -------------- TERCER SLIDER ---------- */
let lineThree = document.getElementById("container-slider3")
let RightArrowThree = document.getElementById("right-arrow3");		
let LeftArrowThree = document.getElementById("left-arrow3");

RightArrowThree.addEventListener("click", () => {
    lineThree.scrollLeft += lineThree.offsetWidth;
});

LeftArrowThree.addEventListener("click", () => {
    lineThree.scrollLeft -= lineThree.offsetWidth;
});

/* -------------------------- BOTON IR HACIA ARRIBA ----------------- */
$(document).ready(function(){
	$('.go-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.go-up').slideDown(300);
		} else {
			$('.go-up').slideUp(300);
		}
	});
});
