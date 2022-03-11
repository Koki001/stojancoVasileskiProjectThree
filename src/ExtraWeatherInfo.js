// ExtrsWeatherInfo.js

const ExtraWeatherInfo = function (props) {
     
        const speedMS = Number(props.wind)
        const speedKmH = (speedMS * 3600) / 1000

        const finalWindSpeed = speedKmH.toFixed(1)

    return (
        <p>Wind speed: {finalWindSpeed} km/h</p>
    )
}
export default ExtraWeatherInfo