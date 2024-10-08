import { useContext, useState } from "react";
import { CalcContext } from "../App";
import Placeholder from "./Placeholder";

export default function InputBlock({ title, name }) {
  const data = useContext(CalcContext);
  const [error, setError] = useState(null);

  function handler(name, value) {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
      setError("Поле пустое!");
    } else if (parsedValue < 1) {
      setError("Поле меньше 1!");
    } else {
      data.handleData({ ...data.calcData, [name]: parsedValue });
      setError(null);
    }
  }

  return (
    <div className="input-block">
      <span className="input-block-title">{title}</span>
      <input
        name={name}
        type="number"
        defaultValue={data.calcData[name]}
        onChange={(e) => handler(name, e.target.value)}
        min={1}
      ></input>
      {error && <Placeholder text={error} />}
    </div>
  );
}
