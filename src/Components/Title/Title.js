import React from "react";

const Title = (props) => {
  return (
    <div className="title py-2 mb-6 text-center">
      <h1 className="text-3xl py-2 font-bold">{props.title}</h1>
      <hr className="w-1/3 mx-auto border-black" />
    </div>
  );
};

export default Title;
