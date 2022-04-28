import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerListStatus from "../components/PlayerListStatus";

const GameList = () => {
  const [statusColor, setStatusColor] = useState("");
  const [bodyList, setBodyList] = useState([]);
  const [refetch, setRefetch] = useState(false);

  const headerList = ["Team Name", "Actions"];

  const onActionsClick = (id, status) => {
    axios
      .put("http://localhost:8080/api/manager/updateStatus/" + id, {
        status: Number(status),
      })
      .then((res) => {
        setRefetch((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/manager/listPlayer")
      .then((res) => {
        setBodyList(res.data);
      })
      .catch((err) => console.log(err));
  }, [refetch]);

  return (
    <div>
      <h3>Player Status</h3>
      <PlayerListStatus
        headerList={headerList}
        BodyList={bodyList}
        onActionsClick={onActionsClick}
      />
    </div>
  );
};

export default GameList;
