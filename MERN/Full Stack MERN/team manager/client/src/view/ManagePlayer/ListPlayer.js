import React, { useState, useEffect, Fragment } from "react";
import PlayerListTable from "../../components/PlayerListTable";
import axios from "axios";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const ListPlayer = () => {
  const [bodyList, setBodyList] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [open, setOpen] = useState(false);
  const [playerID, setPlayerID] = useState(0);
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/manager/listPlayer")
      .then((res) => {
        setBodyList(res.data);
      })
      .catch((err) => console.log(err));
  }, [refetch]);

  const onDeleteClick = (id, name) => {
    setPlayerID(id);
    setPlayerName(name);
    setOpen(true);
  };

  const onConfirm = () => {
    axios
      .delete("http://localhost:8080/api/manager/deletePlayer/" + playerID)
      .then((res) => {
        setOpen(false);
        setRefetch((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const headerList = ["Team Name", "PrefferdPostions", "Actions"];

  return (
    <Fragment>
      <PlayerListTable
        onActionsClick={onDeleteClick}
        BodyList={bodyList}
        headerList={headerList}
      />

      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Header icon>
          <Icon name="trash" color="red" />
          Delete Confirm
        </Header>
        <Modal.Content>
          <p
            style={{ textAlign: "center" }}
          >{`are you sure you want to remove ${playerName} ?`}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted onClick={onConfirm}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Fragment>
  );
};

export default ListPlayer;
