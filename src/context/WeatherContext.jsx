import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState(null)
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

    useEffect(()=>{
        getWeatherData()
    }, [city])
    
    return (
        <WeatherContext.Provider value={{ weatherData, setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}

