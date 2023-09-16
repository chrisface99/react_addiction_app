import './NewEventForm.css'

import React, { useState } from 'react'
import './NewEventForm.css'
export default function NewEventForm({addEvent}) {
const [title, setTitle] = useState('')
const [date ,setDate] = useState('')
const [location, setLocation] = useState('Warszawa')

const resetForm = () => {
setTitle('')
setDate('')
setLocation('Warszawa')  }

const handleSubmit = (e) => {
e.preventDefault()
const event = {
    title: title,
    date: date,
    location: location,
    id: Math.floor(Math.random() * 10000)
}
console.log(event)

addEvent(event)
resetForm()
}
  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
    <label>
        <span>Event title:</span>
    <input 
    type="text" 
    onChange={(e) => setTitle(e.target.value)} 
    value={title}
    />
    </label>
    <label>Event Date:</label>
    <input 
    type='date' 
    onChange={(e) => setDate(e.target.value)} 
    value={date}
    />
    <label>
      <span>Event location:</span>
      <select onChange={(e) => setLocation(e.target.value)}>
        <option value="Łódź">Łódź</option>
        <option value="Warszawa">Warszawa</option>
        <option value="Poznań">Poznań</option>
        <option value="Kraków">Kraków</option>
      </select>
    </label>
    <button className='sales-btn'>Submit</button>
    </form>
  )
}
