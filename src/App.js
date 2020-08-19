import React from "react";
import "./App.scss";
import CodeEditor from "./components/codeeditor/codeeditor";
import Result from "./components/result/result";
import io from "socket.io-client";
const socket = io("http://localhost:8000");

function App() {
  return (
    <div className="App">
      <div className="left"></div>
      <div className="center">
        <div className="code-editor">
          <CodeEditor socket={socket} />
        </div>
        <Result />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
