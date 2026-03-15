import React from "react";

export default function App() {
  // State to store the score value entered by the user
  const [score, setScore] = React.useState(0);

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
            const val = Math.min(10, Math.max(0, Number(e.target.value)));
            setScore(val);
          }}
        ></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
