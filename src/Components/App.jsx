import Die from "./Die";

export default function App() {
  function allNewDice() {
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      randomNumbers.push(Math.ceil(Math.random() * 6) + 1);
    }
    return randomNumbers;
  }
  console.log(allNewDice());

  return (
    <main>
      <div className="die-grid">
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
        <Die number={1} />
      </div>
    </main>
  );
}
