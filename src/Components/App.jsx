import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";
import Confetti from "react-confetti";

export default function App() {
  const [randomNumbers, updatedRandomNumbers] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);

  useEffect(() => {
    const allHeld = randomNumbers.every((die) => die.isHeld);
    const firstValue = randomNumbers[0].value;
    const allSameValue = randomNumbers.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [randomNumbers]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const randomValues = [];
    for (let i = 0; i < 10; i++) {
      randomValues.push(generateNewDie());
    }
    return randomValues;
  }

  function holdDice(id) {
    updatedRandomNumbers((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

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
    updatedRandomNumbers((prev) =>
      prev.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );

    // if (!tenzies) {
    //   setRolls((prev) => prev + 1);
    // }
    !tenzies && setRolls((prev) => prev + 1);
  }

  console.log(rolls);

  function handleReset() {
    updatedRandomNumbers(allNewDice());
    setTenzies(false);
    setRolls(0);
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-grid">{values}</div>
      <h1>Rolls: {rolls}</h1>
      {tenzies ? (
        <button onClick={handleReset} className="roll-btn">
          New Game
        </button>
      ) : (
        <button onClick={handleRoll} className="roll-btn">
          Roll
        </button>
      )}
    </main>
  );
}
