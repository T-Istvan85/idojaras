let varosok = document.getElementById("varos");
async function gpsido() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(idoLekerdezes);
  } else {
    varosok.innerText = "a böngészője nem támogatja a helymeghatározást";
  }
  function idoLekerdezes(pozicio) {
fetch("https://api.opencagedata.com/geocode/v1/json?q=" + pozicio.coords.latitude + "+" + pozicio.coords.longitude + "&key=03c48dae07364cabb7f121d8c1519492&no_annotations=1&language=en")
.then((varosom) => varosom.json())
.then((varosadatok) => {
  varosok.innerText = varosadatok.results[0].formatted;
});
    let ido = document.querySelector(".idojaras-tabela");
    ido.classList.remove("hidden")
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      pozicio.coords.latitude +
      "&longitude=" +
      pozicio.coords.longitude +
      "&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max&timezone=Europe%2FBerlin"
    )
      .then((valasz) => valasz.json())
      .then((adat) => {
        adat.daily.time.forEach(function (time, index) {
          let ido1 = ido.rows[index].cells[0];
          let ido2 = ido.rows[index].cells[1];
          let ido3 = ido.rows[index].cells[2];
          let ido4 = ido.rows[index].cells[3];
          let ido5 = ido.rows[index].cells[4];
          let ido6 = ido.rows[index].cells[5];
          let datum = time;
          let tempmax =
            "Max hőmérséklet:  " +
            adat.daily.temperature_2m_max[index] +
            adat.daily_units.temperature_2m_max;
          let tempmin =
            "Min hőmérséklet:  " +
            adat.daily.temperature_2m_min[index] +
            adat.daily_units.temperature_2m_min;
          let szelseb =
            "Szélsebesség:  " +
            adat.daily.wind_speed_10m_max[index] +
            adat.daily_units.wind_speed_10m_max;
          let csapval =
            "Csapadék valószínűség:  " +
            adat.daily.precipitation_probability_max[index] +
            adat.daily_units.precipitation_probability_max;
          let csapmeny =
            "Csapadék mennyiség:  " +
            adat.daily.precipitation_sum[index] +
            adat.daily_units.precipitation_sum;
          let dat = document.createTextNode(datum);
          let tempma = document.createTextNode(tempmax);
          let tempmi = document.createTextNode(tempmin);
          let szelse = document.createTextNode(szelseb);
          let csapva = document.createTextNode(csapval);
          let csapme = document.createTextNode(csapmeny);

          ido1.replaceChild(dat, ido1.childNodes[0]);
          ido2.replaceChild(tempma, ido2.childNodes[0]);
          ido3.replaceChild(tempmi, ido3.childNodes[0]);
          ido4.replaceChild(szelse, ido4.childNodes[0]);
          ido5.replaceChild(csapva, ido5.childNodes[0]);
          ido6.replaceChild(csapme, ido6.childNodes[0]);
        });
      })
  };
}
async function ido(varosadat) {
  let ido = document.querySelector(".idojaras-tabela");
  ido.classList.remove("hidden")
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
    varosadat.results[0].latitude +
    "&longitude=" +
    varosadat.results[0].longitude +
    "&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max&timezone=Europe%2FBerlin"
  )
    .then((valasz) => valasz.json())
    .then((adat) => {
      adat.daily.time.forEach(function (time, index) {
        let ido1 = ido.rows[index].cells[0];
        let ido2 = ido.rows[index].cells[1];
        let ido3 = ido.rows[index].cells[2];
        let ido4 = ido.rows[index].cells[3];
        let ido5 = ido.rows[index].cells[4];
        let ido6 = ido.rows[index].cells[5];
        let datum = time;
        let tempmax =
          "Max hőmérséklet:  " +
          adat.daily.temperature_2m_max[index] +
          adat.daily_units.temperature_2m_max;
        let tempmin =
          "Min hőmérséklet:  " +
          adat.daily.temperature_2m_min[index] +
          adat.daily_units.temperature_2m_min;
        let szelseb =
          "Szélsebesség:  " +
          adat.daily.wind_speed_10m_max[index] +
          adat.daily_units.wind_speed_10m_max;
        let csapval =
          "Csapadék valószínűség:  " +
          adat.daily.precipitation_probability_max[index] +
          adat.daily_units.precipitation_probability_max;
        let csapmeny =
          "Csapadék mennyiség:  " +
          adat.daily.precipitation_sum[index] +
          adat.daily_units.precipitation_sum;

        let dat = document.createTextNode(datum);
        let tempma = document.createTextNode(tempmax);
        let tempmi = document.createTextNode(tempmin);
        let szelse = document.createTextNode(szelseb);
        let csapva = document.createTextNode(csapval);
        let csapme = document.createTextNode(csapmeny);

        ido1.replaceChild(dat, ido1.childNodes[0]);
        ido2.replaceChild(tempma, ido2.childNodes[0]);
        ido3.replaceChild(tempmi, ido3.childNodes[0]);
        ido4.replaceChild(szelse, ido4.childNodes[0]);
        ido5.replaceChild(csapva, ido5.childNodes[0]);
        ido6.replaceChild(csapme, ido6.childNodes[0]);
      });
    });
}
document.querySelector("#lekerdgomb").addEventListener("click", function () {
  let varos = document.getElementById("varos-kereses").value;
  fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + varos)
    .then((valasz) => valasz.json())
    .then((varosadat) => {
      if (Array.isArray(varosadat.results) && varosadat.results.length > 0) {
        varosok.innerText = varosadat.results[0].name;
        ido(varosadat)
      }
      else {
        varosok.innerText = "nincs ilyen város"
      }
    });
});

