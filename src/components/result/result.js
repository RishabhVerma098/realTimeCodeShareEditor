import React from "react";
import { Resizable } from "re-resizable";

function Result() {
  const style = {
    backgroundColor: "#01313f",
  };
  return (
    <Resizable
      className="terminal"
      style={style}
      defaultSize={{
        width: "100%",
        height: 200,
      }}
      enable={{
        top: true,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      minHeight={30}
    ></Resizable>
  );
}

export default Result;
