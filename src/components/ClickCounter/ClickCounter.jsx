import { useState } from "react";
import Button from "../buttons/Button.jsx";

import s from "./ClickCounter.module.css";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("increment");
  };

  const handleDecrementClick = () => {
    setCount((prevCount) => prevCount - 1);
    console.log("decrement");
  };

  const handleResetClick = () => {
    setCount(0);
    console.log("reset");
  };

  return (
    <>
      <div className={s.container}>
        <p>Count: {`${count}`}</p>

        <div className={s.buttonsWrapper}>
          <Button
            className={s.incrementButton}
            buttonText="Increment"
            onClick={handleIncrementClick}
          />
          <Button
            className={s.decrementButton}
            buttonText="Decrement"
            onClick={handleDecrementClick}
          />
          <Button
            className={s.resetButton}
            buttonText="Reset"
            onClick={handleResetClick}
          />
        </div>
      </div>
    </>
  );
};

export default ClickCounter;
