import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import "./AddPlayer.css";
import axios from "axios";

const AddPlayer = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerPostion, setPlayerPostion] = useState("");
  const [loading, setLoading] = useState(false);
  const [onError, setOnError] = useState(false);

  const valdtions = () => {
    if (playerName.length < 2) {
      setOnError(true);
      return false;
    }

    return true;
  };

  const onAddClick = () => {
    if (valdtions()) {
      setLoading(true);
      axios
        .post("http://localhost:8080/api/manager/add", {
          playerName: playerName,
          playerPostions: playerPostion,
          status: 0,
        })
        .then((Res) => {
          setPlayerName("");
          setPlayerPostion("");
          setLoading(false);
        })
        .catch((err) => setLoading(false));
    }
  };

  return (
    <div className="AddPlayer-main">
      <h3 className="AddPlayer-title">AddPlayer:</h3>

      <div className="AddPlayer-row">
        <label>player Name:</label>
        <Input
          onFocus={() => setOnError(false)}
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="input-style"
          placeholder="Enter player Name..."
        />
      </div>
      {onError && (
        <h3 style={{ color: "red" }}>* name be must at least 2 char </h3>
      )}

      <div className="AddPlayer-row">
        <label>player Postions:</label>
        <Input
          value={playerPostion}
          onChange={(e) => setPlayerPostion(e.target.value)}
          className="input-style"
          placeholder="Enter player Postions..."
        />
      </div>

      <div className="flex-end-actions">
        <Button
          loading={loading}
          disabled={loading || onError}
          onClick={onAddClick}
          color="red"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddPlayer;
