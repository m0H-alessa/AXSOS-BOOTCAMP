import React from "react";
import { Button, Table } from "semantic-ui-react";

const PlayerListStatus = ({ headerList = [], BodyList, onActionsClick }) => {
  return (
    <Table basic color={"red"}>
      <Table.Header>
        <Table.Row>
          {headerList.map((item, index) => (
            <Table.HeaderCell key={index}>{item}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {BodyList.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>{item.playerName}</Table.Cell>

            <Table.Cell>
              <Button
                onClick={() => onActionsClick(item["_id"], 1)}
                color={item.status === 1 && "green"}
                fluid
              >
                {"playing"}
              </Button>
            </Table.Cell>

            <Table.Cell>
              <Button
                onClick={() => onActionsClick(item["_id"], 2)}
                color={item.status === 2 && "red"}
                fluid
              >
                {"not playing"}
              </Button>
            </Table.Cell>

            <Table.Cell>
              <Button
                onClick={() => onActionsClick(item["_id"], 0)}
                color={item.status === 0 && "yellow"}
                fluid
              >
                {"undisided"}
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default PlayerListStatus;
