// PopupBox.js
import { useState } from "react"

const PopupBox = function(props) {
    // state in charge of rendering popup box
    const [popup, setPopup] = useState(true)
    // after parent gets a "true" for its own error handling this component is rendered
    // the handleClick when closing the popup box lifts that information and sets parent's error state to "false" as well as its own 
    const handleClick = function(e) {
        props.click(e, !popup)
        setPopup(false)
    }

    if (popup === true) {
        return (
            <div className="popup">
                <div className="popupContainer">
                    <h2>Oops!</h2>
                    <p>Sorry, we could not find any results. Please check the spelling of your city and select the correct country for your destination.</p>
                    <button onClick={handleClick} className="popupOk">OK</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}
export default PopupBox