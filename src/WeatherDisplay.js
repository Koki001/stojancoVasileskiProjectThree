// WeatherDisplay.js
// component import
import ExtraWeatherInfo from "./ExtraWeatherInfo"

function WeatherDisplay(props) {
    
    return (
        // in order for this section to keep its footprint, its visibility is hidden until props are available from parent
        <div className={`weatherDisplayContainer ${props.weather.weather[0].main}`}>

            {props.city !== "" && props.weather ? <img className="iconImage" src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt="" /> : null}

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
                {props.weather ? props.weather.weather[0].description : null}
            </p>
            <div className="weatherResult">
                <p className='forecastDisplay'>{Number(props.weather.main.temp).toFixed(1)}<span className="tempUnits">°C</span></p>
            </div>
            <ExtraWeatherInfo
            wind={props.weather.wind.speed}
            minTemp={props.weather.main.temp_min}
            maxTemp={props.weather.main.temp_max}
            />
        </div>
    )
}

export default WeatherDisplay