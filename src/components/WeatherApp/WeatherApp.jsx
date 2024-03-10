import React from 'react';
import { useState } from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import rain_icon from '../Assets/rain.png';
import cloudy_icon from '../Assets/cloudy.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import snowy_icon from '../Assets/snowy.png';
import wind_icon from '../Assets/wind.png';
import sun_icon from '../Assets/sun.png';

const WeatherApp = () => {

  let api_key = "2b89f23355901ba8d46b65540b6d029d";

  const [wicon,setWicon] = useState(rain_icon);

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
    if(element[0].value === "")
    {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("temperature");
    const location = document.getElementsByClassName("location");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" Km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp)+"°c";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n") 
    {
      setWicon(sun_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n" || data.weather[0].icon==="03d" || data.weather[0].icon==="03n" || data.weather[0].icon==="0d" || data.weather[0].icon==="04n")
    {
      setWicon(cloudy_icon);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setWicon(drizzle_icon);
    } 
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" || data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setWicon(rain_icon);
    } 
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setWicon(snowy_icon);
    } 
    else
    {
      setWicon(sun_icon);
    }

  }

  return (
    <div className='container'>
      <div className="search-bar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search-icon" onClick= {() => {search()}}>
          <img src={search_icon} alt="" width="40px" height="40px" />
        </div>
      </div>
      <div className="weather-detail">
        <img src={wicon} alt="" width="175px" height="175px" />
        <div className="temperature">20°c</div>
        <div className="location">LONDON</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" width="50px" height="50px" />
            <div className="data">
              <div className="humidity">7%</div>
              <div className="desc">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" width="50px" height="50px" />
            <div className="data">
              <div className="wind-speed">20Km/hr</div>
              <div className="desc">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;

// import React from 'react'
// import './WeatherApp.css';

// export const WeatherApp = () => {
//   return (
//     <div>WeatherApp</div>
//   )
// }
