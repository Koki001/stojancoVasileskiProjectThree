// ExtrsWeatherInfo.js

const ExtraWeatherInfo = function (props) {
        // console.log(props)
        const speedMS = Number(props.wind)
        const speedKmH = (speedMS * 3600) / 1000

        const finalWindSpeed = speedKmH.toFixed(1)

    return (
        <>
            <div className="minMax">
                <p className="pMin">Min: {props.minTemp}°C</p>
                <p className="pMax">Max: {props.maxTemp}°C</p>
            </div>
            <p>Wind speed: {finalWindSpeed} km/h</p>
        </>
    )
}
export default ExtraWeatherInfo