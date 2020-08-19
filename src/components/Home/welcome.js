import React, { useState } from "react";
import "./welcome.scss";
import { Link } from "react-router-dom";
function Welcome({ socket }) {
  const [username, setusername] = useState("");
  const [roomname, setroomname] = useState("");

  const joinroom = () => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname });
    } else {
      alert("username and roomname are must !");
    }
  };

  return (
    <div className="welcome">
      <div className="homepage">
        <h1>Welcome 🙏 </h1>
        <h4>
          Real-time colaborative editor ,<br /> By Rishabh verma
        </h4>
        <input
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        ></input>
        <input
          placeholder="Enter room name"
          value={roomname}
          onChange={(e) => setroomname(e.target.value)}
        ></input>
        <Link to={`/code/${roomname}/${username}`}>
          <button onClick={joinroom}>Join</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
