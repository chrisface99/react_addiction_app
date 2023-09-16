import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarComponent.css';
import MemoryNotes from './MemoryNotes';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notesVisible, setNotesVisible] = useState(false);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setNotesVisible(true);
  };

  return (
    <div className="calendar-container">
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <MemoryNotes selectedDate={selectedDate} isVisible={notesVisible} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default CalendarComponent;
