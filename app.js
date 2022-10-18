//Cover page
let coverImage = document.getElementById("coverImage");
let exitButton = document.getElementById('exitButton');
let getUsers = JSON.parse(localStorage.getItem('users')) || [];
let user = getUsers.find((item) => item.sesion === true) || null;

function createCover() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    let coverImageAbout = []
    movies.map((item) => {
        if (item.destacadaInput == true) {
            coverImageAbout.push(`
            <div class="principal-movie" style="background-image: url(${item.cover});">
        <div class="text-top">
          <h1 class="animate__animated animate__fadeInDown">${item.filmNameAdmin}</h1>  
          <p class="animate__animated animate__fadeInDown">
            ${item.descriptionAdmin}
          </p> 
          <!-- Button trigger modal -->
          <button type="button" id="play" class="button-play animate__animated animate__fadeInDown" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-play"></i> Reproducir
          </button>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content bg-secondary bg-opacity-75">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel"> TRAILER </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <iframe class="trailer-video" width="560" height="315" src="${item.videoAdmin}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <!-- boton de mas informacion -->
          <a href="./404-Error/404error.html">
            <button role="button" class="button-play animate__animated animate__fadeInDown">
              <i class="fa-solid fa-circle-info"></i> Más información
            </button>
          </a>
        </div>
      </div>         
            `)
        }
    })
    coverImage.innerHTML = coverImageAbout.join('')


}
createCover()



/* ---------- PRIMER SLIDER ---------- Para cuando le demos click a las flechas, hagan un scroll de la fila --------- */
const movie = document.querySelectorAll(".movie");

let lineOne = document.getElementById("container-slider1")
let RightArrowOne = document.getElementById("right-arrow1");
let LeftArrowOne = document.getElementById("left-arrow1");

RightArrowOne.addEventListener("click", () => {
    lineOne.scrollLeft += lineOne.offsetWidth;
});

LeftArrowOne.addEventListener("click", () => {
    lineOne.scrollLeft -= lineOne.offsetWidth;
});



//Carrousel by genres
let fictionMovies = document.getElementById("fictionMovies");
let horrorMovies = document.getElementById("horrorMovies");
let comedyMovies = document.getElementById("comedyMovies");
let musicalMovies = document.getElementById("musicalMovies");
let dramaMovies = document.getElementById("dramaMovies");

function fictionFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let fictionGenre = []
    movies.map((item) => {
        if (item.optionsAdmin == "Ficcion" && item.publicadaInput == true) {
            fictionGenre.push(`

            <div class="movie">         
            <img src="${item.imageAdmin}" alt="" />
            <div class="moviesDescription">
            <b>${item.filmNameAdmin}</b>
              <p>${item.descriptionAdmin}</p>
            </div>
            <a class="trailerMovie" href="${item.videoAdmin}">Ver Trailer</a>
            </div>
            `)


        }
        fictionMovies.innerHTML = fictionGenre.join('');


    })

}
fictionFunction()


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


function horrorFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let horrorGenre = []
    movies.map((item) => {
        if (item.optionsAdmin == "Terror" && item.publicadaInput == true) {
            horrorGenre.push(`
            <div class="movie">         
            <img src="${item.imageAdmin}" alt="" />
            <div class="moviesDescription">
            <b>${item.filmNameAdmin}</b>
              <p>${item.descriptionAdmin}</p>
            </div>
            <a class="trailerMovie" href="${item.videoAdmin}">Ver Trailer</a>
            </div>

            `)


        }
        horrorMovies.innerHTML = horrorGenre.join('');


    })

}
horrorFunction()

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

function comedyFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let comedyGenre = []
    movies.map((item) => {
        if (item.optionsAdmin == "Comedia" && item.publicadaInput == true) {
            comedyGenre.push(`
            <div class="movie">         
            <img src="${item.imageAdmin}" alt="" />
            <div class="moviesDescription">
            <b>${item.filmNameAdmin}</b>
              <p>${item.descriptionAdmin}</p>
            </div>
            <a class="trailerMovie" href="${item.videoAdmin}">Ver Trailer</a>
            </div>

            `)


        }
        comedyMovies.innerHTML = comedyGenre.join('');


    })

}
comedyFunction()


/* -------------- CUARTO SLIDER ---------- */
let lineFour = document.getElementById("container-slider4")
let RightArrowFour  = document.getElementById("right-arrow4");		
let LeftArrowFour  = document.getElementById("left-arrow4");

RightArrowFour.addEventListener("click", () => {
    lineFour.scrollLeft += lineFour.offsetWidth;
});

LeftArrowFour.addEventListener("click", () => {
    lineFour.scrollLeft -= lineFour.offsetWidth;
});

function musicalFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let musicalGenre = []
    movies.map((item) => {
        if (item.optionsAdmin == "Musical" && item.publicadaInput == true) {
            musicalGenre.push(`
            <div class="movie">         
            <img src="${item.imageAdmin}" alt="" />
            <div class="moviesDescription">
            <b>${item.filmNameAdmin}</b>
              <p>${item.descriptionAdmin}</p>
            </div>
            <a class="trailerMovie" href="${item.videoAdmin}">Ver Trailer</a>
            </div>

            `)


        }
        musicalMovies.innerHTML = musicalGenre.join('');


    })

}
musicalFunction()



/* -------------- QUINTO SLIDER ---------- */
let lineFive = document.getElementById("container-slider5")
let RightArrowFive  = document.getElementById("right-arrow5");		
let LeftArrowFive  = document.getElementById("left-arrow5");

RightArrowFive.addEventListener("click", () => {
    lineFive.scrollLeft += lineFive.offsetWidth;
});

LeftArrowFive.addEventListener("click", () => {
    lineFive.scrollLeft -= lineFive.offsetWidth;
});

function dramaFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let dramaGenre = []
    movies.map((item) => {
        if (item.optionsAdmin == "Drama" && item.publicadaInput == true) {
            dramaGenre.push(`
            <div class="movie">         
            <img src="${item.imageAdmin}" alt="" />
            <div class="moviesDescription">
            <b>${item.filmNameAdmin}</b>
              <p>${item.descriptionAdmin}</p>
            </div>
            <a class="trailerMovie" href="${item.videoAdmin}">Ver Trailer</a>
            </div>

            `)


        }
        dramaMovies.innerHTML = dramaGenre.join('');


    })

}
dramaFunction()


// BOTON QUE LLEVA HACIA ARRIBA
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



// NUEVO MICA

function ExitSesion() {
  let response = getUsers.map((item) => {
      if (item.id === user.id) {
          let myUser = {
              ...item,
              sesion: false
          }
          return myUser;
      } else {
          return item;
      }
  })
  localStorage.setItem('users', JSON.stringify(response));
  
  
}

function Main() {
  SesionOpen()

  if(user.isAdmin){
    document.querySelector('.js-admin').classList.remove('d-none')
  }
}

function SesionOpen() {
  if (getUsers !== [] && user !== null) {
      if (user.sesion !== true) {
        //  window.location.href = '';
      } else {
          // SessionSeVence()
      }
  } else {
     // window.location.href = '';
  }
}

exitButton.addEventListener('click', () => {
  ExitSesion()
})

function SessionSeVence() {
  setTimeout(() => {
      ExitSesion()
  }, 120000);
}

function ExitSesion() {
  let response = getUsers.map((item) => {
      if (item.id === user.id) {
          let myUser = {
              ...item,
              sesion: false
          }
          return myUser;
      } else {
          return item;
      }
  })
  localStorage.setItem('users', JSON.stringify(response));
  window.location.href = '/presentation/login/login.html';
}

Main()