let userInput = document.getElementById("search");

document.getElementById("search").addEventListener("click", function () {
  console.log(userInput.value);
  fetch(`http://www.omdbapi.com/?s=${userInput.value}&type=movie&apikey=861f8cc7`)
    .then((res) => res.json())
    .then((data) => console.log(data.Search));
});
