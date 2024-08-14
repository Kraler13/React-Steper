import { useEffect, useState } from "react";
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Display from "./components/Display";
import "./Counter.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [showClock, setShowClock] = useState(true);

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  useEffect(()=>{
    console.log('wywołanie use effecta');
  }, [counter])

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />
      {showClock ? (
        <Clock setShowClock={setShowClock} />
      ) : (
        <p className="clockControl" onClick={() => setShowClock(true)}>
          pokaż zegar
        </p>
      )}
    </div>
  );
};

export default Counter;
