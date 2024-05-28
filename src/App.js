
import './App.css';
// import Header from './partials/Header';
import React, { useState } from 'react';

function App() {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [displayedValues, setDisplayedValues] = useState([]);

  const handleEventNameChange = (event) => {
      setEventName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
      setEventDescription(event.target.value);
  };

  const handleButtonClick = (event) => {
      event.preventDefault(); // Prevent form submission
      setDisplayedValues([...displayedValues, { name: eventName, description: eventDescription }]);
      setEventName(''); // Clear the event name input field after adding the value
      setEventDescription(''); // Clear the event description input field after adding the value
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
                  <div class='eventbox' key={index}>
                      <p>Event Name: {event.name}</p>
                      <p>Event Description: {event.description}</p>
                  </div>
              ))}
          </header>
      </div>
  );
}

export default App;