import React from "react";
import "./home.scss";
import CodeEditor from "../codeeditor/codeeditor";
import Result from "../result/result";
import Contain from "../ques/ques";

function Home({ socket }) {
  return (
    <div className="App">
      <div className="left">
        <Contain />
      </div>
      <div className="center">
        <div className="code-editor">
          <CodeEditor socket={socket} />
        </div>
        <Result />
      </div>
      {/* <div className="right"></div> */}
    </div>
  );
}
export default Home;
