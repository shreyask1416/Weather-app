import React, { useState } from "react";
import '../Style/Weather.css'
import { useLocalStorageState } from "./useLocalStorageState";
function Favourites({ info, setinfo }) {
    const [s, setS] = useState();
    const removeall = () => {
        if (window.confirm("Do you want to delete these from favourites?")) {
            let del = [...info];
            del.splice(s);
            setinfo(del);
            setS(s - 1);
        }
    }
    return (
        <div >
            <div>
            <p>{info.length}city is added to favourites</p>
                <button onClick={removeall} className="remove">Remove all</button>
            </div>
            {info.map((menuItem) => {
                const { name, icon, tempC, desc } = menuItem;

                return (
                    < div className="fav">
                        <h1>{name} </h1>
                        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                        <p>{tempC}</p>
                        <p>{desc}</p>
                        <div>
                            <button  className="material-icons">favorite</button>
                        </div>
                        <div />
                    </div>
                )
            })}
        </div>
    )

}

export default Favourites;