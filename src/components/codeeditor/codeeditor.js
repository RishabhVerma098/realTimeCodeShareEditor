import React, { useState, useEffect } from "react";
import "./codeeditor.scss";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { complied_result } from "../../store/actions";

function CodeEditor({ socket }) {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const onChange = (newValue) => {
    sendcode(newValue);
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

  const sendcode = (value) => {
    if (value !== "") {
      socket.emit("program", value);
    }
  };

  useEffect(() => {
    socket.on("code", (data) => {
      //add
      setCode(data.text);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("complied-code", (data) => {
      dispatch(complied_result(data));
    });
  }, [socket]);

  const runCode = () => {
    socket.emit("compile", code);
  };

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
        <button onClick={() => runCode()}>Run</button>
      </div>
    </div>
  );
}

export default CodeEditor;
