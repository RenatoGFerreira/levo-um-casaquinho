import styled from "styled-components";
import Menu from "../../components/Menu/Menu"
import Hoje from "../Hoje/Hoje";
import { useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import ProximosDias from "../ProximosDIas/ProximosDias";

export default function Home() {
    const {weatherData, setWeatherData} = useContext(WeatherContext)
    const [today, setToday] = useState(true)
    const [nextDays, setNextDays] = useState(false)

    function selectToday(){
        setToday(true)
        setNextDays(false)
    }
    function selectNextDays(){
        setToday(false)
        setNextDays(true)
    }

    return (
        <ScreenContainer>
            <Menu/>
            <BoxScreen>
                <BoxTop>
                    <SubMenuScreen>
                        <span onClick={selectToday}>Hoje</span>
                        <span onClick={selectNextDays}>Próximos Dias</span>
                    </SubMenuScreen>
                    <CityScreen>
                        <h1>{weatherData? weatherData?.name : "Carregando..."}</h1>
                        <span>Latitude: {weatherData? weatherData?.coord?.lat : "Carregando..."}</span>
                        <span>Longitude: {weatherData? weatherData?.coord?.lon : "Carregando..."}</span>
                    </CityScreen>
                </BoxTop>
                <BoxMiddle>
                    {today ? <Hoje weatherData={weatherData}/> : <ProximosDias/>}
                </BoxMiddle>
                <BoxBotton>
                    <TextScreen>
                        <span>Dados Fornecidos pela: <a target="_blank" href="https://openweathermap.org/api"> Open Weather API</a></span>
                    </TextScreen>
                </BoxBotton>
            </BoxScreen>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1600px) {
        flex-direction: column;
    }

`
const BoxScreen = styled.div`
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1600px) {
        width: 100%;
    }
`
const BoxTop = styled.div`
    @media (max-width: 1600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const BoxMiddle = styled.div`
`
const BoxBotton = styled.div`
`
const SubMenuScreen = styled.div`
    display: flex;
    &>span{
        font-size: 40px;
        margin-top: 50px;
        margin-left: 50px;
        cursor: pointer;
    }
    @media (max-width: 1600px) {
        &>span{
            font-size: 30px;
        }
}
`
const CityScreen = styled.div`
    &>h1{
        font-size: 85px;
        font-weight: 400;
        letter-spacing: 3px;
        margin-top: 20px;
        margin-bottom: 14px;
        margin-left: 50px;
    }
    &>span{
        font-size: 20px;
        margin: 0 25px;
        margin-left: 55px;
    }
    @media (max-width: 1600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        &>h1{
            font-size: 50px;
            text-align: center;
            margin-bottom: 20px;
        }
        &>span{
          width: 200px;
          margin-bottom: 6px;
        }
    }
`

const TextScreen = styled.p`
    &>span{
        padding-left: 50px;
        margin-bottom: auto;
        color: #222;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;
        @media (max-width: 1600px) {
            display: flex;
            justify-content: center;
            font-size: 16px;
            color: #afafad;
        }
    }

`;