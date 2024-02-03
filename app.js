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
       let searchList = data.Search.map(movie => movie.Title)
       console.log(searchList)
       for (let i = 0; i < searchList.length; i++){
        fetch(`https://www.omdbapi.com/?t=${searchList[i]}&apikey=861f8cc7`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
       }
      }
    });
});
