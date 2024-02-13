function updateTime() {
  // Boston
  let bostonElement = document.querySelector("#boston");
  let bostonDateElement = bostonElement.querySelector(".date");
  let bostonTimeElement = bostonElement.querySelector(".time");
  let bostonTime = moment().tz("America/New_York");

  bostonDateElement.innerHTML = bostonTime.format("MMMM D, YYYY");
  bostonTimeElement.innerHTML = bostonTime.format("h:mm:ss [<small>]A[</small>]");

  // Fuzhou
  let fuzhouElement = document.querySelector("#fuzhou");
  let fuzhouDateElement = fuzhouElement.querySelector(".date");
  let fuzhouTimeElement = fuzhouElement.querySelector(".time");
  let fuzhouTime = moment().tz("Asia/Taipei");

  fuzhouDateElement.innerHTML = fuzhouTime.format("MMMM D, YYYY");
  fuzhouTimeElement.innerHTML = fuzhouTime.format("h:mm:ss [<small>]A[</small>]");

  // Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format("MMMM D, YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
