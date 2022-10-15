let filmNameAdmin = document.getElementById("filmNameAdmin");
let optionsAdmin = document.getElementById("optionsAdmin");
let descriptionAdmin = document.getElementById("descriptionAdmin");

let imageAdmin = document.getElementById("imageAdmin");
let videoAdmin = document.getElementById("videoAdmin");


let publicadaInput = document.getElementById("publicadaInput");
// const publicada=publicadaInput.checked;
let destacadaInput = document.getElementById("destacadaInput");
// const destacada=destacadaInput.checked;

let buttonSaveAdmin = document.getElementById("buttonSaveAdmin");
let viewMoviesAdmin = document.getElementById("viewMoviesAdmin");

let cover = document.getElementById("cover");



let movies = JSON.parse(localStorage.getItem('movies')) || [];


publicadaInput.checked == true
// destacadaInput.checked == true
//Create
buttonSaveAdmin.addEventListener("click", () => {


    if (filmNameAdmin.value != "" && optionsAdmin.value != "" && descriptionAdmin.value != "") {
        movies.push({
            id: Math.round(Math.random() * 1000000),
            filmNameAdmin: filmNameAdmin.value,
            optionsAdmin: optionsAdmin.value,
            descriptionAdmin: descriptionAdmin.value,
            imageAdmin: imageAdmin.value,
            videoAdmin: videoAdmin.value,
            publicadaInput: publicadaInput.checked,
            destacadaInput: false,
            cover: cover.value,
        })
        localStorage.setItem('movies', JSON.stringify(movies));
        filmNameAdmin.value = '';
        optionsAdmin.value = '';
        descriptionAdmin.value = '';
        imageAdmin.value = '';
        videoAdmin.value = '';
        publicadaInput.checked = false;
        // destacadaInput.checked = false;
        cover.value = '';
        readFunction()




    } else {
        alert('Completar campos')
    }
})

//Read
const readFunction = () => {
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    let showMovies = []
    movies.map((item) => {
        showMovies.push(`
        <tr class="rowAdmin ${item.destacadaInput == true ? 'highlighted text-dark' : 'tableBody'}   ">
              <th scope="row">${item.id}</th>
              <td>${item.filmNameAdmin}</td>
              <td>${item.optionsAdmin}</td>
              <td>

                <div class="adminOverflow">
                  ${item.descriptionAdmin}
                </div>

              </td>
              <td>${item.publicadaInput == true ? 'SI' : 'NO'}</td>
              <td>${item.destacadaInput == true ? 'SI' : 'NO'}</td>
              <td class="editDelFavButtons d-flex">
                <button class="btn btn-light p-1 mx-1" onclick="deleteFunction('${item.id}')" ><img class="trashImg" src="adminImages/trash-can.png"
                    alt=""></button>
                <button class="btn btn-light p-1 mx-1" data-bs-toggle="modal" data-bs-target="#updateModal" onclick="viewUpdate('${item.id}')"><img class="trashImg" src="adminImages/edit.png"
                    alt=""></button>
              </td>
            </tr>
        `)
    })
    viewMoviesAdmin.innerHTML = showMovies.join('')
}
readFunction()

//Update
let filmNameAdminUpdate = document.getElementById("filmNameAdminUpdate");
let optionsAdminUpdate = document.getElementById("optionsAdminUpdate");
let descriptionAdminUpdate = document.getElementById("descriptionAdminUpdate");
let imageAdminUpdate = document.getElementById("imageAdminUpdate");
let videoAdminUpdate = document.getElementById("videoAdminUpdate");

let publicadaInputUpdate = document.getElementById("publicadaInputUpdate");
let destacadaInputUpdate = document.getElementById("destacadaInputUpdate");
let coverUpdate = document.getElementById("coverUpdate");
let identifier;
const viewUpdate = (id) => {
    identifier = id;
    movies.map((item) => {
        if (item.id == id) {
            item.id = id
            filmNameAdminUpdate.value = item.filmNameAdmin
            optionsAdminUpdate.value = item.optionsAdmin
            descriptionAdminUpdate.value = item.descriptionAdmin
            imageAdminUpdate.value = item.imageAdmin
            videoAdminUpdate.value = item.videoAdmin
            publicadaInputUpdate.checked = item.publicadaInput
            destacadaInputUpdate.checked = item.destacadaInput
            coverUpdate.value = item.cover

        }
    })
}

