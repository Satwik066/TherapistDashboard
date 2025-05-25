import { FunctionComponent } from "react";
import "./ChildrenTable.css";

export type ChildrenTableType = {
  className?: string;
};

const ChildrenTable: FunctionComponent<ChildrenTableType> = ({
  className = "",
}) => {
  return (
    <section className={`childrentable ${className}`}>
      <div className="tableheader">
        <div className="sno">S.no</div>
        <div className="actions">Name</div>
        <div className="actions">Username</div>
        <div className="actions">Actions</div>
      </div>
      <div className="rowcontainer">
        <div className="row">
          <div className="sno">{`{sno}`}</div>
          <div className="actions">{`{name}`}</div>
          <div className="actions">{`{username}`}</div>
          <div className="viewdetailsbutton">
            <div className="view-details">View Details</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenTable;
