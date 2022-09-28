let isError = false;
let city = document.querySelector("#city");
const btn = document.querySelector("#submit");

const getWeather = async function () {
  const API_KEY = "b8bd59d8cfb70eee06f98d68a4554461";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
    }
    const data = await res.json();
    renderWeather(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const renderWeather = (data) => {
  const weatherCard = document.querySelector(".weather-cart");

  if (isError) {
    weatherCard.innerText = `weather conditions  cannot be fetched`;
  }

  const {
    name,
    main: { feels_like, temp, temp_max, temp_min, humidity },
    weather: { main, description, icon },
    wind: { speed },
  } = data;

  weatherCard.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${city.toUpperCase()}  
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Temperature: ${temp}  Feels Like ${feels_like}</li>
      <li class="list-group-item"> Wind: ${speed}   </li>
      <li class="list-group-item"> ${data.weather[0].icon}  ${
    data.weather[0].description
  }   </li>
      <li class="list-group-item">Humidity: ${humidity}</li>
    </ul>
    </div>"`;
  console.log(city.value);
};
btn.addEventListener("click", () => {
  city = city.value;
  getWeather();
});