const updateFunction = () => {
    let updateFunction = [];
    movies.map((item) => {
        if (item.id == identifier) {
            updateFunction.push({
                ...item,
                filmNameAdmin: filmNameAdminUpdate.value,
                optionsAdmin: optionsAdminUpdate.value,
                descriptionAdmin: descriptionAdminUpdate.value,
                imageAdmin: imageAdminUpdate.value,
                videoAdmin: videoAdminUpdate.value,
                publicadaInput: publicadaInputUpdate.checked,

                cover: coverUpdate.value,
            })

        }
        else {
            // updateFunction.push(item)


            updateFunction.push({
                ...item,

            })

        }

    })
    localStorage.setItem('movies', JSON.stringify(updateFunction))
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    readFunction()


}

const favFunction = () => {
    let favFunction = [];
    movies.map((item) => {
        if (item.id == identifier) {
            favFunction.push({
                ...item,
                destacadaInput: destacadaInputUpdate.checked,
            })
        }
        else {
            favFunction.push({
                ...item,
                destacadaInput: false,
            })
        }

    })
    localStorage.setItem('movies', JSON.stringify(favFunction))
    movies = JSON.parse(localStorage.getItem('movies')) || [];
    readFunction()


}


// function fav() {
//     movies = JSON.parse(localStorage.getItem('movies')) || [];
//     let fav=[]
//     for (let i = 0; i < movies.length; i++) {

//         if (movies[i].destacadaInput== true) {
//             fav.push({

//                 destacadaInput:true,
//             })
//         } else {
//             fav.push({

//                 destacadaInput:false,
//             })

//         }


//     }
//     localStorage.setItem('movies', JSON.stringify(fav))

//     readFunction()
// }

// function fav() {
//     let fac=[]
//     movies.map((item) =>{
//         if (condition) {

//         }

//     })

// }




//Delete

const deleteFunction = (id) => {
    let deleteFunction = []
    movies.map((item) => {
        if (id != item.id) {
            deleteFunction.push(item)

        }
    })
    localStorage.setItem('movies', JSON.stringify(deleteFunction))
    movies = JSON.parse(localStorage.getItem('movies')) || []
    readFunction()
}


//A continuacion se presenta la funcion Filter que permite buscar en tiempo real las notas almacenadas.

let searchMovie = document.getElementById('searchMovie')
// let boton = document.getElementById('boton') 
let result= document.getElementById('viewMoviesAdmin')

function Filter() {
    let movies = JSON.parse(localStorage.getItem('movies'))


    result.innerHTML =''
    let text=searchMovie.value.toLowerCase()

    for (let i = 0; i < movies.length; i++) {
        let movie=movies[i].filmNameAdmin.toLowerCase()

        if (movie.indexOf(text)!==-1) {
            result.innerHTML+=(`
            <tr class="rowAdmin ${movies[i].destacadaInput == true ? 'highlighted text-dark' : 'tableBody'}   ">
              <th scope="row">${movies[i].id}</th>
              <td>${movies[i].filmNameAdmin}</td>
              <td>${movies[i].optionsAdmin}</td>
              <td>

                <div class="adminOverflow">
                  ${movies[i].descriptionAdmin}
                </div>

              </td>
              <td>${movies[i].publicadaInput == true ? 'SI' : 'NO'}</td>
              <td>${movies[i].destacadaInput == true ? 'SI' : 'NO'}</td>
              <td class="editDelFavButtons d-flex">
                <button class="btn btn-light p-1 mx-1" onclick="deleteFunction('${movies[i].id}')" ><img class="trashImg" src="adminImages/trash-can.png"
                    alt=""></button>
                <button class="btn btn-light p-1 mx-1" data-bs-toggle="modal" data-bs-target="#updateModal" onclick="viewUpdate('${movies[i].id}')"><img class="trashImg" src="adminImages/edit.png"
                    alt=""></button>
              </td>
            </tr>








            
            `
        )} 

        
    }
    if (result.innerHTML === '') {
        result.innerHTML+=(`
        <p>Pelicula no encontrada...</p>
        `
        
    )} else {
        
    }

    
}

// boton.addEventListener('click',Filter)
searchMovie.addEventListener('keyup',Filter)

Filter()


