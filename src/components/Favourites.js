import { useState } from "react";
import '../Style/Weather.css'
function Favourites({ info, setinfo }) {
    const [step, setstep] = useState();
    const DeleteInfo = () => {
        if (window.confirm("Do you want to delete this from favourites?")) {
            let newList = [...info];
            newList.splice(step, 1);
            setinfo(newList);
            setstep(step - 1);


        }
    }
    return (
        <div >
            {info.map((menuItem) => {
                const { name, icon, tempC, desc } = menuItem;
                return (
                    <div className="fav">
                        <h1>{name} </h1>
                        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                        <p>{tempC}</p>
                        <p>{desc}</p>
                        <div>
                            <button onClick={DeleteInfo} className="material-icons">favorite</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default Favourites;