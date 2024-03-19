import { useState } from "react";
import Button from "./Button";

export default function QuantityBtn({parentClassname,decClassName,inpClassName,incClassName}) {
  const [increment, setIncrement] = useState(1);
  const handleIncrementChange = (event) => {
    setIncrement(event.target.value);
  };
  return (
    <div className={parentClassname}>
      <Button
        onClick={() => {
          increment >= 1 ? setIncrement(Number(increment) - 1) : setIncrement(0);
        }}
        className={decClassName}
        name="quantity-subtract"
        id="quantity-subtract"
      >
        -
      </Button>
      <input
        className={inpClassName}
        name="quantity"
        id="quantity"
        value={increment}
        onChange={handleIncrementChange}
      ></input>
      <Button
        onClick={() => {
          setIncrement(Number(increment) + 1);
        }}
        className={incClassName}
        name="quantity-add"
        id="quantity-add"
      >
        +
      </Button>
    </div>
  );
}
