import { React } from "react";
export default function Button({
  className = "",
  onClick = () => {},
  children,
  id,
  name,
  disable,
}) {
  // console.log(onClick);
  return (
    <button
      className={`${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      id={`${id}`}
      name={`${name}`}
      disabled={disable}
    >
      {children}
    </button>
  );
}
