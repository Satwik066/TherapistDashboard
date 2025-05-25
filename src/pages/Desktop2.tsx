import { FunctionComponent } from "react";
import "./Desktop2.css";

const Desktop2: FunctionComponent = () => {
  return (
    <div className="loginscreen">
      <section className="joyverse-wrapper">
        <h1 className="joyverse">JoyVerse</h1>
      </section>
      <section className="usernamecontainer-parent">
        <input
          className="usernamecontainer"
          placeholder="username"
          type="text"
        />
        <input
          className="passwordcontainer"
          placeholder="password"
          type="text"
        />
        <button className="login-button">
          <div className="login">login</div>
        </button>
      </section>
    </div>
  );
};

export default Desktop2;
