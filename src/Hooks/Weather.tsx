import React, { useState,useEffect } from 'react'


interface weatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
export default function getWeather  (location:string,apiKey:string) {
    const [weatherInfo, setWeatherInfo] = useState<weatherData | string>("");
  useEffect(() => {
     if (!location) return;
    const fetchWeather= async() =>{
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);
          if(!response.ok){
            throw new Error("Failed to Fetch")
          }
          const data: weatherData = await response.json();
          setWeatherInfo(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchWeather();
  })
    return weatherInfo;
}
