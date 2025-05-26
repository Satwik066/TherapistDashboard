import { FunctionComponent } from "react";
import WordQuestButton from "../components/WordQuestButton";
import "./Games.css";

const Games: FunctionComponent = () => {
  return (
    <div className="games">
      <header className="header">
        <div className="headertext">
          <h2 className="choose-your-game">Choose Your Game</h2>
          <div className="select-a-game">
            Select a game and start your adventure!
          </div>
        </div>
      </header>
      <main className="gameselector">
        <WordQuestButton wordQuest="Word Quest" />
        <WordQuestButton
          wordQuestButtonHeight="298px"
          wordQuestGap="21px"
          wordQuest="Math Fun"
        />
        <WordQuestButton
          wordQuestButtonHeight="298px"
          wordQuestGap="21px"
          wordQuest="Fun Quiz"
        />
        <WordQuestButton
          wordQuestButtonHeight="298px"
          wordQuestGap="5px"
          wordQuest="Fun with Syllables"
        />
        <WordQuestButton
          wordQuestButtonHeight="298px"
          wordQuestGap="21px"
          wordQuest="Shape Memory  "
        />
        <WordQuestButton
          wordQuestButtonHeight="unset"
          wordQuestGap="21px"
          wordQuest="Letter Bridging "
        />
        <WordQuestButton
          wordQuestButtonHeight="298px"
          wordQuestGap="21px"
          wordQuest="Mirror Word"
        />
        <WordQuestButton
          wordQuestButtonHeight="298px"
          wordQuestGap="21px"
          wordQuest="Find the Letter"
        />
      </main>
    </div>
  );
};

export default Games;
