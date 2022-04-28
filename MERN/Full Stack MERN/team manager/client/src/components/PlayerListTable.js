import React from "react";
import { Button, Table } from "semantic-ui-react";

const PlayerListTable = ({
  headerList = [],
  BodyList = [],
  onActionsClick,
}) => {
  return (
    <Table celled>
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
            <Table.Cell>{item.playerPostions}</Table.Cell>
            <Table.Cell>
              <Button
                onClick={() => onActionsClick(item["_id"], item.playerName)}
                color="red"
                fluid
              >
                DELETE
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default PlayerListTable;
