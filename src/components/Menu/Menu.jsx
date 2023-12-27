import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import casaquinho from "../../assets/casaco.png";
import { RiSearch2Line } from "react-icons/ri";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"
import { WeatherContext } from "../../context/WeatherContext";
import dayjs from "dayjs";

export default function Menu({ isChecked, setIsChecked, isDarkMode, setIsDarkMode }) {
    const { weatherData, setCity } = useContext(WeatherContext)
    const [icon, setIcon] = useState(weatherData?.weather[0]?.icon)
    const [cityName, setCityName] = useState({ city: '' })
    const [mainColor, setMainColor] = useState('grey')

    const handleCheck = () => {
        setIsChecked((prevState) => !prevState)
    }
    const handleDarkMode = () => {
        setIsDarkMode((prevState) => !prevState)
    }

    function weekday() {
        switch (dayjs().format('dddd')) {
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

    function weather() {
        switch (weatherData?.weather[0]?.main) {
            case 'Clear':
                return setMainColor('#ec6e4c');
            case 'Clouds':
                return setMainColor('#616161');
            case 'Rain':
                return setMainColor('#4B91E1');
            case 'Snow':
                return setMainColor('#A8A8A8');
            case 'Thunderstorm':
                return setMainColor('#AA00FF');
            case 'Drizzle':
                return setMainColor('#ACC5E6');
            case 'Mist':
                return setMainColor('#A8A8A8');
            default:
                return setMainColor('black');
        }
    }

    function handleChange(event) {
        const newCity = { ...cityName };
        newCity[event.target.name] = event.target.value;
        setCityName(newCity);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!cityName.city) {
            return
        }
        setCity(cityName.city)
    }

    useEffect(() => {
        weather()
    }, [weatherData])

    useEffect(() => {
        setIcon(weatherData?.weather[0]?.icon)
    }, [weatherData])

    return (
        <ScreenContainer isDarkMode={isDarkMode}>
            <BoxContainer isDarkMode={isDarkMode}>
                <BoxTitle isDarkMode={isDarkMode}>
                    <img src={casaquinho} alt="Casaquinho" />
                    <div>
                        <h1>Levo um casaquinho?</h1>
                    </div>
                </BoxTitle>
                <BoxInput>
                    <StyledForm isDarkMode={isDarkMode} onSubmit={(event) => handleSubmit(event)}>
                        <Icone onClick={(event) => handleSubmit(event)} />
                        <StyledInput
                            type="text"
                            placeholder="Digite uma cidade"
                            name="city"
                            value={cityName.city}
                            onChange={(event) => handleChange(event)}
                            isDarkMode={isDarkMode}
                        />
                    </StyledForm>
                </BoxInput>
                <BoxTemperatura>
                    {weatherData ?
                        <>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Descrição do céu" />
                                <span style={{ color: mainColor }}>{isChecked ? (weatherData?.main?.temp * 1.8 + 32).toFixed(0) + "° F" : weatherData?.main?.temp.toFixed(0) + "º C"}</span>
                            </div>
                            <div>
                                <h1 style={{ color: mainColor }}>{weatherData?.weather[0]?.description.charAt(0).toUpperCase() + weatherData?.weather[0]?.description.slice(1)}</h1>
                            </div>
                        </>
                        : (
                            <LoadingCircle />
                        )}
                    <Barra />
                </BoxTemperatura>
                <BoxDia isDarkMode={isDarkMode}>
                    <span>{dayjs().format('DD/MM/YYYY')}</span>
                    <span>{weekday()}, {dayjs().format("hh:mm")}</span>
                </BoxDia>
                <BoxModos isDarkMode={isDarkMode}>
                    <div>
                        <ToggleSwitch isChecked={isChecked} onClick={handleCheck} />
                        <span>{isChecked ? "ºC" : "ºF"}</span>
                    </div>
                    <div>
                        <ToggleSwitch isDarkMode={isDarkMode} onClick={handleDarkMode} />
                        <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                    </div>
                </BoxModos>
                <BoxTexto isDarkMode={isDarkMode}>
                    <h1>Criado por Renato Ferreira. 2023</h1>
                </BoxTexto>
            </BoxContainer>
        </ScreenContainer>
    )
}

export const LoadingCircle = styled.div`
    width: 60px;
    height: 60px;
    background: none;
    margin: 35px;
    &:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border-top: 2px solid #cecece;
        border-right: 2px solid transparent;
        animation: spinner 0.8s linear infinite;
    }   

    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }

`
export const ScreenContainer = styled.div`
    z-index: 1;
    box-sizing: border-box;
    background-color: ${((props) => props.isDarkMode ? "#232526" : "#fff")};
    box-shadow: 5px 5px 5px #cecece;
    box-shadow: ${((props) => props.isDarkMode ? "5px 5px 5px #0D0D0D;" : "5px 5px 5px #cecece;")};;
    width: 33%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    @media (max-width: 1600px) {
        width: 100%;
    }  
`
export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: ${((props) => props.isDarkMode ? "#232526" : "#fff")};;
    width: 92%;
    height: 92%;
`
export const BoxTitle = styled.div`
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .2rem;
    &>img{
        background: none;
    }
    &>div{
        background: none;
        width: 60%;
    }
    &>div>h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 60px;
        background: none;
        color: ${(props) => props.isDarkMode ? "#fff" : "#ooo"};
        @media (max-width: 1775px) {
            font-size: 50px;
        }
    }
    @media (max-width: 1600px) {
        flex-direction: column;
        &>img{
            width: 90px;
        }
        &>div{
           width: 100%;
           display: flex;
           justify-content: center;
        }
        &>div>h1{
            display: block;
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
    background-color: ${(props) => props.isDarkMode ? "#2c2f30" : "#efefef"};
    margin: 30px 0 25px;
    border-radius: 15px;
`
export const StyledInput = styled.input`
    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => props.isDarkMode ? "#2c2f30" : "#efefef"};    
    width: 85%;
    padding: 10px;
    border-radius: 5px;
    font-size: 24px;
    color: ${(props) => props.isDarkMode ? "#d4d0cb" : "#424243"};
    &::placeholder{
        color: ${(props) => props.isDarkMode ? "#d4d0cb" : "#424243"};
    }
`
export const Icone = styled(RiSearch2Line)`
    cursor: pointer;
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
        }
        &>h1{
            background: none;
            font-size: 30px;
            font-weight: 400;
            letter-spacing: 3px;
        }
    }
    @media (max-width: 1600px){
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
    @media (max-width: 992px) {
        margin-top: 5px;
    }
`
export const BoxDia = styled.div`
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    &>span{
        color: ${(props) => props.isDarkMode ? "#d4d0cb" : "#000"};
        background: none;
        font-size: 26px;
        padding: 5px;
    }
    @media (max-width: 1600px){
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
            margin-left: .6rem;
            background: ${(props) => props.isDarkMode ? "#232526" : "#fff"};;
            font-size: 26px;
            color: ${(props) => props.isDarkMode ? "#d4d0cb" : "#000"};
        }
    } 
    @media (max-width: 1600px){
        &>div{ 
            justify-content: center;
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
        color: ${(props) => props.isDarkMode ? "#d4d0cb" : "#424243"};
        background: none;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 2px;
        margin-bottom: .2rem;
    }

    @media (max-width: 1600px){
        &>h1{
            font-size: 16px;
            text-align: center;
        }
    }
`