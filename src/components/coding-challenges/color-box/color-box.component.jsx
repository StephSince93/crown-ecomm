import { useState } from "react";
import "./color-box.styles.scss";

import ColorBoxInput from "./color-box-input/color-box-input.component";

const ColorBox = () => {
  const [text, setText] = useState({
    backgroundColor: "none",
  });
  const handleChange = (data) => {
    

    setText({ ...text, ...data });
  };
  return (
    <div className="color-box-challenge">
      <h1 className="color-box-title">Color Box Challenge</h1>
      <div style={{ ...text }} className="color-box"></div>
      <ColorBoxInput updateData={handleChange} />
    </div>
  );
};

export default ColorBox;
