const movieList = document.getElementById("movie-list-section");
let searchList = [];
let feedHtml = "";
let requestUrl = '';



document.getElementById("searchBtn").addEventListener("click", function () {
  let userInput = document.getElementById("search");
  //first fetch titles of movies
  fetch(
    `http://www.omdbapi.com/?s=${userInput.value}&type=movie&apikey=861f8cc7`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.Search) {
        movieList.innerHTML = `
     <p class="no-results">Unable to find what you're looking for. Please try another search.</p> 
     `;
      }
      
      else {
         
        // save titles in the array and iterate through it
        searchList = data.Search.map((movie) => movie.Title);

        for (let i = 0; i < searchList.length; i++) {
          fetch(`https://www.omdbapi.com/?t=${searchList[i]}&apikey=861f8cc7`)
            .then((res) => res.json())
            .then((data) => {
             
              feedHtml += `
        <div class="movie-card">
            <div class="left">
               <img src="${data.Poster}" class="poster" />
            </div>
        <div class="right">
          <div class="title">
            <h3>${data.Title}</h3>
            <div class ="rating">
            <i class="fa-solid fa-star" style="color: #ffd91a;"></i>
            <p>${data.imdbRating}</p>
            </div>
          </div>
          <div class="middle-part">
            <p>${data.Runtime}</p>
            <p>${data.Genre}</p>
            <div class="add-movie">
            <button class="btn">
              <i data-id="${data.imdbID}" class="fa-solid fa-circle-plus"></i>
                        </button>
            <p>Whatchlist</p>
            </div>
          </div>
          <div class="description">
            <p>${data.Plot}</p>
          </div>
        </div>
      </div>
              `;
              movieList.innerHTML = feedHtml;
             
            });
        }
      }
    });
  });
  
  
  function getMovieDetails(movieID) {
    requestUrl = `https://www.omdbapi.com/?i=${movieId}&type=movie&apikey=861f8cc7`;
    fetch(requestUrl)
    .then(res => res.json())
    .then(data=> console.log(data))
  }
  
