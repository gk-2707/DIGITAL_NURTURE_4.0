import React from 'react';

export function OddPlayers({ players }) {
  const [first, , third, , fifth] = players;
  return (
        <ul>
    <div>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
      </ul>
  );
}

export function EvenPlayers({ players }) {
  const [, second, , fourth, , sixth] = players;
  return (
    <ul>
        <div>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
      </div>
    </ul>
  );
}