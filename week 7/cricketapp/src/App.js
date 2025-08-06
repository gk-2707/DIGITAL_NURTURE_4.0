import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import { OddPlayers, EvenPlayers } from './components/OddEvenPlayers';
import ListofIndianPlayers from './components/IndianPlayers';
import './App.css';

function App() {
  const [flag, setFlag] = useState(true);

  const players = [
    { name: 'Rohit Sharma', score: 45 },
    { name: 'David Warner', score: 70 },
    { name: 'Shubman Gill', score: 55 },
    { name: 'Suryakumar Yadav', score: 67 },
    { name: 'KL Rahul', score: 60 },
    { name: 'Steve Smith', score: 92 },
    { name: 'Travis Head', score: 105 },
    { name: 'Marcus Stoinis', score: 81 },
    { name: 'Axar Patel', score: 66 },
    { name: 'Cameron Green', score: 72 },
    { name: 'Mitchell Marsh', score: 88 },
  ];

  const IndianTeam = [
    'Rohit Sharma',
    'Shubman Gill',
    'Virat Kohli',
    'Ishan Kishan',
    'Rishabh Pant',
    'Axar Patel'
  ];

  const T20Players = ['Tilak Varma', 'Sanju Samson', 'Arshdeep Singh'];
  const RanjiTrophyPlayers = ['Rajat Patidar', 'Prithvi Shaw', 'Mayank Agarwal'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div className="app-container">
      <button className="toggle-button" onClick={() => setFlag(!flag)}>
        {flag ? 'Show Indian Players' : 'Show All Players'}
      </button>
      <hr />
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Odd Players</h1>
          <OddPlayers players={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers players={IndianTeam} />
          <hr />
          <h1>List of Indian Players Merged</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      )}
    </div>
  );
}

export default App;
