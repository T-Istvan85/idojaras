let idojaras = document.querySelector(".idojaras-cont-js");
//dátum------------------------------------------------------
let dat1 = document.querySelector(".datum1");
let dat2 = document.querySelector(".datum2");
let dat3 = document.querySelector(".datum3");
let dat4 = document.querySelector(".datum4");
let dat5 = document.querySelector(".datum5");
let dat6 = document.querySelector(".datum6");
let dat7 = document.querySelector(".datum7");
//hőmérséklet nappal------------------------------------------
let hnap1 = document.querySelector(".hnap1");
let hnap2 = document.querySelector(".hnap2");
let hnap3 = document.querySelector(".hnap3");
let hnap4 = document.querySelector(".hnap4");
let hnap5 = document.querySelector(".hnap5");
let hnap6 = document.querySelector(".hnap6");
let hnap7 = document.querySelector(".hnap7");
//celsius jel nappali------------------------------------------
let cels1 = document.querySelector(".cel1");
let cels2 = document.querySelector(".cel2");
let cels3 = document.querySelector(".cel3");
let cels4 = document.querySelector(".cel4");
let cels5 = document.querySelector(".cel5");
let cels6 = document.querySelector(".cel6");
let cels7 = document.querySelector(".cel7");
//hőmérséklet éjjeli------------------------------------------
let hejj1 = document.querySelector(".hejj1");
let hejj2 = document.querySelector(".hejj2");
let hejj3 = document.querySelector(".hejj3");
let hejj4 = document.querySelector(".hejj4");
let hejj5 = document.querySelector(".hejj5");
let hejj6 = document.querySelector(".hejj6");
let hejj7 = document.querySelector(".hejj7");
//celsius jel éjjeli------------------------------------------
let celsejj1 = document.querySelector(".celejj1");
let celsejj2 = document.querySelector(".celejj2");
let celsejj3 = document.querySelector(".celejj3");
let celsejj4 = document.querySelector(".celejj4");
let celsejj5 = document.querySelector(".celejj5");
let celsejj6 = document.querySelector(".celejj6");
let celsejj7 = document.querySelector(".celejj7");
//szélsebesség-----------------------------------------------
let szels1 = document.querySelector(".szel1");
let szels2 = document.querySelector(".szel2");
let szels3 = document.querySelector(".szel3");
let szels4 = document.querySelector(".szel4");
let szels5 = document.querySelector(".szel5");
let szels6 = document.querySelector(".szel6");
let szels7 = document.querySelector(".szel7");
//szél km/h-----------------------------------------------
let szelkmh1 = document.querySelector(".kmh1");
let szelkmh2 = document.querySelector(".kmh2");
let szelkmh3 = document.querySelector(".kmh3");
let szelkmh4 = document.querySelector(".kmh4");
let szelkmh5 = document.querySelector(".kmh5");
let szelkmh6 = document.querySelector(".kmh6");
let szelkmh7 = document.querySelector(".kmh7");
//csapadék valószínűség-----------------------------------
let csapa1 = document.querySelector(".csap1");
let csapa2 = document.querySelector(".csap2");
let csapa3 = document.querySelector(".csap3");
let csapa4 = document.querySelector(".csap4");
let csapa5 = document.querySelector(".csap5");
let csapa6 = document.querySelector(".csap6");
let csapa7 = document.querySelector(".csap7");
//csapadék százalék--------------------------------------
let szazal1 = document.querySelector(".szaz1");
let szazal2 = document.querySelector(".szaz2");
let szazal3 = document.querySelector(".szaz3");
let szazal4 = document.querySelector(".szaz4");
let szazal5 = document.querySelector(".szaz5");
let szazal6 = document.querySelector(".szaz6");
let szazal7 = document.querySelector(".szaz7");

