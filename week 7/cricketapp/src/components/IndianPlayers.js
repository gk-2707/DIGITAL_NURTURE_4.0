import React from 'react';

const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index} style={{padding: '3px'}}>
          {player}
          </li>
      ))}
    </ul>
  );
};

export default ListofIndianPlayers;