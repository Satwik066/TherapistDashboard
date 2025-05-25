import { FunctionComponent } from "react";
import "./Search.css";

export type SearchType = {
  className?: string;

  /** Variant props */
  size?: 48;
};

const Search: FunctionComponent<SearchType> = ({
  className = "",
  size = 48,
}) => {
  return (
    <div className={`search ${className}`} data-size={size}>
      <img className="icon" loading="lazy" alt="" />
    </div>
  );
};

export default Search;
