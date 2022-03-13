// WeatherDisplay.js
import { useState } from "react"
// component import
import ExtraWeatherInfo from "./ExtraWeatherInfo"

function WeatherDisplay(props) {
    
    // state that changes on submit event listener that adds classes to .weatherDisplayContainer for visibility
    const [active, setActive] = useState(false);
    document.body.addEventListener("submit", function() {
        setActive(!active)
    })
    // uses the "true" and "false" state to be added as a class after being converted to string
    let classTest = active.toString() + `Flip`
    // this prop had to be converted to a variable so that I can use toFixed() on line 42
    const temp = props.forecast
    // uses the name of a forecast to change between images of that same name
    let icon = `http://openweathermap.org/img/wn/${props.weatherIcon.icon}@2x.png`
    let cardImage = props.weatherIcon.main
    return (
        // in order for this section to keep its footprint, its visibility is hidden until props are available from parent
        <div className={`weatherDisplayContainer ${classTest}`} style={props.city === "" ? { visibility: "hidden"} : {visibility: "visible", backgroundImage: `url("/${cardImage}.png")`}}>
        {props.city !== "" ? <img className="iconImage" src={icon} alt="" /> : null}      
               
            <div className="forecastInfo">
                <p className='cityName'>
                    {/* displays city name on main weather card */}
                    {props.city + ","}
                </p>
                <p className="countryName">
                    {/* displays country name on main weather card */}
                    {props.country}
                </p>
            </div>
            <p className="localTime">Local Time: {props.time}</p>
            <p className="forecastDescription">
                {/* displays forecast info (cloudy, rainy, etc) */}
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