import '../Style/App.css';
import WeatherConatiner from "./WeatherContainer";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Favourites from './Favourites';
import RecentSearch from './RecentSearch';
import React, { useState } from "react";
import {useLocalStorageState} from "./useLocalStorageState"

function App() {
    const [info, setinfo] = useState([]);
    const [rsearch, setrsearch] = useState([]);
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
    return (
        <section className="app-container">
            <div className="logo">
            </div>
            <div className='page'>
                <div className="date">
                    <div >{dateBuilder(new Date())} {timeBuilder(new Date())}</div>
                </div>
                <Router>
                    <div >
                        <nav >
                            <ul>
                                <li>
                                    <Link
                                        activeStyle={{
                                            fontweight: 'bold',
                                            color: 'grey'
                                        }}
                                        to="/">Home</Link>
                                </li>
                                <li>
                                    <Link
                                        activeStyle={{
                                            fontweight: 'bold',
                                            color: 'magenta'
                                        }} to="/Favourites">Favourite</Link>
                                </li>
                                <li>
                                    <Link
                                        activeStyle={{
                                            fontweight: 'bold',
                                            color: 'green'
                                        }} to="/RecentSearch">Recent Search</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route exact path="/"><WeatherConatiner info={info} setinfo={setinfo} rsearch={rsearch} setrsearch={setrsearch} /></Route>
                            <Route exact path="/Favourites" > <Favourites info={info} setinfo={setinfo} /> </Route>
                            <Route exact path="/RecentSearch"><RecentSearch rsearch={rsearch} setrsearch={setrsearch} /></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </section>
    );
}

export default App;

