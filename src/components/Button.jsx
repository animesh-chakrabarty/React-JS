import React from "react";

const Button = ({ title }) => {
  return (
    <button className="px-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-400 ">
      {title}
    </button>
  );
};

export default Button;
