import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Creature } from "./creature/Creature";

const creature: Creature = new Creature();

function App() {
  const [count, setCount] = useState(0);
  const [isChewing, setIsChewing] = useState(false);
  const [currentState, setCurrentState] = useState("");

  useEffect(() => {
    creature.setOnCurrentStateChangedAction(setCurrentState);
    creature.setOnIsChewingChangedAction(setIsChewing);
    creature.setIsActive(true);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Doggie</h1>
      <h4>Is Chewing: {isChewing ? "yes" : "no"}</h4>
      <h4>Current State: {currentState}</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() => {
            creature.giveFood();
          }}
        >
          GIVE FOOD
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
