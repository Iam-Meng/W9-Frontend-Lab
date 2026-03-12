import React from "react";

export default function App() {
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
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) setScore(Math.min(Math.max(v, 0), 10));
          }}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
