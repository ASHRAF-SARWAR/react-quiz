function Progress({ index, numQuestion, points, totalPoints, answer }) {
  return (
    <div className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}Points
      </p>
    </div>
  );
}

export default Progress;
