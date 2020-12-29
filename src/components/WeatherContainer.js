import React, { useState } from "react";
import "../Style/Weather.css";
import WeatherInfo from "./WeatherInfo";
import {useLocalStorageState} from './useLocalStorageState';

function WeatherConatiner({ info, setinfo, rsearch, setrsearch }) {
    const API_KEY = '95e28a2d85088fba5803a098a4ffc732';
    const [searchQuery, setSearchQuery] = useState();
    const [weatherdata, setweatherdata] = useState([]);

    function updateSearchQuery(event) {
    
        let name = event.target.value;
        setSearchQuery(name);
        
    }
    const recentSearch = () => {
        let Information = rsearch.concat({ names: weatherdata.city, icons: weatherdata.icon, tempCs: weatherdata.tempC, descs: weatherdata.details });
        console.log(Information);
        setrsearch(Information);
    }

    function getWeatherdata() {
        if(searchQuery == ""){
            alert("add");
            
        }
else
{  
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`).then(response => response.json())
            .then(data => setweatherdata({
                tempC: convertToCelius(data.main.temp),
                tempF: convertToFarenheit(data.main.temp),
                humidity: data.main.humidity,
                min: data.main.temp_min,
                max: data.main.temp_max,
                Visiblity: data.visibility,
                Precipitation: data.main.pressure,
                icon: data.weather[0].icon,
                wind: data.wind.speed,
                city: data.name,
                details: data.weather[0].description,
                description: data.weather[0].main

            }))

    }
    }
    function convertToFarenheit(temp) {
        return ((temp - 273.15) * (9.0 / 5.0) + 32).toFixed(0);
    }

    function convertToCelius(temp) {
        return (temp - 273.15).toFixed(0)
    }
    return (
        <div className="weather-container">
            <div className="header-container">
                <div className="weather-header">


                    <header className="search-container">

                        <input
                            placeholder="Search"
                            className="search-input"
                            onChange={updateSearchQuery}
                        />
                        <button onClick={() => {
                            getWeatherdata(); recentSearch();
                        }} className="material-icons">search </button>

                    </header>

                </div>
            </div>
            <section className="weather-info">
                {weatherdata.temp === null ? (
                    <p>No weather to display </p>
                ) : <div className="weather-information"> <WeatherInfo data={weatherdata} />
                        <div className="iccons">
                             <button className="material-icons" onClick={() => {
                                let newList = info.concat({ name: weatherdata.city, icon: weatherdata.icon, tempC: weatherdata.tempC, desc: weatherdata.details }); alert("Ädded to favourites");
                                console.log(newList);
                                setinfo(newList);
                            }}>favorite add
                           
                 </button></div>
            </div>
                }

            </section>
        </div>
    )

}
export default WeatherConatiner;