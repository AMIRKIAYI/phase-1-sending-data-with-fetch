document.querySelector("form").addEventListener("submit", postMovie)


    function postMovie(e){
        e.preventDefault()

        let title = document.getElementById("title")
let plot = document.getElementById("plot")
let poster = document.getElementById("poster")

const objectmovie ={
    Title : title.value,
    Plot : plot.value,
    Poster : poster.value,
}

        fetch("http://localhost:3000/movies",{
            method:'POST',
            header:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(objectmovie)
        })
        //.then(response => response.json())
       // .then(console.log("submitted"))
    }



function addmovie(movie){
    console.log(movie)
    let row = document.getElementById("card")
    let div = document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML = `<div class="card">
    <img src="${movie.Poster}" class="card-img-top" alt="..." height="300px">
    <div class="card-body">
      <h5 class="card-title hind-bold ">${movie.Title}</h5>
      <p class="card-text hind-light">${movie.Plot}.</p>
      <a href="#" class="btn btn-primary">Watch</a>
      <button class="btn bg-danger"><i class="fa fa-trash"></i> Trash</button>
    </div>
  </div>`
  

  row.appendChild(div)

  div.querySelector("button").addEventListener("click", function(){
    

    deleteData(movie.id)



  })
}

  function deleteData(id){
   
    fetch(`http://localhost:3000/movies/${id}`, {
            method:'DELETE',
            header:{
                'content-Type':'application/json'
            }
        })
        .then(response => response.json())

  }




function getContent(movies){
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movies =>{
        movies.forEach(addmovie)
       
    })
    
}






document.addEventListener("DOMContentLoaded", function(){
 getContent();



})


