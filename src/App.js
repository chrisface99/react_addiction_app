import React, { useState } from 'react';
import './App.css';
import Title from './Components/Title.js';
import Modal from './Components/Modal.js';
import EventList from './Components/EventList.js';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CalendarComponent from './Components/CalendarComponent';
import NewEventForm from './Components/NewEventForm';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([ ]);
  
  const addEvent = (event) => {
    setEvents((prevEvents) => {
return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => id !== event.id));
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "All the latest events in Warsaw";

  return (
    <div className="App">
      <Navbar />
      <br />
      <Title title="Events in your area" subtitle={subtitle} />

      {/* Three-Section Layout */}
      <div className="content">
        <div className="left-section">
          <div className="calendar-section">
            <CalendarComponent />
          </div>
        </div>

        <div className="main-section">
          <br />
          {showEvents && (
            <React.Fragment>
              <button className='sales-btn' onClick={() => setShowEvents(false)}>Hide events</button>
            </React.Fragment>
          )}
          {!showEvents && (
            <React.Fragment>
              <button className='sales-btn' onClick={() => setShowEvents(true)}>Show events</button>
            </React.Fragment>
          )}
          <React.Fragment>
            <button className='sales-btn' onClick={() => setShowModal(true)}>Add new event</button>
          </React.Fragment>

          {showEvents && <EventList events={events} handleClick={handleClick} />}
          {showModal && (
            <Modal handleClose={handleClose} isSalesModal={true}>
              <NewEventForm addEvent={addEvent}/>
            </Modal>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;