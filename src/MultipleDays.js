// MultipleDay.js
import axios from "axios"
import { useEffect, useState } from "react";
import MultiDayDisplay from "./MultiDayDisplay";

const MultipleDays = function(props) {
    

    const [arrayOfCities, setArrayOfCities] = useState("")
 
    useEffect(function () {

        if (props.city !== "") {

            axios({
                url: "https://api.openweathermap.org/data/2.5/forecast",
                params: {
                    appid: "10d5f31200cc3f2c32cc4ea5001bd6d6",
                    q: `${props.city}, ${props.country}`,
                    units: "metric",
                    mode: "json",
                    cnt: "32"
                }
            }).then(function (multiDay) {
                console.log(multiDay)
                setArrayOfCities(multiDay.data.list)
              
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

        } else {

        }
    }, [props.city, props.country])
    
    
    
    return (
        <div>
            {
                arrayOfCities === ""
                ? null
                : <MultiDayDisplay temp={arrayOfCities}/>
            }
        </div>
    )
    

}

export default MultipleDays