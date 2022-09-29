// let isError = false;
let city = document.querySelector("#city");
const btn = document.querySelector("#submit");
const form = document.querySelector("form");
const weatherCard = document.querySelector(".weather-cart");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather();
});

const getWeather = async function () {
  const units = "metric";
  const cityValue = city.value;

  const API_KEY = "b8bd59d8cfb70eee06f98d68a4554461";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=${units}&appid=${API_KEY}`;
  try {
    const res = await fetch(url);
    // if (!res.ok) {
    //   throw new Error();
    //   // isError = true;
    // }
    const data = await res.json();
    console.log(data);

    const {
      name,
      main: { feels_like, temp, temp_max, temp_min, humidity },
      weather: { main, description, icon },
      wind: { speed },
    } = data;
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let list = document.createElement("li");

    // citiesEntered = document.querySelectorAll(".card-header");
    // let cityList = [];
    // citiesEntered.forEach((element) => {
    //   cityList.push(element.innerText);
    // });
    // let filteredCityList = cityList.filter(
    //   (i) => (i = cityValue.toUpperCase())
    // );
    // if (filteredCityList.length > 0) {
    //   list.innerText = "YOU HAVE ALREADY ENTERED";
    //   return;
    //   form.reset();
    // }

    list.innerHTML += `<div class="card bg-light" style="width: 18rem;">
      <div class="card-header">
        ${cityValue.toUpperCase()}  
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature: ${temp}  Feels Like ${feels_like}</li>
        <li class="list-group-item"> Wind: ${speed}   </li>
        <li class="list-group-item"> <img src="${iconUrl}"</li>
        <li class="list-group-item">Humidity: ${humidity}</li>
        <li class="list-group-item"> ${data.weather[0].description}   </li>
      </ul>
      </div>`;
    document.querySelector(".weather-cart ul").prepend(list);
    form.reset();
  } catch (error) {
    weatherCard.innerText = `weather conditions  cannot be fetched`;
  }
};
