const line = document.querySelector(".container-slider");
const movies = document.querySelectorAll(".movies");

const LeftArrow = document.getElementById("left-arrow");
const RightArrow = document.getElementById("right-arrow");

/* ---------- Event Listener, para cuando le demos click a las flechas hagan un scroll de la fila --------- */

RightArrow.addEventListener("click", () => {
    line.scrollLeft += line.offsetWidth;
});

LeftArrow.addEventListener("click", () => {
    line.scrollLeft -= line.offsetWidth;
});

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

/* Digo: quiero acceder a todas las peliculas, y agregro un forEach que indique que por cada pelicula que tenga dentro quiero que me 
ejecute una funcion flecha donde me agregue un EVENTO para obtener el ELEMNTO (por el cual pasamos el cursor), 
y esto ejecuta otra funcion flecha. Dentro de ella se guarda el elemento en una constante.
Luego pongo un setTimeout, indicando que despues de un tiempo me agregue la funcion hover, y dentro digo que 
por cada pelicula quiero acceder a pelicula.classlist.remove y le quita la funcion de hover.
Luego accedo al elemento por el que pasamor el cursor, y le damos una lista de clase hover*/
/* EN RESUMEN: es para que cuando pase el cursor a otra pelicula, se le salga el hover a la anterior. */

line.addEventListener("mouseleave", () => {
    movies.forEach(movie => movie.classList.remove("hover"));
})
/* Para cuando saque el cursor, se salga el hover de la pelicula */
