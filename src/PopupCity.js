import { useState } from "react"


const PopupCity = function (props) {

    const [popupCity, setPopupCity] = useState(true)

    const handleClickCity = function (e) {
        props.click(e, !popupCity)
        setPopupCity(false)
    }

    if (popupCity === true) {
        return (

            <div className="popup">
                <div className="popupContainer">
                    <p>Please select a city.</p>
                    <button onClick={handleClickCity} className="popupOk">OK</button>
                </div>
            </div>

        )
    } else {
        return null
    }
}
export default PopupCity