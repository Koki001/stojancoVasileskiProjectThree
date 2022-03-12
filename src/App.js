import './App.css';
import { useEffect, useState } from "react";
import axios from "axios"
// component imports
import InputForm from "./InputForm";
import WeatherDisplay from "./WeatherDisplay";
import MultipleDays from "./MultipleDays";

function App() {
// Different useState() for the app
    const [citySelection, setCitySelection] = useState("")
    const [countrySelection, setCountrySelection] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [weatherIconDesc, setWeatherIconDesc] = useState([])
    const [mainTempStats, setMainTempStats] = useState ({})
    const [localTime, setLocalTime] = useState(null)
    const [coordinates, setCoordinates] = useState (null)
    const [apiError, setApiError] = useState(false)

    useEffect(function() {
        // do not run api call if no city selection
        if (citySelection !== "") {
            axios ({
                url: "https://api.openweathermap.org/data/2.5/weather",
                params: {
                    appid: "10d5f31200cc3f2c32cc4ea5001bd6d6",
                    q: `${citySelection}, ${countrySelection}`,
                    units: "metric"
                }
            }).then(function(weatherData) {
                // ensures false initial state if API is called
                setApiError(false)
                // convert api info of selected city to respective local time 
                const getTime = function() {
                    const apiZone = weatherData.data.timezone
                    const testTime = new Date()
                    const utc = testTime.getTime() + (testTime.getTimezoneOffset() * 60000);
                    const nd = new Date(utc + (1000 * apiZone));
                    const local = `${nd.getHours() + ":" + (nd.getMinutes() < 10 ? '0' : '') + nd.getMinutes() + ":" + (nd.getSeconds() < 10 ? '0' : '') + nd.getSeconds()}`
                    return local
                }
                getTime()
                // extract info into states
                setLocalTime(getTime())
                setWindSpeed(weatherData.data.wind.speed)
                setWeatherIconDesc(weatherData.data.weather[0])
                setMainTempStats(weatherData.data.main)
                setCoordinates(weatherData.data.coord)
                // error handling for no API return *****
            }).catch(function(error) {
                if (error.response) {
                    setCitySelection("")
                    setCountrySelection("")
                    setApiError(true)
                    alert("Invalid city name or not in selected country")
                } else {
                    
                } 
            })
        } 
    }, [citySelection])
    // sumbit for handle from InputForm.js 
    const formSubmit = function(e, chosenCountry, chosenCity) {
        e.preventDefault()
        setCountrySelection(chosenCountry)
        setCitySelection(chosenCity)
    }
    return (
        <div className="App wrapper">
            {/* <h1>Weather App</h1> */}
            <div className="mainContainer">
                <InputForm handleSubmit={formSubmit} />
                <WeatherDisplay 
                time={localTime}
                forecast={mainTempStats.temp}
                city={citySelection}
                country={countrySelection}
                windSpeed={windSpeed}
                weatherIcon={weatherIconDesc}
                min={mainTempStats.temp_min}
                max={mainTempStats.temp_max}
                />
            </div>
            {/* if API changes error state to true, do not render component */}
            {
                apiError === false 
                ?   
                <MultipleDays
                coords={coordinates}
                />
                : null
            }
        </div>
    );
}
export default App;