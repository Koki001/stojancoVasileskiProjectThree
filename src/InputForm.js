// InputForm.js
import {useState} from "react"
import countryList from "./CountriesList"

function InputForm(props) {

    // states used in submit function to update main API call states
    const [selectCountry, setSelectCountry] = useState("placeholder")
    const [selectCity, setSelectCity] = useState("")
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
            alert("please enter city name")
        } else if (selectCountry === "placeholder") {
            alert("please select country")
        } else {
            props.handleSubmit(e, selectCountry, selectCity)
            // setSelectCountry("placeholder")
            setSelectCity("")
        }
    }

    return (  
        <div className="formContainer">
            <h2>Choose a location</h2>
            <form id="form" className="inputForm" action=""
            onSubmit={handleUserSelect}
            >
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
                    <button>submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm