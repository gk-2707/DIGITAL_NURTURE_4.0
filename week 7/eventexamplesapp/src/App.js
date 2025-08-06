import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [agree, setAgree] = useState(false);

  const handleIncrement = () => {
    const updatedCount = count + 1;
    updateCount(updatedCount);
    greetUser(updatedCount);
  };

  const updateCount = (num) => {
    setCount(num);
  };

  const greetUser = (num) => {
    alert(`Hello from Member${num}! Keep going.`);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = () => {
    alert("Welcome to the Event Handling App!");
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    let convertedAmount = 0;
    switch (currency) {
      case 'USD':
        convertedAmount = parseFloat(amount) * 75;
        break;
      case 'EUR':
        convertedAmount = parseFloat(amount) * 80;
        break;
      case 'JPY':
        convertedAmount = parseFloat(amount) * 0.5;
        break;
      default:
        convertedAmount = parseFloat(amount);
    }

    alert(`Converted to ${currency}: ${convertedAmount.toFixed(2)}`);
  };

  return (
    <div className="App">
      <h1>Event Handling Example</h1>
      
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br /><br />

      <button onClick={sayWelcome}>Say Welcome</button>
      <br /><br />

      <button onClick={handleClick}>Click Me</button>
      <br /><br />

      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <br /><br />

        <label>Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">Euro</option>
          <option value="JPY">Yen</option>
        </select>
        <br /><br />

        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          I agree to the terms
        </label>
        <br /><br />

        <button type="submit">Convert</button>
      </form>
    </div>
  );
}

export default App;
