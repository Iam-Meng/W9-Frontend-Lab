import React from "react";

export default function App() {
<<<<<<< HEAD
  // State to store the score value entered by the user
  const [score, setScore] = React.useState(4);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (score <= 3) {
      scoreColor = "#e74c3c"; 
    } else if (score <= 4) {
      scoreColor = "#f3bc47"; 
    } else if (score <= 7) {
      scoreColor = "#9cc54b94";
    } else {
      scoreColor = "#0af616";
=======
  const [score, setScore] = React.useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width based on current score (0–10)
    const scoreWidth = `${(score / 10) * 100}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (score >= 9) {
      scoreColor = "#1cde23";
    } else if (score >= 7) {
      scoreColor = "#3caf4099";
    } else if (score <= 4) {
      scoreColor = "#f44336";
    } else {
      scoreColor = "#f3bc47";
>>>>>>> 3862f8562ab0d87d10de12bdf73f16703d8d274b
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score}
          onChange={(e) => {
<<<<<<< HEAD
            const val = Math.min(10, Math.max(0, Number(e.target.value)));
            setScore(val);
          }}
        ></input>
=======
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) setScore(Math.min(Math.max(v, 0), 10));
          }}
        />
>>>>>>> 3862f8562ab0d87d10de12bdf73f16703d8d274b

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
