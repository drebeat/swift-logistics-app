import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState("false");

  const Icon = visible ? (
    <BsEyeSlash
      color=" #1E3A8A"
      size={18}
      icon={visible ? "eye-slash" : "eye"}
      onClick={() => setVisible((visibility) => !visibility)}
    />
  ) : (
    <BsEye
      color=" #1E3A8A"
      size={18}
      icon={visible ? "eye-slash" : "eye"}
      onClick={() => setVisible((visibility) => !visibility)}
    />
  );

  const InputType = visible ? "password" : "text";
  return [InputType, Icon];
};

export default usePasswordToggle;
