import { useContext } from "react";
import { CalcContext } from "../App";

export default function InputBlock({ title, name }) {
  const data = useContext(CalcContext);

  function handler(name, value) {
    data.handleData({ ...data.calcData, [name]: Number.parseInt(value) });
  }

  return (
    <div className="input-block">
      <span className="input-block-title">{title}</span>
      <input
        name={name}
        type="number"
        defaultValue={data.calcData[name]}
        onChange={(e) => handler(name, e.target.value)}
        min={0}
      ></input>
    </div>
  );
}
