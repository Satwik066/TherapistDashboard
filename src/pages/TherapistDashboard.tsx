import { FunctionComponent } from "react";
import Search from "../components/Search";
import ChildrenTable from "../components/ChildrenTable";
import "./TherapistDashboard.css";

const TherapistDashboard: FunctionComponent = () => {
  return (
    <div className="therapistdashboard">
      <header className="header1">
        <div className="welcometext">
          <h3 className="welcome-back-therapist">Welcome Back, Therapist!</h3>
          <div className="logged-in-students">Logged-in Students</div>
        </div>
      </header>
      <div className="searchbarcontainer">
        <div className="searchbar">
          <input
            className="search-by-name"
            placeholder="Search By Name or Username"
            type="text"
          />
        </div>
        <div className="searchbutton">
          <Search size={48} />
        </div>
      </div>
      <button className="addchildbutton">
        <div className="addchildtext">
          <div className="add-child">Add Child</div>
        </div>
      </button>
      <section className="addchildcard">
        <form className="addchildform">
          <div className="inputfields">
            <div className="username">
              <input className="username1" placeholder="Username" type="text" />
            </div>
            <div className="username">
              <input className="name1" placeholder="Name" type="text" />
            </div>
            <div className="username">
              <input className="password1" placeholder="Password" type="text" />
            </div>
          </div>
          <button className="addchildbutton1">
            <div className="addchildtext">
              <div className="add-child">Add Child</div>
            </div>
          </button>
        </form>
      </section>
      <ChildrenTable />
      <h3 className="game-sessions-for">{`Game Sessions for {name}:`}</h3>
      <main className="gamesessioncard">
        <div className="sessiondata">
          <div className="session-num-game-difficul-container">
            <p className="session-num-game-difficul">{`Session {num}: {game} Difficulty: {difficulty}`}</p>
            <p className="session-num-game-difficul">{`Score: {score}`}</p>
            <p className="session-num-game-difficul">{`Start: {starttime}`}</p>
            <p className="session-num-game-difficul">{`End: {endtime}`}</p>
            <p className="session-num-game-difficul">&nbsp;</p>
            <p className="session-num-game-difficul">{` `}</p>
          </div>
          <div className="emotiontimeline">
            <div className="session-num-game-difficul-container">{`Emotion Timeline: `}</div>
            <textarea className="emotiontimeline-child" rows={12} cols={58} />
          </div>
        </div>
      </main>
      <section className="footer">
        <h2 className="joyverse1">JoyVerse</h2>
      </section>
    </div>
  );
};

export default TherapistDashboard;