// MultiDayDisplay.js

function MultiDayDisplay(props) {

    return (
        
        <div className="multipleDaysContainer" style={props.dayOne === undefined ? { display: "none", opacity: 0 } : { opacity: 0.95, display: "flex" }}>
            {
                // if props are not available, do not render
                props.dayOne !== undefined
                ?
                <>
                    {/* same background image method used on main weather card that uses a png of the same name relating to the forecast */}
                    <div className="dayOne multiDay" style={{ backgroundImage: `url("/${props.dayOne.weather[0].main}.png")` }}>
                        {/* was unable to convert the desired date output outside of render or component, so it's attached to each weather card */}
                        <p className="multiDate">{new Date(props.dayOne.dt * 1000).toLocaleString(undefined, {
                        month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayOne.weather[0].icon}@2x.png`} alt="" />
                        <div className="miniCardFlex">
                            <p className="multiMaxTemp">↑ {props.dayOne.temp.max}°C</p>
                            <p className="multiMinTemp">↓ {props.dayOne.temp.min}°C</p>
                        </div>
                    </div>
                    {/* dayThree is here before dayTwo due to how my display:flex is set up */}
                    <div className="dayThree multiDay" style={{ backgroundImage: `url("/${props.dayThree.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayThree.dt * 1000).toLocaleString(undefined, {
                        month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayThree.weather[0].icon}@2x.png`} alt="" />
                        <div className="miniCardFlex">
                            <p className="multiMaxTemp">↑ {props.dayThree.temp.max}°C</p>
                            <p className="multiMinTemp">↓ {props.dayThree.temp.min}°C</p>
                        </div>
                    </div>
                    <div className="dayTwo multiDay" style={{ backgroundImage: `url("/${props.dayTwo.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayTwo.dt * 1000).toLocaleString(undefined, {
                        month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayTwo.weather[0].icon}@2x.png`} alt="" />
                        <div className="miniCardFlex">
                            <p className="multiMaxTemp">↑ {props.dayTwo.temp.max}°C</p>
                            <p className="multiMinTemp">↓ {props.dayTwo.temp.min}°C</p>
                        </div>
                    </div>
                    <div className="dayFour multiDay" style={{ backgroundImage: `url("/${props.dayFour.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayFour.dt * 1000).toLocaleString(undefined, {
                        month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayFour.weather[0].icon}@2x.png`} alt="" />
                        <div className="miniCardFlex">
                            <p className="multiMaxTemp">↑ {props.dayFour.temp.max}°C</p>
                            <p className="multiMinTemp">↓ {props.dayFour.temp.min}°C</p>
                        </div>
                    </div>
                </>
                : null
            }
        </div>
    )
}

export default MultiDayDisplay