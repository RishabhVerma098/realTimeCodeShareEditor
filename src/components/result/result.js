import React from "react";
import { Resizable } from "re-resizable";
import { useSelector } from "react-redux";
function Result() {
  const result = useSelector((state) => state.resultReducer);
  console.log(result, "result");

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
    >
      <p></p>
    </Resizable>
  );
}

export default Result;
