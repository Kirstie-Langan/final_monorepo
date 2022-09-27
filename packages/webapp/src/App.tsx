import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@monorepos-tech-task/components";

function App() {
  const [count, setCount] = useState(0);

  console.log(Button);
  return (
    <div className="App">
      <header className="App-header">
       Monorepos Tech Task
        <br/>
        Your count is {count}
        <Button onClick={() => setCount((prev) => ++prev)} />
      </header>
    </div>
  );
}

export default App;
