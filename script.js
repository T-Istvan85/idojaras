let idojaras = document.querySelector(".idojaras-cont-js");
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
//hőmérséklet éjjel------------------------------------------
let hejj1 = document.querySelector(".hejj1");
let hejj2 = document.querySelector(".hejj2");
let hejj3 = document.querySelector(".hejj3");
let hejj4 = document.querySelector(".hejj4");
let hejj5 = document.querySelector(".hejj5");
let hejj6 = document.querySelector(".hejj6");
let hejj7 = document.querySelector(".hejj7");
//celsius jel nap------------------------------------------
let cels1 = document.querySelector(".cel1");
let cels2 = document.querySelector(".cel2");
let cels3 = document.querySelector(".cel3");
let cels4 = document.querySelector(".cel4");
let cels5 = document.querySelector(".cel5");
let cels6 = document.querySelector(".cel6");
let cels7 = document.querySelector(".cel7");
//celsius jel éjj------------------------------------------
let celsejj1 = document.querySelector(".celejj1");
let celsejj2 = document.querySelector(".celejj2");
let celsejj3 = document.querySelector(".celejj3");
let celsejj4 = document.querySelector(".celejj4");
let celsejj5 = document.querySelector(".celejj5");
let celsejj6 = document.querySelector(".celejj6");
let celsejj7 = document.querySelector(".celejj7");




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

  hejj1.innerHTML = result.daily.temperature_2m_min[0];
  hejj2.innerHTML = result.daily.temperature_2m_min[1];
  hejj3.innerHTML = result.daily.temperature_2m_min[2];
  hejj4.innerHTML = result.daily.temperature_2m_min[3];
  hejj5.innerHTML = result.daily.temperature_2m_min[4];
  hejj6.innerHTML = result.daily.temperature_2m_min[5];
  hejj7.innerHTML = result.daily.temperature_2m_min[6];

  cels1.innerHTML = result.daily_units.temperature_2m_max;
  cels2.innerHTML = result.daily_units.temperature_2m_max;
  cels3.innerHTML = result.daily_units.temperature_2m_max;
  cels4.innerHTML = result.daily_units.temperature_2m_max;
  cels5.innerHTML = result.daily_units.temperature_2m_max;
  cels6.innerHTML = result.daily_units.temperature_2m_max;
  cels7.innerHTML = result.daily_units.temperature_2m_max;

  celsejj1.innerHTML = result.daily_units.temperature_2m_max;
  celsejj2.innerHTML = result.daily_units.temperature_2m_max;
  celsejj3.innerHTML = result.daily_units.temperature_2m_max;
  celsejj4.innerHTML = result.daily_units.temperature_2m_max;
  celsejj5.innerHTML = result.daily_units.temperature_2m_max;
  celsejj6.innerHTML = result.daily_units.temperature_2m_max;
  celsejj7.innerHTML = result.daily_units.temperature_2m_max;

  console.log(result);
}

fetch("https://api.open-meteo.com/v1/forecast?latitude=47.5849&longitude=18.3932&current=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_hours,wind_speed_10m_max&timezone=Europe%2FBerlin")
  .then(response => response.json())
  .then(result => result)
  .then(lekerdez);