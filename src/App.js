import React from "react";
import "./App.scss";
import { Resizable } from "re-resizable";
import CodeEditor from "./components/codeeditor/codeeditor";

import io from "socket.io-client";
const socket = io("http://localhost:8000");

const style = {
  backgroundColor: "#01313f",
};
function App() {
  return (
    <div className="App">
      <div className="left"></div>
      <div className="center">
        <div className="code-editor">
          <CodeEditor socket={socket} />
        </div>
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
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
