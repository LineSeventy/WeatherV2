import React, { useState } from 'react'
import Header from '../Components/Header'


export default function Home() {
  
  const [location, setLocation] = useState<string>("")
  const [userInput,setUserInput] = useState("")
  
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
    <p>{location}  </p>
    </>
  )
}
