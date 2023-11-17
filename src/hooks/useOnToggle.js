import React, { useState } from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const useOnToggle = () => {
  const [turnOn, setTurnOn] = useState("false");

  const Icon = turnOn ? (
    <BsToggleOff
      color=" #1E3A8A"
      size={30}
      icon={turnOn ? "turn-off" : "turn-on"}
      onClick={() => setTurnOn((visibility) => !visibility)}
    />
  ) : (
    <BsToggleOn
      color=" green"
      size={30}
      icon={turnOn ? "turn-off" : "turn-on"}
      onClick={() => setTurnOn((visibility) => !visibility)}
    />
  );

  const ToggleType = turnOn;
  return [ToggleType, Icon];
};

export default useOnToggle;
