import { useState, useEffect } from "react";
import "./App.css";
import { creature } from "./creature/GlobalVariables";
import { CreatureData } from "./creature/CreatureData";

function App() {
  const [creatureData, setCreatureData] = useState(new CreatureData());

  useEffect(() => {
    creature.setOnDataChangedAction((newData: CreatureData) => {
      const dataCopy = JSON.parse(JSON.stringify(newData)) as CreatureData;
      setCreatureData(dataCopy);
    });
    creature.setIsActive(true);
  }, []);

  return (
    <>
      <div></div>
      <h1>Creature</h1>
      <h4>Is Chewing: {creatureData.isChewing ? "yes" : "no"}</h4>
      <h4>Current State: {creatureData.stateName}</h4>
      <h4>Heart Rate: {creatureData.heartRate}</h4>
      <h4>Fullness: {Math.round(creatureData.fullness * 100) / 100}</h4>
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
