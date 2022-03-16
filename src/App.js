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
    const [localTime, setLocalTime] = useState(null)
    const [apiError, setApiError] = useState(false)
    const [weatherInfo, setWeatherInfo] = useState({})

    useEffect(function() {
        // do not run api call if no city selection
        if (citySelection !== "" && apiError === false) {
            axios ({
                url: "https://api.openweathermap.org/data/2.5/weather",
                params: {
                    appid: "10d5f31200cc3f2c32cc4ea5001bd6d6",
                    q: `${citySelection}, ${countrySelection}`,
                    units: "metric"
                }
            }).then(function(weatherData) {
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
                setWeatherInfo(weatherData.data)
                // error handling for no API return *****
            }).catch(function(error) {
                if (error.response) {
                    setCitySelection("")
                    setCountrySelection("")
                    setWeatherInfo({})
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
                    {
                        weatherInfo.weather && citySelection !== ""
                        ?
                        <WeatherDisplay
                        weather={weatherInfo}
                        time={localTime}
                        city={citySelection}
                        country={countrySelection}
                        />
                        : null
                    }
                </div>
                {/* if API changes error state to true, do not render component */}
                {/* four day forecast component */}
                {
                    apiError === false && weatherInfo.weather
                    ?
                    <MultipleDays
                    cityCheck={citySelection}
                    coords={weatherInfo}
                    />
                    : null
                }
            </main>
            <Footer />
        </div>
    );
}
export default App;