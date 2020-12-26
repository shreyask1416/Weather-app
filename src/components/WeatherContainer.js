import React, { useState } from "react";
import "../Style/Weather.css";
import WeatherInfo from "./WeatherInfo";
import { BrowserRouter as Router, Link,Switch ,Route } from "react-router-dom";

function WeatherConatiner() {
    const API_KEY = 'd2fd5c50f1d3fc3d7d579c42bd4b9c2d';
    const [searchQuery, setSearchQuery] = useState('');
    const [weatherdata, setweatherdata] = useState({
        tempC: null,
        tempF: null,
        humidity: null,
        wind: null,
        Visiblity: null,
        min: null,
        max: null,
        Precipitation: null,
        icon: null,
        iconurl: null,
        description: null,
        city: null,
        details: null

    });
    const dateBuilder = (d) => {
        let months = [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        let days = [
            "Sun",
            "Mon",
            "Tues",
            "Wed",
            " Thur",
            "Fri",
            "Sat",
        ];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day},${date} ${month} ${year}`;
    };


    function timeBuilder(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    function updateSearchQuery(event) {
        let name = event.target.value;
        setSearchQuery(name)

    }

    function getWeatherdata() {

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

    function convertToFarenheit(temp) {
        return ((temp - 273.15) * (9.0 / 5.0) + 32).toFixed(0);
    }

    function convertToCelius(temp) {
        return (temp - 273.15).toFixed(2)
    }


    return (
        <div className="weather-container">
            <div className="header-container">
                <div className="weather-header">

                    <h3> <i className="material-icons"> wb_sunny</i>Weather</h3>
                    <header className="search-container">

                        <input
                            placeholder="Search"
                            className="search-input"
                            onChange={updateSearchQuery}
                        />
                        <button onClick={getWeatherdata} className="material-icons">search</button>

                    </header>
                </div>
            </div>
            <div className="date"><p>{dateBuilder(new Date())}</p> <p>{timeBuilder(new Date())}</p></div>

            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/Favourites">Favourites</Link>
                        </li>
                        <li>
                            <Link to="/Recent-Search">Recent Search</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                  <Route exact path = "/"></Route>
                  <Route exact to= "/Favourites" > </Route>
                  <Route exact path = "/Recent-Search"></Route>
              </Switch>
            </Router>
            <section className="weather-info">
                {weatherdata.temp === null ? (
                    <p>No weather to display <i className="material-icons"> wb_sunny</i></p>
                ) : <WeatherInfo data={weatherdata} />}
            </section>
        </div>
    )
}

export default WeatherConatiner;