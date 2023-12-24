import { useContext, useState, useEffect } from "react";
import styled, {css} from "styled-components";
import casaquinho from "../../assets/casaco.png";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"
import { WeatherContext } from "../../context/WeatherContext";
import dayjs from "dayjs";

export default function Menu({setShowMenu, showMenu}) {
    const [isChecked, setIsChecked] = useState(false)
    const {weatherData, setWeatherData} = useContext(WeatherContext)
    const [icon, setIcon] = useState(weatherData?.weather[0]?.icon)

    useEffect(() => {
        setIcon(weatherData?.weather[0]?.icon)
      }, [weatherData])

    console.log(weatherData)
    const handleCheck = () => {
        setIsChecked((prevState) => !prevState)
    }

    const handleMenu = () => {
        setShowMenu((prevState) => !prevState)
    }

    function weekday(){
        switch(dayjs().format('dddd')){
            case 'Sunday':
                return 'Domingo'
            case 'Monday':
                return 'Segunda-Feira'
            case 'Tuesday':
                return 'Terça-Feira'
            case 'Wednesday':
                return 'Quarta-Feira'
            case 'Thursday':
                return 'Quinta-Feira'
            case 'Friday':
                return 'Sexta-Feira'
            case 'Saturday':
                return 'Sabado'
            default:
                return ''
        }
    }
    
    return (
        <ScreenContainer>
            {showMenu ?  <IconeSeta2 onClick={handleMenu} /> : <IconeSeta onClick={handleMenu} /> }
            {weatherData? 
            <BoxContainer>
            <BoxTitle>
                <img src={casaquinho} alt="Casaquinho" />
                <div>
                    <h1>Levo um casaquinho?</h1>
                </div>
            </BoxTitle>
            <BoxInput>
                <StyledForm>
                    <Icone />
                    <StyledInput type="text" placeholder="Digite uma cidade" />
                </StyledForm>
            </BoxInput>
            <BoxTemperatura>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Descrição do céu" />
                    <span>{weatherData?.main?.temp.toFixed(0)}ºC</span>
                </div>
                <div>
                    <h1>{weatherData?.weather[0]?.description.charAt(0).toUpperCase() + weatherData?.weather[0]?.description.slice(1)}</h1>
                </div>
                <Barra />
            </BoxTemperatura>
            <BoxDia>
                <span>{dayjs().format('DD/MM/YYYY')}</span>
                <span>{weekday()}, {dayjs().format("hh:mm")}</span>
            </BoxDia>
            <BoxModos>
                <div>
                    <ToggleSwitch isChecked={isChecked} onClick={handleCheck} />
                    <span>{isChecked ? "ºF" : "ºC"}</span>
                </div>
                <div>
                    <ToggleSwitch />
                    <span>Dark Mode</span>
                </div>
            </BoxModos>
            <BoxTexto>
                <h1>Criado pro Renato Ferreira. 2023</h1>
            </BoxTexto>
        </BoxContainer>
        :
        <>
        <h1>Carregando...</h1>
        </>}
        </ScreenContainer>
    )
}

export const ScreenContainer = styled.div`
    z-index: 1;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 5px 5px 5px #cecece ;
    width: 33%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    @media (max-width: 1000px) {
        transform: ${showMenu => showMenu ?  "translateX(-340px)" : "translateX(-0px)"};
        transition: transform .3s ease-in;
        display: block;
        width: 380px;
        box-shadow: 2px 2px 5px #cecece;
    }
`
export const IconeSeta = styled(IoIosArrowForward)`
    font-size: 50px;
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    @media (max-width: 1000px) {
            display: block;
            color: #cecece;
            z-index: 5;
        }
`
export const IconeSeta2 = styled(IoIosArrowBack)`
    font-size: 50px;
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    @media (max-width: 1000px) {
            display: block;
            color: #cecece;
            z-index: 5;
        }
`
export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: #fff;
    width: 92%;
    height: 92%;
`
export const BoxTitle = styled.div`
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .2rem;
    &>img{
        background: none;
    }
    &>div{
        background: none;
        display: flex;
        width: 60%;
    }
    &>div>h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 60px;
        background: none;
    }
    @media (max-width: 1650px) {
        flex-direction: column;
        &>img{
            width: 90px;
        }
        &>div{
           width: 100%;
        }
        &>div>h1{
            margin-top: .2rem;
            display: flex;
            text-align: center;
            font-size: 50px;
        }
    }
    @media (max-width: 1100px) {
        &>img{
            width: 50px;
        }
        &>div{
           display: flex;
           justify-content: center;
           align-items: center;
        }
        &>div>h1{
            font-size: 30px;
        }
    }
`
export const BoxInput = styled.div`
    background: none;
    display: flex;
    justify-content: center;
`
export const StyledForm = styled.form`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #efefef;
    margin: 30px 0 25px;
    border-radius: 15px;
`
export const StyledInput = styled.input`
    font-family: 'Poppins', sans-serif;
    background: #efefef;
    width: 85%;
    padding: 10px;
    border-radius: 5px;
    font-size: 24px;
    color: #424243;
    &::placeholder{
        color: #424243;
    }
`
export const Icone = styled(RiSearch2Line)`
    font-size: 25pt;
    font-weight: 100;
    color: #8b9caf;
`
export const BoxTemperatura = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &>div{
        background: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        &>img{
            background: none;
        }
        &>span{
            background: none;
            font-size: 70pt;
            color: #ec6e4c;
        }
        &>h1{
            background: none;
            font-size: 30px;
            font-weight: 400;
            letter-spacing: 3px;
        }
    }
    @media (max-width: 1650px){
        &>div{
            flex-direction: column;
            &>span{
                font-size: 50pt;
            }
            &>h1{
                font-size: 20px;
            }
    }
    }
`
export const Barra = styled.div`
    border: 2px solid #ededed;
    margin-top: 20px;
    width: 80%;
`
export const BoxDia = styled.div`

    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    &>span{
        background: none;
        font-size: 26px;
        padding: 5px;
    }
    @media (max-width: 1650px){
        flex-direction: row;
        &>span{
            margin: 0 5px;
            font-size: 21px;
            text-align: center;

        }
    }
`
export const BoxModos = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>div{
        background: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 50%;
        min-width: 270px;
        margin: .2rem;
        &>span{
            margin-left: .2rem;
            background: #fff;
            font-size: 26px;
        }
    } 
    @media (max-width: 1650px){
        &>div{  
            &>span{
                font-size: 21px;
                margin-left: 15px;
                min-width: 120px;
                display: block;
            }
    }
    } 
 
`
export const BoxTexto = styled.div`
    background: none;
    display: flex;
    justify-content: center;
    &>h1{
        background: none;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 2px;
        margin-bottom: .2rem;
    }

    @media (max-width: 1650px){
        &>h1{
            font-size: 16px;
            text-align: center;
        }
    }
`
