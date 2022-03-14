// PopupCity.js
import { useState } from "react"


const PopupCity = function (props) {
    // depending on state, return will be rendered
    const [popupCity, setPopupCity] = useState(true)
    // returns state to false 
    const handleClickCity = function (e) {
        props.click(e, !popupCity)
        setPopupCity(false)
    }
    if (popupCity === true) {
        return (
            <div className="popup">
                <div className="popupContainer">
                    <p>Please enter city name.</p>
                    <button onClick={handleClickCity} className="popupOk">OK</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}
export default PopupCity