import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState(null)
    const [city, setCity] = useState(import.meta.env.VITE_CITY_BASE)

    console.log(weatherData)

    const getWeatherData = async() => {
        const urlTodayAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&APPID=${import.meta.env.VITE_API_KEY}&units=metric`
        await axios.get(urlTodayAPI)
        .then((response) => {
            setWeatherData(response.data)
        })
        .catch((error) => {
            console.log(error)
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

