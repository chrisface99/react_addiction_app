import React, { useState } from 'react';
import "./MemoryNotes.css"

const MemoryNotes = ({ selectedDate, isVisible }) => {
  const [noteText, setNoteText] = useState('');
  const [memoryNotes, setMemoryNotes] = useState([]);

  const handleAddNote = () => {
    if (selectedDate && noteText) {
      setMemoryNotes(prevNotes => [...prevNotes, { date: selectedDate, text: noteText }]);
      setNoteText('');
    }
  };

  return (
    <div className={`memory-notes ${isVisible ? 'visible' : 'hidden'}`}>
      <h2>Memory Notes</h2>
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]} // Format the date
        readOnly
      />
      <textarea
        placeholder="Add a memory note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        disabled={!isVisible}
      />
      <div className='button'>
      <button className='Sales-btn' onClick={handleAddNote} disabled={!isVisible}>Add Note</button> </div>
      {isVisible && (
        <div className="notes-list">
          {memoryNotes.map((note, index) => (
            <div key={index} className="note">
              <p>Date: {note.date.toDateString()}</p>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryNotes;
