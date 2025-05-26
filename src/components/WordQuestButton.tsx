import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./WordQuestButton.css";

export type WordQuestButtonType = {
  className?: string;
  wordQuest?: string;

  /** Style props */
  wordQuestButtonHeight?: CSSProperties["height"];
  wordQuestGap?: CSSProperties["gap"];
};

const WordQuestButton: FunctionComponent<WordQuestButtonType> = ({
  className = "",
  wordQuestButtonHeight,
  wordQuestGap,
  wordQuest,
}) => {
  const wordQuestButtonStyle: CSSProperties = useMemo(() => {
    return {
      height: wordQuestButtonHeight,
    };
  }, [wordQuestButtonHeight]);

  const wordQuestStyle: CSSProperties = useMemo(() => {
    return {
      gap: wordQuestGap,
    };
  }, [wordQuestGap]);

  return (
    <button
      className={`wordquestbutton ${className}`}
      style={wordQuestButtonStyle}
    >
      <div className="wordquest" style={wordQuestStyle}>
        <div className="button-shapes" />
        <div className="word-quest">{wordQuest}</div>
      </div>
    </button>
  );
};

export default WordQuestButton;
