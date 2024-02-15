function updateTime() {
  // Boston
  let bostonElement = document.querySelector("#boston");
  if (bostonElement) {
    let bostonDateElement = bostonElement.querySelector(".date");
    let bostonTimeElement = bostonElement.querySelector(".time");
    let bostonTime = moment().tz("America/New_York");

    bostonDateElement.innerHTML = bostonTime.format("MMMM D, YYYY");
    bostonTimeElement.innerHTML = bostonTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Fuzhou
  let fuzhouElement = document.querySelector("#fuzhou");
  if (fuzhouElement) {
    let fuzhouDateElement = fuzhouElement.querySelector(".date");
    let fuzhouTimeElement = fuzhouElement.querySelector(".time");
    let fuzhouTime = moment().tz("Asia/Taipei");

    fuzhouDateElement.innerHTML = fuzhouTime.format("MMMM D, YYYY");
    fuzhouTimeElement.innerHTML = fuzhouTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM D, YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".default-cities");
  citiesElement.innerHTML = `
  <div class="cities">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
  </div>
  <a class="homepage"href="">Back</a>`;
}

function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let themeButton = document.querySelector("button");
themeButton.addEventListener("click", changeTheme);

updateTime();
setInterval(updateTime, 1000);

let selectedCityElement = document.querySelector(".dropdown-cities");
selectedCityElement.addEventListener("change", updateCity);
