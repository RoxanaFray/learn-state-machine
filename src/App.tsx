import { useState, useEffect } from "react";
import "./App.css";
import { creature } from "./creature/GlobalVariables";

function App() {
  const [isChewing, setIsChewing] = useState(false);
  const [fullness, setFullness] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [currentState, setCurrentState] = useState("");

  useEffect(() => {
    creature.setOnCurrentStateChangedAction(setCurrentState);
    creature.setOnIsChewingChangedAction(setIsChewing);
    creature.setOnHeartRateChangedAction(setHeartRate);
    creature.setOnFullnessChangedAction(setFullness);
    creature.setIsActive(true);
  }, []);

  return (
    <>
      <div></div>
      <h1>My Doggie</h1>
      <h4>Is Chewing: {isChewing ? "yes" : "no"}</h4>
      <h4>Current State: {currentState}</h4>
      <h4>Heart Rate: {heartRate}</h4>
      <h4>Fullness: {fullness}</h4>
      <div className="card">
        <button
          onClick={() => {
            creature.giveFood();
          }}
        >
          GIVE FOOD
        </button>
      </div>
    </>
  );
}

export default App;
