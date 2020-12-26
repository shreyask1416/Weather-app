import '../Style/App.css';
import WeatherConatiner from "./WeatherContainer"
//import moment from 'moment';

function App() {
  //const dateAndTime= moment().format("DD/MM/YYYY HH:mm:ss")
  
  return (

    <section className = "app-container">
     <WeatherConatiner/>
    </section>
  );
}

export default App;
