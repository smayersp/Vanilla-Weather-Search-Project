function refreshWeather(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let temperature = document.querySelector("#temperature");
  let currentHumidity = response.data.temperature.humidity;
  let currentWind = response.data.wind.speed;
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.city;
  temperature.innerHTML = currentTemp;
  humidityElement.innerHTML = currentHumidity;
  windElement.innerHTML = currentWind;
}

function searchCity(city) {
  let apiKey = "ff75abb34ct90a06od4bb7b7d6e9f5a8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
