import styled from "styled-components";
import Menu from "../../components/Menu/Menu"
import Hoje from "../Hoje/Hoje";
import { useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import ProximosDias from "../ProximosDIas/ProximosDias";

export default function Home() {
    const { weatherData, nextDaysData } = useContext(WeatherContext)
    const [today, setToday] = useState(true)
    const [nextDays, setNextDays] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    function selectToday() {
        setToday(true)
        setNextDays(false)
    }
    function selectNextDays() {
        setToday(false)
        setNextDays(true)
    }

    return (
        <ScreenContainer isDarkMode={isDarkMode}>
            <Menu 
                isDarkMode={isDarkMode} 
                setIsDarkMode={setIsDarkMode}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <BoxScreen isDarkMode={isDarkMode}>
                <BoxTop isDarkMode={isDarkMode}>
                    <SubMenuScreen isDarkMode={isDarkMode}>
                        <span onClick={selectToday} style={isDarkMode? {color: today ? "rgb(102, 82, 253)": "#C8C8C8"} : {color: today ? "#000": "#C8C8C8"}}>Hoje</span>
                        <span onClick={selectNextDays} style={isDarkMode? {color: today ?  "#C8C8C8" : "rgb(102, 82, 253)"} : {color: today ? "#C8C8C8" : "#000"}}>Próximos Dias</span>
                    </SubMenuScreen>
                    <CityScreen isDarkMode={isDarkMode}>
                        <h1>{weatherData ? weatherData?.name : <LoadingLine/>}</h1>
                        <span>Latitude: {weatherData ? weatherData?.coord?.lat : 0}</span>
                        <span>Longitude: {weatherData ? weatherData?.coord?.lon : 0}</span>
                    </CityScreen>
                </BoxTop>
                <BoxMiddle isDarkMode={isDarkMode}>
                    {today ? <Hoje weatherData={weatherData} isChecked={isChecked} isDarkMode={isDarkMode}/> : <ProximosDias nextDaysData={nextDaysData} isChecked={isChecked}  isDarkMode={isDarkMode}/>}
                </BoxMiddle>
                <BoxBotton isDarkMode={isDarkMode}>
                    <TextScreen isDarkMode={isDarkMode}>
                        <span>Dados Fornecidos pela: <a target="_blank" href="https://openweathermap.org/api"> Open Weather API</a></span>
                    </TextScreen>
                </BoxBotton>
            </BoxScreen>
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
    margin: 55px;
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
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
    @media (max-width: 1600px) {
        flex-direction: column;
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        overflow-x: hidden;
    }
`
const BoxScreen = styled.div`
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1600px) {
        width: 100%;
    }
`
const BoxTop = styled.div`
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
    @media (max-width: 1600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const BoxMiddle = styled.div`
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
`
const BoxBotton = styled.div`
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
`
const SubMenuScreen = styled.div`
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
    display: flex;
    &>span{
        background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
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
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
    &>h1{
        background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
        color: ${(props) => props.isDarkMode? "#d4d0cb" : "#000"};
        font-size: 85px;
        font-weight: 400;
        letter-spacing: 3px;
        margin-top: 20px;
        margin-bottom: 14px;
        margin-left: 50px;
    }
    &>span{
        background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
        color: ${(props) => props.isDarkMode? "#d4d0cb" : "#000"};
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
    background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
    &>span{
        background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
        padding-left: 50px;
        margin-bottom: auto;
        color: ${(props) => props.isDarkMode? "#d4d0cb" : "#000"};
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;
        &>a{
            background-color: ${(props) => props.isDarkMode? "#2C2F30" : "#efefef" } ;
            text-decoration: none;
            font-weight: 600;
            color: ${(props) => props.isDarkMode? "rgb(102, 82, 253)" : "rgb(77,68,148)"};
        }
        @media (max-width: 1600px) {
            display: flex;
            justify-content: center;
            font-size: 16px;
            color: #afafad;
        }
    }
`;