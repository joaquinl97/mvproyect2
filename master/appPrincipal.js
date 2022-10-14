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


 /* ----------------- HOVER A LA IMAGEN CUANDO PASO EL CURSOR------------------ */

/* movies.forEach((movie) => {
    movie.addEventListener("mouseenter", (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            movies.forEach(movie => movie.classList.remove("hover"));
            element.classList.add("hover");
        }, 200);
    });
});  */

/* Para cuando saque el cursor, se salga el hover de la pelicula */

/* lineOne.addEventListener("mouseleave", () => {
	movies.forEach(movie => movie.classList.remove("hover"));
}) 
lineTwo.addEventListener("mouseleave", () => {
	movies.forEach(movie => movie.classList.remove("hover"));
}) 
lineThree.addEventListener("mouseleave", () => {
	movies.forEach(movie => movie.classList.remove("hover"));
})   */

/* Digo: quiero acceder a todas las peliculas, y agregro un forEach que indique que por cada pelicula que tenga dentro quiero que me 
ejecute una funcion flecha donde me agregue un EVENTO para obtener el ELEMNTO (por el cual pasamos el cursor), 
y esto ejecuta otra funcion flecha. Dentro de ella se guarda el elemento en una constante.
Luego pongo un setTimeout, indicando que despues de un tiempo me agregue la funcion hover, y dentro digo que 
por cada pelicula quiero acceder a pelicula.classlist.remove y le quita la funcion de hover.
Luego accedo al elemento por el que pasamor el cursor, y le damos una lista de clase hover*/
/* EN RESUMEN: es para que cuando pase el cursor a otra pelicula, se le salga el hover a la anterior. */

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
