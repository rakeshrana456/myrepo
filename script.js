const apiKey = "a2d0edc86dd50811123db13a38af0cc0";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
  try {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
  } catch (error) {
    if (!city.ok) {
      alert("city not found");
    }
  }
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
