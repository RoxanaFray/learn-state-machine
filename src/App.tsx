import { useState, useEffect } from "react";
import "./App.css";
import { creature } from "./creature/GlobalShit";
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
      <h4>Current State: {creatureData.stateName}</h4>
      <h4>Is Chewing: {creatureData.isChewing ? "yes" : "no"}</h4>
      <h4>Are eyes open: {creatureData.areEyesOpen ? "yes" : "no"}</h4>
      <h4>Heart Rate: {creatureData.heartRate}</h4>
      <h4>Fullness: {Math.round(creatureData.fullness * 100) / 100}</h4>
      <h4>Energy: {Math.round(creatureData.energy * 100) / 100}</h4>
      <h4>Boredom: {Math.round(creatureData.boredom * 100) / 100}</h4>
      <div className="card">
        <button
          onClick={() => {
            creature.giveFood();
          }}
        >
          GIVE FOOD
        </button>
        <button
          onClick={() => {
            creature.sendToBed();
          }}
        >
          SEND TO BED
        </button>
      </div>
    </>
  );
}

export default App;
