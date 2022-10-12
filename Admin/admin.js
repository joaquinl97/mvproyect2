let filmNameAdmin = document.getElementById("filmNameAdmin");
let optionsAdmin = document.getElementById("optionsAdmin");
let descriptionAdmin = document.getElementById("descriptionAdmin");

let imageAdmin = document.getElementById("imageAdmin");
let videoAdmin = document.getElementById("videoAdmin");

let buttonSaveAdmin = document.getElementById("buttonSaveAdmin");
let viewMoviesAdmin = document.getElementById("viewMoviesAdmin");

let movies =JSON.parse(localStorage.getItem('movies')) || [];

//Create
buttonSaveAdmin.addEventListener("click", () => {
    if (filmNameAdmin.value != "" && optionsAdmin.value != "" && descriptionAdmin.value != "") {
        movies.push({
            id: Math.round(Math.random() * 1000000),
            filmNameAdmin:filmNameAdmin.value,
            optionsAdmin: optionsAdmin.value,
            descriptionAdmin: descriptionAdmin.value,
            imageAdmin: imageAdmin.value,
            videoAdmin: videoAdmin.value,
        })
        localStorage.setItem('movies', JSON.stringify(movies));
        filmNameAdmin.value='';
        optionsAdmin.value='';
        descriptionAdmin.value='';
        imageAdmin.value='';
        videoAdmin.value='';
        readFunction()

        window.location.href = "../index.html"


    } else{
        alert('Completar campos')
    }
})

//Read
const readFunction= ()=> {
    let movies =JSON.parse(localStorage.getItem('movies'))||[];
    let showMovies=[]
    movies.map((item)=> {
        showMovies.push(`
        <tr class="rowAdmin">
              <th scope="row">${item.id}</th>
              <td>${item.filmNameAdmin}</td>
              <td>${item.optionsAdmin}</td>
              <td>

                <div class="adminOverflow">
                  ${item.descriptionAdmin}
                </div>

              </td>
              <td>check</td>
              <td class="editDelFavButtons d-flex">
                <button class="btn btn-danger p-1 mx-1"><img class="trashImg" src="adminImages/trash-can.png"
                    alt=""></button>
                <button class="btn btn-success p-1 mx-1"><img class="trashImg" src="adminImages/edit.png"
                    alt=""></button>
                <button class="btn btn-warning p-1 mx-1"><img class="trashImg" src="adminImages/star.png"
                    alt=""></button>

              </td>
            </tr>
        `)
    })
    viewMoviesAdmin.innerHTML=showMovies.join('')
}
readFunction()

//Update
let updateFilmNameAdmin

const updateFunction =()=> {

}
