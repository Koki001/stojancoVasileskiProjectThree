import { useState } from "react"


const PopupCountry = function (props) {

    const [popupCountry, setPopupCountry] = useState(true)

    const handleClickCountry = function (e) {
        props.click(e, !popupCountry)
        setPopupCountry(false)
    }

    if (popupCountry === true) {
        return (

            <div className="popup">
                <div className="popupContainer">
                    <p>Please select a country from the drop-down menu.</p>
                    <button onClick={handleClickCountry} className="popupOk">OK</button>
                </div>
            </div>

        )
    } else {
        return null
    }
}
export default PopupCountry