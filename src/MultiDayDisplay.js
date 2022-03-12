// MultiDayDisplay.js


function MultiDayDisplay(props) {


    return (
        
        <div className="multipleDaysContainer" style={props.dayOne === undefined ? { display: "none", opacity: 0 } : { opacity: 1, display: "flex" }}>
            {
                props.dayOne !== undefined
                ?
                <>
                    <div className="dayOne multiDay" style={{ backgroundImage: `url("/${props.dayOne.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayOne.dt * 1000).toLocaleString(undefined, {
                            month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayOne.weather[0].icon}@2x.png`} alt="" />
                        <p className="multiMaxTemp">Max: {props.dayOne.temp.max}</p>
                        <p className="multiMinTemp">Min: {props.dayOne.temp.min}</p>
                    </div>
                    <div className="dayThree multiDay" style={{ backgroundImage: `url("/${props.dayThree.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayThree.dt * 1000).toLocaleString(undefined, {
                            month: "long", day: "numeric"
                        })}</p>
                       <img src={`http://openweathermap.org/img/wn/${props.dayThree.weather[0].icon}@2x.png`} alt="" />
                        <p className="multiMaxTemp">Max: {props.dayThree.temp.max}</p>
                        <p className="multiMinTemp">Min: {props.dayThree.temp.min}</p>
                    </div>
                    <div className="dayTwo multiDay" style={{ backgroundImage: `url("/${props.dayTwo.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayTwo.dt * 1000).toLocaleString(undefined, {
                            month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayTwo.weather[0].icon}@2x.png`} alt="" />
                        <p className="multiMaxTemp">Max: {props.dayTwo.temp.max}</p>
                        <p className="multiMinTemp">Min: {props.dayTwo.temp.min}</p>
                    </div>
                    <div className="dayFour multiDay" style={{ backgroundImage: `url("/${props.dayFour.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayFour.dt * 1000).toLocaleString(undefined, {
                            month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayFour.weather[0].icon}@2x.png`} alt="" />
                        <p className="multiMaxTemp">Max: {props.dayFour.temp.max}</p>
                        <p className="multiMinTemp">Min: {props.dayFour.temp.min}</p>
                    </div>
                </>
                : null
            }
        </div>
    )
}

export default MultiDayDisplay