function lekerdez(result){
  dat1.innerHTML = result.daily.time[0];
  dat2.innerHTML = result.daily.time[1];
  dat3.innerHTML = result.daily.time[2];
  dat4.innerHTML = result.daily.time[3];
  dat5.innerHTML = result.daily.time[4];
  dat6.innerHTML = result.daily.time[5];
  dat7.innerHTML = result.daily.time[6];

  hnap1.innerHTML = result.daily.temperature_2m_max[0];
  hnap2.innerHTML = result.daily.temperature_2m_max[1];
  hnap3.innerHTML = result.daily.temperature_2m_max[2];
  hnap4.innerHTML = result.daily.temperature_2m_max[3];
  hnap5.innerHTML = result.daily.temperature_2m_max[4];
  hnap6.innerHTML = result.daily.temperature_2m_max[5];
  hnap7.innerHTML = result.daily.temperature_2m_max[6];

  cels1.innerHTML = result.daily_units.temperature_2m_max;
  cels2.innerHTML = result.daily_units.temperature_2m_max;
  cels3.innerHTML = result.daily_units.temperature_2m_max;
  cels4.innerHTML = result.daily_units.temperature_2m_max;
  cels5.innerHTML = result.daily_units.temperature_2m_max;
  cels6.innerHTML = result.daily_units.temperature_2m_max;
  cels7.innerHTML = result.daily_units.temperature_2m_max;

  hejj1.innerHTML = result.daily.temperature_2m_min[0];
  hejj2.innerHTML = result.daily.temperature_2m_min[1];
  hejj3.innerHTML = result.daily.temperature_2m_min[2];
  hejj4.innerHTML = result.daily.temperature_2m_min[3];
  hejj5.innerHTML = result.daily.temperature_2m_min[4];
  hejj6.innerHTML = result.daily.temperature_2m_min[5];
  hejj7.innerHTML = result.daily.temperature_2m_min[6];

  celsejj1.innerHTML = result.daily_units.temperature_2m_max;
  celsejj2.innerHTML = result.daily_units.temperature_2m_max;
  celsejj3.innerHTML = result.daily_units.temperature_2m_max;
  celsejj4.innerHTML = result.daily_units.temperature_2m_max;
  celsejj5.innerHTML = result.daily_units.temperature_2m_max;
  celsejj6.innerHTML = result.daily_units.temperature_2m_max;
  celsejj7.innerHTML = result.daily_units.temperature_2m_max;

  szels1.innerHTML = result.daily.wind_speed_10m_max[0];
  szels2.innerHTML = result.daily.wind_speed_10m_max[1];
  szels3.innerHTML = result.daily.wind_speed_10m_max[2];
  szels4.innerHTML = result.daily.wind_speed_10m_max[3];
  szels5.innerHTML = result.daily.wind_speed_10m_max[4];
  szels6.innerHTML = result.daily.wind_speed_10m_max[5];
  szels7.innerHTML = result.daily.wind_speed_10m_max[6];

  szelkmh1.innerHTML = result.daily_units.wind_speed_10m_max;
  szelkmh2.innerHTML = result.daily_units.wind_speed_10m_max;
  szelkmh3.innerHTML = result.daily_units.wind_speed_10m_max;
  szelkmh4.innerHTML = result.daily_units.wind_speed_10m_max;
  szelkmh5.innerHTML = result.daily_units.wind_speed_10m_max;
  szelkmh6.innerHTML = result.daily_units.wind_speed_10m_max;
  szelkmh7.innerHTML = result.daily_units.wind_speed_10m_max;

  csapa1.innerHTML = result.daily.precipitation_probability_max[0];
  csapa2.innerHTML = result.daily.precipitation_probability_max[1];
  csapa3.innerHTML = result.daily.precipitation_probability_max[2];
  csapa4.innerHTML = result.daily.precipitation_probability_max[3];
  csapa5.innerHTML = result.daily.precipitation_probability_max[4];
  csapa6.innerHTML = result.daily.precipitation_probability_max[5];
  csapa7.innerHTML = result.daily.precipitation_probability_max[6];

  szazal1.innerHTML = result.daily_units.precipitation_probability_max;
  szazal2.innerHTML = result.daily_units.precipitation_probability_max;
  szazal3.innerHTML = result.daily_units.precipitation_probability_max;
  szazal4.innerHTML = result.daily_units.precipitation_probability_max;
  szazal5.innerHTML = result.daily_units.precipitation_probability_max;
  szazal6.innerHTML = result.daily_units.precipitation_probability_max;
  szazal7.innerHTML = result.daily_units.precipitation_probability_max;

  console.log(result);
}

fetch("https://api.open-meteo.com/v1/forecast?latitude=47.5849&longitude=18.3932&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max&timezone=Europe%2FBerlin")
  .then(response => response.json())
  .then(result => result)
  .then(lekerdez);