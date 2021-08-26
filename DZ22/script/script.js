function showWeather() {
  let cityInp = document.getElementById(`city`);
  let inoutValue = cityInp.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inoutValue}&units=metric&appid=ed12b480953dfe70f7f30d4236c085d9`
  )
    .then((response) => response.json())

    .then((res) => {
      document.querySelector(".city").innerHTML = res.name;

      document.querySelector(".temp").innerHTML = res.main.temp;

      document.querySelector(".humidity").innerHTML = res.main.humidity;

      document.querySelector(".wind").innerHTML = res.wind.speed;
    })
    .catch((error) => console.log(error));
}
