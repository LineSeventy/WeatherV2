import React, { useState,useEffect } from 'react'
import Header from '../Components/Header'
import getWeather from "../Hooks/Weather"

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

  const [userInput,setUserInput] = useState("")
  const weatherApiKey:string = "";
  
  const weatherInfo = getWeather(location,weatherApiKey)  
  
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
