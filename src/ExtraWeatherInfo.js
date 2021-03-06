// ExtrsWeatherInfo.js

const ExtraWeatherInfo = function (props) {
    
    const minTemp = props.minTemp
    const maxTemp = props.maxTemp
    const speedMS = Number(props.wind)
    const speedKmH = (speedMS * 3600) / 1000
    const finalWindSpeed = speedKmH.toFixed(1)

    return (
        <>
            <div className="minMax">
                <p className="pMin">Min: {Number(minTemp).toFixed(1)}°C</p>
                <p className="pMax">Max: {Number(maxTemp).toFixed(1)}°C</p>
            </div>
            <p>Wind speed: {finalWindSpeed} km/h</p>
        </>
    )
}
export default ExtraWeatherInfo