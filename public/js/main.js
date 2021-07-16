let submitBtn = document.getElementById("submitBtn");
let temp_form = document.getElementById("temp_form");
let temp = document.getElementById("temp");
let temp_span = document.getElementById("temp_span");
let t_detail = document.getElementById("t-detail");
let temp_status = document.getElementById("temp_status");

async function getInfo(event) {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    t_detail.innerText = `Please write the name before search`;
  } else {
    try {
      let apiKey = "b9265c2c33e29a0115df0610439f899b";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${apiKey}`;
      let response = await fetch(url);
      let data = await response.json();

      let cel = data.main.temp;
      let loc = `${data.name}, ${data.sys.country}`;
      temp_span.innerHTML = `${cel.toFixed(0)}°C`;
      t_detail.innerHTML = `${loc}`;
    } catch (error) {
      t_detail.innerText = `Please enter the city name properly`;
    }
  }
}

submitBtn.addEventListener("click", getInfo);
