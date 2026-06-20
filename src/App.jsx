import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const reverseNumber = () => {
    if (number === "") {
      setResult("Please enter a number");
      return;
    }

    const reversed = number.toString().split("").reverse().join("");
    setResult(reversed);
  };

  return (
    <div className="container">
      <h1>Reverse Number App</h1>

      <input
        type="number"
        placeholder="Enter a Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={reverseNumber}>
        Reverse Number
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;