import "./styles.css";
import Rect from "./Rect";

export default function Generate() {
  const arr = new Array(101)
    .fill(0)
    .map((d, i) => i)
    .filter((d, i) => d % 2 === 0);
  const arrLength = arr.length;
  const today = new Date();
  const dates = Array.from({ length: arrLength }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i * 2);
    return date;
  });

  const randomValues = dates.map((date) => ({
    date,
    val: Math.floor(Math.random() * 51)
  }));

  const mystyle = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={mystyle}>
      {randomValues.map(({ val }, index) => (
        <Rect val={val} index={index} />
      ))}
    </div>
  );
}
