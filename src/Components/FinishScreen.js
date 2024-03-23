function FinishScreen({ points, totalPoints, highScore, dispatch }) {
  const percentage = (points / totalPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage <= 100) emoji = "☺️";
  if (percentage >= 70 && percentage < 80) emoji = "🎉";
  if (percentage <= 60) emoji = "🤔";
  if (percentage === 0) emoji = "🤦";

  return (
    <>
      <div className="result">
        <p>
          <span>{emoji}</span>
          You scored {points} out of {totalPoints} ({Math.ceil(percentage)} %)
        </p>
      </div>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
