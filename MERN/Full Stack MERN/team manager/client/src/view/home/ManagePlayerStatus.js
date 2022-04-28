import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./ManagePlayer.css";

const ManagePlayerStatus = () => {
  const navigate = useNavigate();

  const onItemClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="main-coutniner-ManagePlayer">
      <ul className="list-item-parent">
        <li
          onClick={() => onItemClick("manageplayerstatus/GameList")}
          className="list-item-child"
        >
          Game
        </li>
      </ul>

      <div className="child-warpper">
        <Outlet />
      </div>
    </div>
  );
};

export default ManagePlayerStatus;
