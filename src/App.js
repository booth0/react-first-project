
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [displayedValues, setDisplayedValues] = useState([]);

  // Load data from local storage when the component mounts
  useEffect(() => {
      const savedValues = localStorage.getItem('events');
      if (savedValues) {
          setDisplayedValues(JSON.parse(savedValues));
      }
  }, []);

  // Save data to local storage whenever displayedValues changes
  useEffect(() => {
      localStorage.setItem('events', JSON.stringify(displayedValues));
  }, [displayedValues]);

  const handleEventNameChange = (event) => {
      setEventName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
      setEventDescription(event.target.value);
  };

  const handleButtonClick = (event) => {
      event.preventDefault(); // Prevent form submission
      const newEvent = { name: eventName, description: eventDescription };
      setDisplayedValues([...displayedValues, newEvent]);
      setEventName(''); // Clear the event name input field after adding the value
      setEventDescription(''); // Clear the event description input field after adding the value
  };

  const handleDeleteClick = (index) => {
      const updatedValues = displayedValues.filter((_, i) => i !== index);
      setDisplayedValues(updatedValues);
  };

  return (
      <div className="App">
          <header className="App-header">
              <h1>Event Planner Web App</h1>
              <form> 
                  <div>
                      <label htmlFor="eventName">Enter Event Name: </label>
                      <input
                          type="text"
                          id="eventName"
                          value={eventName}
                          onChange={handleEventNameChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="eventDescription">Enter Event Description: </label>
                      <input
                          type="text"
                          id="eventDescription"
                          value={eventDescription}
                          onChange={handleDescriptionChange}
                      />
                  </div>
                  <button onClick={handleButtonClick}>Create Event</button>
              </form>
              {displayedValues.map((event, index) => (
                  <div className='eventbox' key={index}>
                      <p>Event Name: {event.name}</p>
                      <p>Event Description: {event.description}</p>
                      <button onClick={() => handleDeleteClick(index)}>X</button>
                  </div>
              ))}
          </header>
      </div>
  );
}

export default App;