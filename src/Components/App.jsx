import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

export default function App() {
  const [randomNumbers, updatedRandomNumbers] = useState(allNewDice());

  function allNewDice() {
    const randomValues = [];
    for (let i = 0; i < 10; i++) {
      randomValues.push({
        value: Math.ceil(Math.random() * 6) + 1,
        isHeld: true,
        id: nanoid(),
      });
    }
    return randomValues;
  }

  const values = randomNumbers.map((num, index) => {
    return <Die number={num.value} key={index} isHeld={num.isHeld} />;
  });

  function handleRoll() {
    updatedRandomNumbers(allNewDice());
  }

  return (
    <main>
      <div className="die-grid">{values}</div>
      <button onClick={handleRoll} className="roll-btn">
        Roll
      </button>
    </main>
  );
}
