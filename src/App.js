import axios from "axios"
import { useEffect, useState } from "react";
import './App.css';
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
                console.log("SINGLE CITY RETURN", weatherData)
                
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
                    alert("city doesn't exist")
                } else if (error.request){
                    console.log("no error")
                } 
            })
        }
    }, [citySelection, countrySelection])

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
            <MultipleDays 
            coords={coordinates}
            />
    </div>
  );
}

export default App;








// pseudo code

// Create a weather forecast app that will present the user with the current weather for a city of their choice.

// make successful API call and get the required data 

// with useState, create two states to represent and track the user's selction of:
    // city name
    // country/state name

// create two components for the user inputs:
    // 1. a component where the user can type in the name of the city they wish to see the weather for
    // 2. a drop down down select for the country input
    // (may move the country input to a stretch goal if I run into any roadblocks)

// using props, pass a function for both params to the respective components and then use it to update the state of those params in App.js
    
// create a third component that will render the information from the user input components to the main App.js

// clear the previous rendered results on every new submit of the form
    

// ******* STRETCH GOALS *********

// connect to firebase
    // give the option to the user to save their current location so they can display the weather for their city with a click of a button instead of typing out the city/country every time
    // add a favourites tab where the user can also save several favorite locations for the weather forecast

// add images to go along with the weather forecast (will need another API call)