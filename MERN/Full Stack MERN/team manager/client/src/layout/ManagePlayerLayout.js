import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./ManagePlayerLayout.css";

const ManagePlayerLayout = () => {
  const navigate = useNavigate();

  const onItemClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="main-coutniner">
      <ul className="list-item-parent">
        <li
          onClick={() => onItemClick("manageplayer")}
          className="list-item-child"
        >
          Manage Player
        </li>
        <div className="divider" />
        <li
          onClick={() => onItemClick("manageplayerstatus")}
          className="list-item-child"
        >
          Manage Player Status
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default ManagePlayerLayout;
