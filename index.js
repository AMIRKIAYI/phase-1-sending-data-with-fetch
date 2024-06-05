


function addmovie(movie){
    console.log(movie)
    let row = document.getElementById("card")
    let div = document.createElement("div")
    div.classList.add("col-3")
    div.innerHTML = `<div class="card">
    <img src="${movie.Poster}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title hind-bold ">${movie.Title}</h5>
      <p class="card-text hind-light ">${movie.Plot}.</p>
      <a href="#" class="btn btn-primary">Watch</a>
    </div>
  </div>`
  

  row.appendChild(div)
 
 



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
