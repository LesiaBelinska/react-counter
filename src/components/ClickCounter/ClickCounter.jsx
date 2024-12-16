import { useSelector, useDispatch } from "react-redux";

import Button from "../Buttons/Button.jsx";
import s from "./ClickCounter.module.css";

const ClickCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.container}>
        <p>Count: {count}</p>

        <div className={s.buttonsWrapper}>
          <Button
            className={s.incrementButton}
            buttonText="Increment"
            onClick={() => dispatch({ type: "INCREMENT" })}
          />
          <Button
            className={s.decrementButton}
            buttonText="Decrement"
            onClick={() => dispatch({ type: "DECREMENT" })}
          />
          <Button
            className={s.resetButton}
            buttonText="Reset"
            onClick={() => dispatch({ type: "RESET" })}
          />
        </div>
      </div>
    </>
  );
};

export default ClickCounter;

// import { useState } from "react";
// import Button from "../Buttons/Button.jsx";

// import s from "./ClickCounter.module.css";

// const ClickCounter = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrementClick = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const handleDecrementClick = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   const handleResetClick = () => {
//     setCount(0);
//   };

//   return (
//     <>
//       <div className={s.container}>
//         <p>Count: {`${count}`}</p>

//         <div className={s.buttonsWrapper}>
//           <Button
//             className={s.incrementButton}
//             buttonText="Increment"
//             onClick={handleIncrementClick}
//           />
//           <Button
//             className={s.decrementButton}
//             buttonText="Decrement"
//             onClick={handleDecrementClick}
//           />
//           <Button
//             className={s.resetButton}
//             buttonText="Reset"
//             onClick={handleResetClick}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClickCounter;
