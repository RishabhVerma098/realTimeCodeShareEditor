import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { useSelector } from "react-redux";
import "./result.scss";
function Result() {
  const result = useSelector((state) => state.resultReducer);

  const style = {
    backgroundColor: "#01313f",
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    if (result.result) {
      const ans =
        result.result.stdout !== ""
          ? { code: 0, ans: result.result.stdout }
          : { code: 1, ans: result.result.stderr };

      setData(ans);
    }
  }, [result]);

  console.log(data);
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
      <div className="result">
        <h3>Output:</h3>
        <p style={{ color: data?.code === 1 ? "#b23e3e" : "#c9c9c9" }}>
          {data?.ans}
        </p>
      </div>
    </Resizable>
  );
}

export default Result;
