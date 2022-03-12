// WeatherDisplay.js
// import './App.css';
import { useState } from "react"
import ExtraWeatherInfo from "./ExtraWeatherInfo"


function WeatherDisplay(props) {

    const [active, setActive] = useState(false);

    document.body.addEventListener("submit", function() {
        setActive(!active)
    })

    let classTest = active.toString() + `Flip`
    const temp = props.forecast
    let icon = `http://openweathermap.org/img/wn/${props.weatherIcon.icon}@2x.png`
    let cardImage = props.weatherIcon.main
    
    return (
        <div className={`weatherDisplayContainer ${classTest}`} style={props.city === "" ? { visibility: "hidden", opacity: 0 } : { opacity: 1, visibility: "visible", backgroundImage: `url("/${cardImage}.png")`}}>

            {props.city !== "" ? <img className="iconImage" src={icon} alt="" /> : null}      

                <div className="forecastInfo">
                    <p className='cityName' style={props.city === "" ? { visibility: "hidden" } : { visibility: "visible"}}>

                        {props.city === "" ? "City Name" : props.city + ","}

                    </p>
                    <p className="countryName" style={props.country === "" ? { visibility: "hidden" } : { visibility: "visible" }}>

                        {props.country === "" ? "ZZ" : props.country}

                    </p>
                </div>
                <p className="localTime">Local Time: {props.time}</p>
                <p className="forecastDescription" style={props.weatherIcon.description === "" ? { visibility: "hidden" } : { visibility: "visible" }}>

                        {props.weatherIcon.description}
                        
                </p>

            <div className="weatherResult">
                <p className='forecastDisplay'>{Number(temp).toFixed(1)} <span className="tempUnits">°C</span></p>
            </div>
            <ExtraWeatherInfo
            wind={props.windSpeed}
            minTemp={props.min}
            maxTemp={props.max}
            />
        </div>
    )
}

export default WeatherDisplay