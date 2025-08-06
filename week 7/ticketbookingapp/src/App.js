import React, { useState } from 'react';
import './App.css';

function FlightList() {
  const flights = [
    { id: 1, from: 'Mumbai', to: 'Delhi', time: '10:00 AM' },
    { id: 2, from: 'Chennai', to: 'Bangalore', time: '01:30 PM' },
    { id: 3, from: 'Kolkata', to: 'Hyderabad', time: '06:15 PM' },
  ];

  return (
    <div className="flight-list">
      <h3>Available Flights</h3>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            ✈️ {flight.from} → {flight.to} | Time: {flight.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

function GuestView({ onLogin }) {
  return (
    <div className="card">
      <h2>Welcome Guest!</h2>
      <p>Please login to book your tickets.</p>
      <FlightList />
      <button className="btn login" onClick={onLogin}>Login</button>
    </div>
  );
}

function UserView({ onLogout }) {
  return (
    <div className="card">
      <h2>Welcome Back!</h2>
      <p>You are logged in and can now book your flights.</p>
      <FlightList />
      <button className="btn logout" onClick={onLogout}>Logout</button>
      <button className="btn book">Book Ticket</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <h1 className="app-title">✈️ Ticket Booking App</h1>
      {isLoggedIn ? (
        <UserView onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestView onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
