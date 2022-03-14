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
                                <p className="multiMaxTemp">↑ {Number(props.dayOne.temp.max).toFixed(1)}°C</p>
                                <p className="multiMinTemp">↓ {Number(props.dayOne.temp.min).toFixed(1)}°C</p>
                        </div>
                    </div>
                    {/* dayThree is here before dayTwo due to how my display:flex is set up */}
                    <div className="dayThree multiDay" style={{ backgroundImage: `url("/${props.dayThree.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayThree.dt * 1000).toLocaleString(undefined, {
                        month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayThree.weather[0].icon}@2x.png`} alt="" />
                        <div className="miniCardFlex">
                                <p className="multiMaxTemp">↑ {Number(props.dayThree.temp.max).toFixed(1)}°C</p>
                                <p className="multiMinTemp">↓ {Number(props.dayThree.temp.min).toFixed(1)}°C</p>
                        </div>
                    </div>
                    <div className="dayTwo multiDay" style={{ backgroundImage: `url("/${props.dayTwo.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayTwo.dt * 1000).toLocaleString(undefined, {
                        month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayTwo.weather[0].icon}@2x.png`} alt="" />
                        <div className="miniCardFlex">
                                <p className="multiMaxTemp">↑ {Number(props.dayTwo.temp.max).toFixed(1)}°C</p>
                                <p className="multiMinTemp">↓ {Number(props.dayTwo.temp.min).toFixed(1)}°C</p>
                        </div>
                    </div>
                    <div className="dayFour multiDay" style={{ backgroundImage: `url("/${props.dayFour.weather[0].main}.png")` }}>
                        <p className="multiDate">{new Date(props.dayFour.dt * 1000).toLocaleString(undefined, {
                        month: "long", day: "numeric"
                        })}</p>
                        <img src={`http://openweathermap.org/img/wn/${props.dayFour.weather[0].icon}@2x.png`} alt="" />
                        <div className="miniCardFlex">
                                <p className="multiMaxTemp">↑ {Number(props.dayFour.temp.max).toFixed(1)}°C</p>
                                <p className="multiMinTemp">↓ {Number(props.dayFour.temp.min).toFixed(1)}°C</p>
                        </div>
                    </div>
                </>
                : null
            }
        </div>
    )
}

export default MultiDayDisplay