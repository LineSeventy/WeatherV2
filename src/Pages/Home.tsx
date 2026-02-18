import React, { useState,useEffect } from 'react'
import Header from '../Components/Header'
import { error } from 'console';

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
export default function Home() {
  
  const [location, setLocation] = useState<string>("")
  const [weatherInfo, setWeatheInfo]= useState<string>("")
  const [userInput,setUserInput] = useState("")
  const weatherApiKey:string = " ";
  
  useEffect(() => {
     if (!location) return;
    const fetchWeather= async() =>{
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${location}&aqi=no`);
          if(!response.ok){
            throw new Error("Failed to Fetch")
          }
          const data: weatherData = await response.json();
          setWeatheInfo(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchWeather();
  }, [location])
  
  const handleLocation = (name:string) =>{
    setLocation(name)
    
  }
  return (
    <>
    <Header/>
    <form >
      <label htmlFor="name">
        <input 
        type="text"
        name='name'
        value={userInput}
        onChange={(e)=> setUserInput(e.target.value)}
        />
      </label>
    </form>
    <button onClick={()=> handleLocation(userInput)} >Search</button>
    {weatherInfo && (
      <p>
        {weatherInfo.location.name} - {weatherInfo.current.condition.text}
      </p>
    )}
    </>
  )
}
