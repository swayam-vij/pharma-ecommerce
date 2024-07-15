import React, { useState } from 'react'

const OtpLogin = () => {

    const[number, setNumber] = useState("")
    const handleNumberChnage = (e) => {
        setNumber(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className="">
        <form onSubmit={handleSubmit}>
            <input type="search" />
            <input 
                type="text"
                value={number}
                onChange={handleNumberChnage}
                placeholder='000-000-0000'
            />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default OtpLogin