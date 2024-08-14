import { useEffect, useState } from "react";
import ButtonsPanel from "./components/ButtonsPanel";
import SteperDisplay from "./components/SteperDisplay";
import Form from "./components/Form";

const Steps = (props) => {
  const [steper, setSteper] = useState(props.StepsInitValue);
  const [stepValue, setStepValue] = useState(1);
  const updateCounter = (action) => {
    if (action === "add") {
      setSteper(steper + stepValue);
    } else if (action === "reset") {
      setSteper(props.StepsInitValue);
    } else {
      setSteper(0);
    }
  };

  const handleStepValueChange = (value) => {
    setStepValue(value);
  };
  return (
    <div className="counter">
      <SteperDisplay steper={steper} />

      <ButtonsPanel updateCounter={updateCounter} />

      <Form handleStepValueChange={handleStepValueChange} />
    </div>
  );
};

export default Steps;