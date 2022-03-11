// WeatherDisplay.js
// import './App.css';
import { useState } from "react"
import ExtraWeatherInfo from "./ExtraWeatherInfo"

function WeatherDisplay(props) {

    const [isActive, setActive] = useState(false);

    document.body.addEventListener("submit", function() {
        setActive(!isActive)
    })
    let classTest = isActive.toString() + `Flip`

    const temp = props.forecast
    let icon = `http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`

    return (
        <div className={`weatherDisplayContainer ${classTest}`} style={props.city === "" ? { visibility: "hidden", opacity: 0 } : { opacity: 1, visibility: "visible" }}>
            {
                props.city != ""
                    ? <img className="iconImage" src={icon} alt="" />
                    : null
            }      

                <div className="forecastInfo">
                    <p className='cityName' style={props.city === "" ? { visibility: "hidden" } : { visibility: "visible"}}>
                        {
                            props.city === ""
                            ? "City Name"
                            : props.city + ","

                        }
                    </p>
                    <p className="countryName" style={props.country === "" ? { visibility: "hidden" } : { visibility: "visible" }}>
                        {
                            props.country === ""
                            ? "ZZ"
                            : props.country
                        }
                    </p>
                </div>

            <div className="weatherResult">
                <p className='forecastDisplay'>{Number(temp).toFixed(1)} <span className="tempUnits">°C</span></p>
            </div>
            <ExtraWeatherInfo wind={props.windSpeed}/>
        </div>
    )
}

export default WeatherDisplay