// InputForm.js
import {useState} from "react"
import countryList from "./CountriesList"
// stretch goal 
// import FavoriteLocations from "./FavoriteLocations"
import PopupCity from "./PopupCity"
import PopupCountry from "./PopupCountry"

function InputForm(props) {

    // states used in submit function to update main API call states
    const [selectCountry, setSelectCountry] = useState("placeholder")
    const [selectCity, setSelectCity] = useState("")
    // error handling states
    const [cityError, setCityError] = useState(false)
    const [countryError, setCountryError] = useState(false)
    // updates selected city
    const handleChange = function(event) {
        setSelectCountry(event.target.value)
    }
    // updates selected country
    const handleInput = function(e) {
        setSelectCity(e.target.value)
    }
    // form onSubmit function 
    const handleUserSelect = function(e) {
        e.preventDefault()
        if (selectCity === "") {
            setCityError(true)
        } else if (selectCountry === "placeholder") {
            setCountryError(true)
        } else {
            props.handleSubmit(e, selectCountry, selectCity)
            // setSelectCountry("placeholder")
            setSelectCity("")
        }
    }
    // error handling function that updates state using info from component
    const popupCityClick = function (e, click) {
        e.preventDefault()
        setCityError(click)
    }
    // error handling function that updates state using info from component
    const popupCountryClick = function (e, click) {
        e.preventDefault()
        setCountryError(click)
    }

    return (  
        <div className="formContainer">
            {/* popup box to handle empty city field */}
            {
                cityError === true
                ?
                <PopupCity 
                click={popupCityClick}
                />
                : null
            }
            {/* popup box to handle country not selected */}
            {
                countryError === true
                    ?
                    <PopupCountry
                        click={popupCountryClick}
                    />
                    : null
            }
            <h2>Choose a location</h2>
            <form id="form" className="inputForm" action=""
            onSubmit={handleUserSelect}>
                <label htmlFor="city" className="sr-only">Enter city name</label>
                {/* city input field */}
                <div className="inputsContainer">
                    <input className='inputCity' id="city" name="city" type="text" placeholder="City name"
                    onChange={handleInput}
                    value={selectCity}
                    />
                    <select className="formSelect" name="selectCountry" id="selectCountry"
                    value={selectCountry}
                    onChange={handleChange}
                    >
                        {/* country options ************** */}
                        <option value="placeholder" disabled>Choose country:</option>
                        {/* most likely options to be used are removed from array loop and put at the top for easier access */}
                        <option value="CA">Canada</option>
                        <option value="US">United States</option>
                        <option className="countryBreak" value="placeholder" disabled></option>
                        {
                            // looping of array from CountriesList.js to populate an option with both country name and country code for value
                            countryList.map(function(singleCountry, index) {
                                return (
                                    <option key={index} value={singleCountry.code}>{singleCountry.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="buttonContainer">
                    {/* <button type="button" className="favLocationsButton"><img src={"/gear.png"} /></button> */}
                    <button className="submitButton">submit</button>
                </div>
            </form>
            {/* firebase stretch goal */}
            {/* <FavoriteLocations /> */}
        </div>
    )
}

export default InputForm