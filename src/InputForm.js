// InputForm.js
// import './App.css';
import {useState} from "react"
import countryList from "./CountriesList"

function InputForm(props) {

    const [selectCountry, setSelectCountry] = useState("placeholder")
    const [selectCity, setSelectCity] = useState("")
    // console.log(selectCity, "INPUTFORM.JS")
    // country select function
    const handleChange = function(event) {
        setSelectCountry(event.target.value)
    }
    // function for city input that updates state with value
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
            {/* form start */}
            <form 
            id="form"
            className="inputForm" 
            action=""
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
                        {
                            countryList.map(function(singleCountry, index) {
                                return (
                                    <option key={index} value={singleCountry.code}>{singleCountry.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="buttonContainer">
                    {/* <button type="button">°C / °F</button> */}
                    <button>submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm