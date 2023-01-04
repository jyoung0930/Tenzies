export default function Die({ number, isHeld }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die-box" styles={styles}>
      <h1 className="die-number">{number}</h1>
    </div>
  );
}
