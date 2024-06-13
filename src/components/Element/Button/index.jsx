import React from "react";

export const Button = (props) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 ${classname}`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
