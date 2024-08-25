function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
