import styled from "styled-components"

export default function Hoje({weatherData}){
    console.log(weatherData?.main?.temp_max.toFixed(0))
    console.log(weatherData?.main?.temp_min.toFixed(0))

    return (
        <InfoScreen>
            <InfoBox>
                <h1>Mínima</h1>
                <span>{weatherData?.main?.temp_min.toFixed(0)}º c</span>
            </InfoBox>
            <InfoBox>
                <h1>Máxima</h1>
                <span>{weatherData?.main?.temp_max.toFixed(0)}º c</span>
            </InfoBox>
            <InfoBox>
                <h1>Umidade</h1>
                <span>{weatherData?.main?.humidity}%</span>
            </InfoBox>
            <InfoBox>
                <h1>Velocidade do Vento</h1>
                <span>{weatherData?.wind?.speed} m/s</span>
            </InfoBox>
        </InfoScreen>
    )
}

const InfoScreen = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 500px;
    height: 180px;
    background: rgb(77,68,148);
    background: linear-gradient(90deg, rgba(77,68,148,1) 35%, rgba(79,67,174,1) 100%);
    box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);
    border-radius: 32px;
    margin-top: 30px;
    &>h1{
        font-size: 22px;
        font-weight: 400;
        background: none;
        color: #fff;
        margin-left: 15%;
    }
    &>span{
        font-size: 48px;
        font-weight: 600;
        background: none;
        color: #fff;
        margin-top: 2%;
        margin-left: 15%;
    }
`