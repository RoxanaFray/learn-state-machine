import { useState, useEffect } from "react";
import "./App.css";
import { creature } from "./creature/GlobalShit";
import { CreatureData } from "./creature/CreatureData";
import { RanAwayState } from "./creature/RanAwayState";

function App() {
  const [creatureData, setCreatureData] = useState(new CreatureData());
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    creature.setOnDataChangedAction((newData: CreatureData) => {
      if (newData.stateName == RanAwayState.stateName) {
        setIsPopup(true);
      }
      const dataCopy = JSON.parse(JSON.stringify(newData)) as CreatureData;
      setCreatureData(dataCopy);
    });
    creature.setIsActive(true);
  }, []);

  return (
    <>
      {isPopup && (
        <div className="ranAwayWrapper">
          <div className="ranAwayPopup">
            <h1>The Creature has run away from you :( </h1>
            <h2>
              It was too{" "}
              {creatureData.happiness == 0
                ? "bored"
                : creatureData.fullness == 0
                  ? "hungry"
                  : creatureData.energy == 0
                    ? "exhausted"
                    : ""}
              !
            </h2>
            <button
              onClick={() => {
                setIsPopup(false);
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
      <div>
        <h1>Creature</h1>
        <h4>Current State: {creatureData.stateName}</h4>
        <h4>Is Chewing: {creatureData.isChewing ? "yes" : "no"}</h4>
        <h4>Are eyes closed: {creatureData.areEyesClosed ? "yes" : "no"}</h4>
        <h4>Is Playing: {creatureData.isPlaying ? "yes" : "no"}</h4>
        <h4>Heart Rate: {creatureData.heartRate}</h4>
        <h4>Fullness: {Math.round(creatureData.fullness * 100) / 100}</h4>
        <h4>Energy: {Math.round(creatureData.energy * 100) / 100}</h4>
        <h4>Happiness: {Math.round(creatureData.happiness * 100) / 100}</h4>
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
          <button
            onClick={() => {
              creature.play();
            }}
          >
            PLAY
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
