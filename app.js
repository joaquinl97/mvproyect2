let filmNameAdmin = document.getElementById("filmNameAdmin");
let optionsAdmin = document.getElementById("optionsAdmin");
let descriptionAdmin = document.getElementById("descriptionAdmin");

let imageAdmin = document.getElementById("imageAdmin");
let videoAdmin = document.getElementById("videoAdmin");

let buttonSaveAdmin = document.getElementById("buttonSaveAdmin");
let viewMoviesAdmin = document.getElementById("viewMoviesAdmin");

let movies =JSON.parse(localStorage.getItem('movies')) || [];

//Read

function readFunction() {
    let moviesViewJson = []

    if (movies !== []) {
        for (let item = 0; item < movies.length; item++) {
            // if (movies[item].optionsAdmin=="Ficcion") {
            //     moviesViewJson.push(`
            //     <h4>${movies[item].optionsAdmin}</h4>
            //     <a href="${movies[item].videoAdmin}">
            //     <div class="cardImgMovie m-4">
            //         <div>
            //           <img class="imgMovie" src="${movies[item].imageAdmin}" alt="" srcset="">
            //         </div>
            //         <div class="bg-dark">
            //             <p class="text-light text-center">
            //                 <i class="text-light text-center">${movies[item].filmNameAdmin}</i>
            //             </p>
            //         </div>
            //     </div>
            //     </a>
            //     `)    
            // }else if (movies[item].optionsAdmin=="Terror"){
            //     moviesViewJson.push(`
            //     <h4>${movies[item].optionsAdmin}</h4>
            //     <a href="${movies[item].videoAdmin}">
            //     <div class="cardImgMovie m-4">
            //         <div>
            //           <img class="imgMovie" src="${movies[item].imageAdmin}" alt="" srcset="">
            //         </div>
            //         <div class="bg-dark">
            //             <p class="text-light text-center">
            //                 <i class="text-light text-center">${movies[item].filmNameAdmin}</i>
            //             </p>
            //         </div>
            //     </div>
            //     </a>
            //     `)  
            // }

            let resultFilter2=movies.filter((item)=> item.optionsAdmin=="Terror")
            moviesViewJson.push(`
            <h4>${resultFilter2}</h4>
            <a href="${movies[item].videoAdmin}">
            <div class="cardImgMovie m-4">
                <div>
                  <img class="imgMovie" src="${movies[item].imageAdmin}" alt="" srcset="">
                </div>
                <div class="bg-dark">
                    <p class="text-light text-center">
                        <i class="text-light text-center">${movies[item].filmNameAdmin}</i>
                    </p>
                </div>
            </div>
            </a>
            `)
            
        }
     
            
            

            // let resultFilter3=movies.filter((item)=> item.optionsAdmin=="Comedia")
            // moviesViewJson.push(`
            // <h4>${resultFilter3}</h4>
            // <a href="${movies[item].videoAdmin}">
            // <div class="cardImgMovie m-4">
            //     <div>
            //       <img class="imgMovie" src="${movies[item].imageAdmin}" alt="" srcset="">
            //     </div>
            //     <div class="bg-dark">
            //         <p class="text-light text-center">
            //             <i class="text-light text-center">${movies[item].filmNameAdmin}</i>
            //         </p>
            //     </div>
            // </div>
            // </a>
            // `)

            // let resultFilter4=movies.filter((item)=> item.optionsAdmin=="Musical")
            // moviesViewJson.push(`
            // <h4>${resultFilter4}</h4>
            // <a href="${movies[item].videoAdmin}">
            // <div class="cardImgMovie m-4">
            //     <div>
            //       <img class="imgMovie" src="${movies[item].imageAdmin}" alt="" srcset="">
            //     </div>
            //     <div class="bg-dark">
            //         <p class="text-light text-center">
            //             <i class="text-light text-center">${movies[item].filmNameAdmin}</i>
            //         </p>
            //     </div>
            // </div>
            // </a>
            // `)

            // let resultFilter5=movies.filter((item)=> item.optionsAdmin=="Drama")
            // moviesViewJson.push(`
            // <h4>${resultFilter5}</h4>
            // <a href="${movies[item].videoAdmin}">
            // <div class="cardImgMovie m-4">
            //     <div>
            //       <img class="imgMovie" src="${movies[item].imageAdmin}" alt="" srcset="">
            //     </div>
            //     <div class="bg-dark">
            //         <p class="text-light text-center">
            //             <i class="text-light text-center">${movies[item].filmNameAdmin}</i>
            //         </p>
            //     </div>
            // </div>
            // </a>
            // `)
        
        
    } else {
        swal("Error", "No hay peliculas disponibles", "error");
    }
    viewMoviesAdmin.innerHTML = moviesViewJson.join('');
}



readFunction()