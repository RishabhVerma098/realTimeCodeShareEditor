import React, { useState } from "react";
import "./codeeditor.scss";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";
function CodeEditor() {
  const [value, setvalue] = useState("");

  const onChange = (newValue) => {
    setvalue(newValue);
  };

  const complie = () => {};
  return (
    <div className="container">
      <div className="nav">
        <ul>
          <li style={{ backgroundColor: "#659b67" }}>Code Editor</li>
          <li style={{ marginLeft: "1rem" }}>WhiteBoard</li>
        </ul>
      </div>
      <AceEditor
        placeholder="write you code here"
        mode="python"
        theme="solarized_dark"
        name="code"
        height="inherit"
        width="100%"
        onChange={onChange}
        fontSize={16}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <div className="run">
        <button onClick={() => complie()}>Run</button>
      </div>
    </div>
  );
}

export default CodeEditor;
