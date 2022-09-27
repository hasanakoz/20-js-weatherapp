let isError = false;
cityName = "London";
const getWeather = async function () {
  const API_KEY = `b8bd59d8cfb70eee06f98d68a4554461`;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid = ${API_KEY}`;

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

const renderWeather = () => {};
getWeather();
