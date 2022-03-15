// MultipleDay.js
import axios from "axios"
import { useEffect, useState } from "react";
// component import
import MultiDayDisplay from "./MultiDayDisplay";

const MultipleDays = function(props) {
    // state to be passed to child component
    const [dailyObjects, setDailyObjects] = useState({})
    // second API call that returns multiple days
    useEffect(function () {
        // this API relies on coordinates that are passed on as props from parent
        // do not run API if coordinates are not available
        if (props.coords !== null) {
            axios({
                url: "https://api.openweathermap.org/data/2.5/onecall",
                params: {
                    appid: "10d5f31200cc3f2c32cc4ea5001bd6d6",
                    lat: `${props.coords.coord.lat}`,
                    lon: `${props.coords.coord.lon}`,
                    units: "metric",
                    exclude: "current,minutely,hourly,alerts"
                }
            }).then(function (multiDay) {
                setDailyObjects(multiDay.data.daily)
            })
        } else {
        }
    }, [props.coords])
    
    return (
        <div>
            {/* if coordinates from parent are unavailable, do not render component */}
            {
                props.coords !== null && props.cityCheck !== ""
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