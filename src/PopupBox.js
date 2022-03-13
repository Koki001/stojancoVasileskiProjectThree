// PopupBox.js
import { useState } from "react"


const PopupBox = function(props) {

    const [popup, setPopup] = useState(true)

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