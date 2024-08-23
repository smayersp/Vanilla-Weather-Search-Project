function handleSearchSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city");
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
