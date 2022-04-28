import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./ManagePlayer.css";

const ManagePlayer = () => {
  const navigate = useNavigate();

  const onItemClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="main-coutniner-ManagePlayer">
      <ul className="list-item-parent">
        <li
          onClick={() => onItemClick("manageplayer/ListPlayer")}
          className="list-item-child"
        >
          List
        </li>
        <div className="divider" />
        <li
          onClick={() => onItemClick("manageplayer/AddPlayer")}
          className="list-item-child"
        >
          Add Player
        </li>
      </ul>

      <div className="child-warpper">
        <Outlet />
      </div>
    </div>
  );
};

export default ManagePlayer;
