/* ---------- PRIMER SLIDER --- Para cuando le demos click a las flechas hagan un scroll de la fila --------- */
const line = document.querySelector(".container-slider");
const movies = document.querySelectorAll(".movies"); 
const RightArrow = document.getElementById("right-arrow1");
const LeftArrow = document.getElementById("left-arrow1");

RightArrow.addEventListener("click", () => {
    line.scrollLeft += line.offsetWidth;
});

LeftArrow.addEventListener("click", () => {
    line.scrollLeft -= line.offsetWidth;
});  

/* -------------- SEGUNDO SLIDER ---------- */


 /* ----------------- HOVER A LA IMAGEN CUANDO PASO EL CURSOR------------------ */

movies.forEach((movie) => {
    movie.addEventListener("mouseenter", (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            movies.forEach(movie => movie.classList.remove("hover"));
            element.classList.add("hover");
        }, 200);
    });
});

/* Para cuando saque el cursor, se salga el hover de la pelicula */
line.addEventListener("mouseleave", () => {
    movies.forEach(movie => movie.classList.remove("hover"));
})

/* Digo: quiero acceder a todas las peliculas, y agregro un forEach que indique que por cada pelicula que tenga dentro quiero que me 
ejecute una funcion flecha donde me agregue un EVENTO para obtener el ELEMNTO (por el cual pasamos el cursor), 
y esto ejecuta otra funcion flecha. Dentro de ella se guarda el elemento en una constante.
Luego pongo un setTimeout, indicando que despues de un tiempo me agregue la funcion hover, y dentro digo que 
por cada pelicula quiero acceder a pelicula.classlist.remove y le quita la funcion de hover.
Luego accedo al elemento por el que pasamor el cursor, y le damos una lista de clase hover*/
/* EN RESUMEN: es para que cuando pase el cursor a otra pelicula, se le salga el hover a la anterior. */

/* -------------------------- BOTON IR ARRIBA ----------------- */
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