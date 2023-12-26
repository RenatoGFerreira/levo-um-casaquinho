import axios from "axios";
import dayjs from "dayjs";
import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'


export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState(null)
    const [nextDaysData, setNextDaysData] = useState(null)
    const [city, setCity] = useState(import.meta.env.VITE_CITY_BASE)

    const getWeatherData = async() => {
        const urlTodayAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&APPID=${import.meta.env.VITE_API_KEY}&units=metric`
        await axios.get(urlTodayAPI)
        .then((response) => {
            setWeatherData(response.data)
        })
        .catch((error) => {
            if (error.response.status === 404) {
                alert("Por favor, confira o nome da cidade digitada.")
        
              } else if (error.response.status === 401 || error.response.status === 400) {
                alert("Por favor, verifique as suas credenciais de acesso!")
            
              } else if (error.response.status === 429) {
                alert("Por favor, aguarde um tempo. A API está com muitas requisições!")
                
              } else {
                alert("Algo de errado aconteceu! Tente novamente mais tarde.")
                console.error(error);
            }
        })
    }

    const getWeatherForecast = async () => {
        const urlForecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=pt_br&cnt=40&APPID=${import.meta.env.VITE_API_KEY}&units=metric`;
        await axios.get(urlForecastAPI)
        .then((response) => {
            let dataForecast = []
            for(let i = 0 ; i <= 6 ; i++){
                dataForecast.push({
                    Temperatura: response.data.list[i].main.temp, 
                    Dia: response.data.list[i].dt
                    //day: dayjs(response.data.list[i].dt_txt).format(`DD/MM`)
                    //Date: dayjs(response.data.list[i].dt).format("DD/MM/YYYY")
                })
                
            }
            setNextDaysData(dataForecast)
        })
        .catch((error) => {
            alert("Algo de errado aconteceu! Tente novamente mais tarde.")
            console.error(error);
        })
    }



    useEffect(()=>{
        getWeatherData()
        getWeatherForecast()
    }, [city])
    
    return (
        <WeatherContext.Provider value={{ weatherData, setCity, nextDaysData}}>
            {children}
        </WeatherContext.Provider>
    )
}

