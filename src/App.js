import './App.css';
import { useEffect, useState } from "react";
import axios from "axios"
// component imports
import InputForm from "./InputForm";
import WeatherDisplay from "./WeatherDisplay";
import MultipleDays from "./MultipleDays";
import CloudAnimation from './CloudAnimation';
import Footer from './Footer';
import PopupBox from './PopupBox';

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
                if (apiError === true) {
                    setApiError(false)
                }
                // convert api info of selected city to respective local time
                const getTime = function() {
                    const apiZone = weatherData.data.timezone
                    const testTime = new Date()
                    const utc = testTime.getTime() + (testTime.getTimezoneOffset() * 60000);
                    const nd = new Date(utc + (1000 * apiZone));
                    // format time for display
                    const local = `${nd.getHours() + ":" + (nd.getMinutes() < 10 ? '0' : '') + nd.getMinutes()}`
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
                } else {
                   
                } 
            })
        } 
    }, [citySelection, countrySelection, apiError])
    // sumbit form handle from InputForm.js 
    const formSubmit = function(e, chosenCountry, chosenCity) {
        e.preventDefault()
        setCountrySelection(chosenCountry)
        setCitySelection(chosenCity)
    }
    // click event in PopupBox component that resets API error here
    const popupClick = function(e, click){
        e.preventDefault()
        setApiError(click)
    }
    console.log("error from API call", apiError)
    return (
        <div className="App wrapper">
            <h1>WeatherPal</h1>
            <div className="bodyLayer"></div>
            <CloudAnimation/>
            {/* if API error state is true, show component */}
            {/* error handle for invalid city input or country mismatch */}
            {
                apiError === true
                ?
                <PopupBox 
                click={popupClick}
                />
                : null
            }
            <main>
                <div className="mainContainer">
                    {/* city/country/submit component */}
                    <InputForm handleSubmit={formSubmit} />
                    {/* main weather card component */}
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
                {/* four day forecast component */}
                {
                    apiError === false
                    ?
                    <MultipleDays
                    cityCheck={citySelection}
                    coords={coordinates}
                    />
                    : null
                }
            </main>
            <Footer />
        </div>
    );
}
export default App;