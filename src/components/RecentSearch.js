
import '../Style/Weather.css'
function RecentSearch ({rsearch, setrsearch})   { 
 
    return (
        <div >
        {rsearch.map((menu) => {
            const {names, icons, tempCs, descs} = menu;
            return (
                <div className = "fav">
                    <h1>{names} </h1>
                    <img src= {`https://openweathermap.org/img/wn/${icons}@2x.png`} />
                    <p>{tempCs}</p>
                    <p>{descs}</p>
                    <div> 
                    <button   className = "material-icons">favorite</button>
                    </div>
                </div>
            )
        })}
    </div>
   
    )
} 

export default RecentSearch;