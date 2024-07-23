import { useState } from "react";
import s from "./Options.module.css";

const Options = () => {

  const [feedback, setFeedback] = useState(0);

  const handleGood = () => {
    setFeedback (feedback +1);
  };
  const handleNeutral = () => {

  };
  const handleBad = () => {

  };

  return (
    <div>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <p>Good: {feedback}</p>
      <p>Neutral: </p>
      <p>Bad: </p>
    </div>
  );
};

export default Options;
