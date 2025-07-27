// import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculateScore'; // ✅ fixed spelling

function App() {
  return (
    <div>
      <CalculateScore
        Name={"Gokul"}
        School={"SNS CT"}
        Total={280} 
        Goal={3}  
      />
    </div>
  );
}

export default App;
