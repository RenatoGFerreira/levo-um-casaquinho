import styled from "styled-components"

export default function Hoje({ weatherData, isChecked, isDarkMode }) {
    return (
        <ScreenContainer isDarkMode={isDarkMode}>
            <InfoScreen isDarkMode={isDarkMode}>
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
            <RespScreen isDarkMode={isDarkMode}>
                {weatherData? weatherData?.main?.temp_min > 17 ? <span> Não, você não deve levar um casaquinho!</span> : <span>Sim, você deve levar um casaquinho!</span> : <LoadingLine/>}
            </RespScreen>
        </ScreenContainer>
    )
}

const LoadingLine = styled.div`
    display: block;
    --height-of-loader: 4px;
    --loader-color: #cecece;
    width: 330px;
    height: var(--height-of-loader);
    border-radius: 30px;
    background-color: #fff;
    border: 1px solid black;
    margin: 52px 0;
    &:before {
        content: "";
        position: absolute;
        background: var(--loader-color);
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        border-radius: 30px;
        animation: moving 1s ease-in-out infinite;
        ;
    }
    @keyframes moving {
        50% {
            width: 100%;
        }
        100% {
            width: 0;
            right: 0;
            left: unset;
        }
    }
`
const ScreenContainer = styled.div`
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
`
const InfoScreen = styled.div`
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
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
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
    color: ${(props) => props.isDarkMode? "#d4d0cb" : "#AFADAD"};
    font-family: Poppins;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
    margin-bottom: 50px;
    & span{
        background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
    }
    @media (max-width: 1600px) {
        display: flex;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
        color: #000;
    }
`