import React from "react";
import { Link } from "react-router-dom";

import "./Home.module.css";

function Home(props) {
  return (
    <div>
      <div>
        <h1>
          <Link className="ls" to="/login">LOGIN</Link>
        </h1>
        <br />
        <h1>
          <Link className="ls" to="/signup">SIGNUP</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2 className="nn">{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;