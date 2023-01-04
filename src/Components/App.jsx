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
        isHeld: false,
        id: nanoid(),
      });
    }
    return randomValues;
  }

  function holdDice(id) {
    updatedRandomNumbers((prev) => {
      prev.map((item) => {
        return item.id === id ? { ...item, isHeld: !prev.isHeld } : item;
      });
    });
  }

  // function holdDice(id) {
  //   updatedRandomNumbers((oldDice) =>
  //     oldDice.map((die) => {
  //       return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
  //     })
  //   );
  // }

  const values = randomNumbers.map((num) => {
    return (
      <Die
        number={num.value}
        key={num.id}
        isHeld={num.isHeld}
        hold={() => {
          holdDice(num.id);
        }}
      />
    );
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
