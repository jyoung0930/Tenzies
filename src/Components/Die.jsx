export default function Die({ number, isHeld, hold }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die-box" style={styles} onClick={hold}>
      <h1 className="die-number">{number}</h1>
    </div>
  );
}
