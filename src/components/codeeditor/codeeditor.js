import React, { useState, useEffect } from "react";
import "./codeeditor.scss";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import uuid from "react-uuid";
function CodeEditor({ socket }) {
  const [value, setvalue] = useState("");
  const [code, setCode] = useState("");

  const onChange = (newValue) => {
    setvalue(newValue);
  };

  const joinroom = (username, roomname) => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname });
    } else {
      alert("username and roomname are must !");
    }
  };

  useEffect(() => {
    joinroom(uuid(), "private");
    socket.on("message", (data) => {
      console.log(data);
    });
  }, []);

  const sendcode = () => {
    if (value !== "") {
      socket.emit("program", value);
    }
  };

  useEffect(() => {
    sendcode();
  }, [value]);

  useEffect(() => {
    socket.on("code", (data) => {
      setCode(data.text);
    });
  }, [socket]);

  console.log(code);
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
        value={code}
      />
      <div className="run">
        <button>Run</button>
      </div>
    </div>
  );
}

export default CodeEditor;
