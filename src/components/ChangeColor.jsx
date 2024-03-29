import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="change-color">
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(changeColor(color))}>Change color</button>
    </div>
  );
};

export default ChangeColor;
