import styled from "styled-components"

export default function Hoje({ weatherData, isChecked }) {
    return (
        <ScreenContainer>
            <InfoScreen>
                <InfoBox>
                    <h1>Mínima</h1>
                    <span>{isChecked? (weatherData?.main?.temp * 1.8 + 32).toFixed(0) + "° F" : weatherData ? weatherData?.main?.temp_min.toFixed(0) + "º C" : "0"}</span>
                </InfoBox>
                <InfoBox>
                    <h1>Máxima</h1>
                    <span>{isChecked? (weatherData?.main?.temp * 1.8 + 32).toFixed(0) + "° F" : weatherData ? weatherData?.main?.temp_max.toFixed(0) + "º C" : "0"}</span>
                </InfoBox>
                <InfoBox>
                    <h1>Umidade</h1>
                    <span>{weatherData ? weatherData?.main?.humidity : "0"}%</span>
                </InfoBox>
                <InfoBox>
                    <h1>Velocidade do Vento</h1>
                    <span>{weatherData ? weatherData?.wind?.speed : "0"} m/s</span>
                </InfoBox>
            </InfoScreen>
            <RespScreen>
                {weatherData?.main?.temp_min > 17 ? <span> Não, você não deve levar um casaquinho!</span> : <span>Sim, você deve levar um casaquinho!</span>}
            </RespScreen>
        </ScreenContainer>
    )
}
const ScreenContainer = styled.div`

`
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
    @media (max-width: 1600px) {
        width: 300px;
        height: 108px;
        text-align: center;
        margin-top: 5px;
        &>h1{
            font-size: 16px;
            margin: 0;
        }
        &>span{
            font-size: 30px;
            margin-left: 0;
        }
    }
`
const RespScreen = styled.div`
    margin-top: 15px;
    padding-left: 50px;
    color: #AFADAD;
    font-family: Poppins;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
    margin-bottom: 50px;
    @media (max-width: 1600px) {
        display: flex;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        color: #000;
    }
`