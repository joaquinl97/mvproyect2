//Cover page
let coverImage = document.getElementById("coverImage");

function createCover() {
    let movies= JSON.parse(localStorage.getItem('movies')) || [];
    let coverImageAbout = []
    movies.map((item) => {
        if (item.destacadaInput == true) {
            coverImageAbout.push(`
            <div class="w-100 imgportada" style="background-image: url(${item.cover});" >
                
            </div>
            
            `)

        }


    })
    coverImage.innerHTML = coverImageAbout.join('')


}
createCover()

//Carrousel by genres
let fictionMovies = document.getElementById("fictionMovies");
let horrorMovies = document.getElementById("horrorMovies");
let comedyMovies = document.getElementById("comedyMovies");
let musicalMovies = document.getElementById("musicalMovies");
let dramaMovies = document.getElementById("dramaMovies");

function fictionFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let fictionGenre=[]
    movies.map((item) => {
        if (item.optionsAdmin=="Ficcion" && item.publicadaInput== true) {
            fictionGenre.push(`
            <a href="${item.videoAdmin}">
                <div class="cardImgMovie m-4">
                    <div>
                      <img class="imgMovie" src="${item.imageAdmin}" alt="" srcset="">
                    </div>
                    <div class="bg-dark">
                        <p class="text-light text-center">
                            <i class="text-light text-center">${item.filmNameAdmin}</i>
                        </p>
                    </div>
                </div>
                </a>

            `)
            
            
        }
        fictionMovies.innerHTML=fictionGenre.join('');


    })
    
}
fictionFunction()

function horrorFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let horrorGenre=[]
    movies.map((item) => {
        if (item.optionsAdmin=="Terror" && item.publicadaInput== true) {
            horrorGenre.push(`
            <a href="${item.videoAdmin}">
                <div class="cardImgMovie m-4">
                    <div>
                      <img class="imgMovie" src="${item.imageAdmin}" alt="" srcset="">
                    </div>
                    <div class="bg-dark">
                        <p class="text-light text-center">
                            <i class="text-light text-center">${item.filmNameAdmin}</i>
                        </p>
                    </div>
                </div>
                </a>

            `)
            
            
        }
        horrorMovies.innerHTML=horrorGenre.join('');


    })
    
}
horrorFunction()

function comedyFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let comedyGenre=[]
    movies.map((item) => {
        if (item.optionsAdmin=="Comedia" && item.publicadaInput== true) {
            comedyGenre.push(`
            <a href="${item.videoAdmin}">
                <div class="cardImgMovie m-4">
                    <div>
                      <img class="imgMovie" src="${item.imageAdmin}" alt="" srcset="">
                    </div>
                    <div class="bg-dark">
                        <p class="text-light text-center">
                            <i class="text-light text-center">${item.filmNameAdmin}</i>
                        </p>
                    </div>
                </div>
                </a>

            `)
            
            
        }
        comedyMovies.innerHTML=comedyGenre.join('');


    })
    
}
comedyFunction()

function musicalFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let musicalGenre=[]
    movies.map((item) => {
        if (item.optionsAdmin=="Musical" && item.publicadaInput== true) {
            musicalGenre.push(`
            <a href="${item.videoAdmin}">
                <div class="cardImgMovie m-4">
                    <div>
                      <img class="imgMovie" src="${item.imageAdmin}" alt="" srcset="">
                    </div>
                    <div class="bg-dark">
                        <p class="text-light text-center">
                            <i class="text-light text-center">${item.filmNameAdmin}</i>
                        </p>
                    </div>
                </div>
                </a>

            `)
            
            
        }
        musicalMovies.innerHTML=musicalGenre.join('');


    })
    
}
musicalFunction()

function dramaFunction() {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let dramaGenre=[]
    movies.map((item) => {
        if (item.optionsAdmin=="Drama" && item.publicadaInput== true) {
            dramaGenre.push(`
            <a href="${item.videoAdmin}">
                <div class="cardImgMovie m-4">
                    <div>
                      <img class="imgMovie" src="${item.imageAdmin}" alt="" srcset="">
                    </div>
                    <div class="bg-dark">
                        <p class="text-light text-center">
                            <i class="text-light text-center">${item.filmNameAdmin}</i>
                        </p>
                    </div>
                </div>
                </a>

            `)
            
            
        }
        dramaMovies.innerHTML=dramaGenre.join('');


    })
    
}
dramaFunction()
