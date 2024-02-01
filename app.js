let userInput = document.getElementById("search");
let feedHtml = "";
const movieList = document.getElementById("movie-list-section");

document.getElementById("searchBtn").addEventListener("click", function () {
  fetch(
    `http://www.omdbapi.com/?s=${userInput.value}&type=movie&apikey=861f8cc7`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.Search) {
        movieList.innerHTML = `
     <p class="no-results">Unable to find what you're looking for. Please try another search.</p> 
     `;
        return;
      } else {
        movieList.innerHTML = `
     <p class="results">Able to find what you're looking for. </p> 
     `;
        console.log(data.Search);
      }
    });
});
