let idojaras = document.querySelector(".idojaras-cont-js");



fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tatab%C3%A1nya?unitGroup=metric&key=YOUR_API_KEY&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
