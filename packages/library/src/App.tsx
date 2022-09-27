import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        your count is {count}
        <button onClick={() => setCount((prev) => ++prev)}>Click</button>
      </header>
    </div>
  );
}

export default App;
