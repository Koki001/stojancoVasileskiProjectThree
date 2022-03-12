// MultiDayDisplay.js

function MultiDayDisplay(props) {

    return (
        <div className="multipleDaysContainer" style={props.city === "" ? { display: "none", opacity: 0 } : { opacity: 1, display: "flex" }}>
            <div className="dayOne multiDay" style={{ backgroundImage: `url("/${props.temp[7].weather[0].main}.png")` }}>
                <p>{props.temp[7].main.temp}</p>
            </div>
            <div className="dayTwo multiDay" style={{ backgroundImage: `url("/${props.temp[14].weather[0].main}.png")` }}>
                <p>{props.temp[14].main.temp}</p>
            </div>
            <div className="dayThree multiDay" style={{ backgroundImage: `url("/${props.temp[21].weather[0].main}.png")` }}>
                <p>{props.temp[21].main.temp}</p>
            </div>
            <div className="dayFour multiDay" style={{ backgroundImage: `url("/${props.temp[28].weather[0].main}.png")` }}>
                <p>{props.temp[28].main.temp}</p>
            </div>
        </div>
    )
}

export default MultiDayDisplay