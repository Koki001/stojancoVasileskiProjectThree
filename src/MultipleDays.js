// MultipleDay.js
import axios from "axios"
import { useEffect, useState } from "react";
import MultiDayDisplay from "./MultiDayDisplay";

const MultipleDays = function(props) {
    
    const [dailyObjects, setDailyObjects] = useState({})

    useEffect(function () {
        if (props.coords !== null) {
            axios({
                url: "https://api.openweathermap.org/data/2.5/onecall",
                params: {
                    appid: "10d5f31200cc3f2c32cc4ea5001bd6d6",
                    lat: `${props.coords.lat}`,
                    lon: `${props.coords.lon}`,
                    units: "metric",
                    exclude: "current,minutely,hourly,alerts"

                }
            }).then(function (multiDay) {
                console.log("MULTI DAY RETURN", multiDay)

                setDailyObjects(multiDay.data.daily)
                // error handling for no API return *****
            }).catch(function (error) {
                if (error.response) {
                    alert("city doesn't exist")
                    console.log(error)
                } else if (error.request) {
                    console.log("no error")
                } else {
                }
            })
        }
    }, [props.coords])
    
    return (
        <div>
            {
                props.coords !== null
                ?
                <MultiDayDisplay 
                dayOne={dailyObjects[1]}
                dayTwo={dailyObjects[2]}
                dayThree={dailyObjects[3]}
                dayFour={dailyObjects[4]}
                />
                : null
            }
            
        </div>
    )
    

}

export default MultipleDays