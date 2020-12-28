import React from "react";
import "../Style/Weather.css";
import {FaTemperatureHigh,FaWind, FaCloudRain} from "react-icons/fa"
import {FiDroplet} from "react-icons/fi"
import {MdVisibility} from "react-icons/md"


function WeatherInfo(props) {
    const {tempC, tempF,humidity, min, max,Visiblity,Precipitation, icon, wind, description,details, city} =props.data;
    return (
      <React.Fragment>
       
      <div className ="city-container">
          <p> {city} </p>
      </div>
      <header> 
          <h3>{description}</h3>
          <div className = "header-desription"> 
          <p> {details}</p>
          <img src= {`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          <h4>Temperature</h4>
          <div className ="temperature"> 
          <p>{tempC} <span className = "degree-symbol">C</span></p>
          <p>{tempF} <span className ="degree-symbol">F</span></p>
          </div>
          </div>
          </header>
          
          <footer id = "main-footer" class = "py-2">
          <div>--------------------------------------------------------------------------</div>
          <div className = "container"> 
          <div >  
                  <h4> <FaTemperatureHigh/>Min-Max</h4>
                  <p>{min}-{max}</p>
              </div>
              <div>
                  <h4> <FiDroplet /> Humidity</h4>
                  <p>{humidity}</p>
              </div>
              <div>
                  <h4> <FaCloudRain />Precipitation</h4>
                  <p>{Precipitation}</p>
              </div>
              <div>
              <h4> <FaWind /> Wind</h4>
                  <p>{wind}</p>
              </div>
              
              <div>
              <h4> <MdVisibility /> Visiblity</h4>
                  <p>{Visiblity}</p>
              </div>
              </div>
          </footer>
      </React.Fragment>
      
    );
}

export default WeatherInfo;