import React from "react";
import "./App.scss";
import { Resizable } from "re-resizable";
import CodeEditor from "./components/codeeditor/codeeditor";
function App() {
  const style = {
    backgroundColor: "#01252f",
  };

  return (
    <div className="App">
      <div className="left"></div>
      <div className="center">
        <div className="code-editor">
          <CodeEditor />
        </div>
        <Resizable
          className="terminal"
          style={style}
          defaultSize={{
            width: "100%",
            height: 200,
          }}
          maxHeight="400"
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
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
