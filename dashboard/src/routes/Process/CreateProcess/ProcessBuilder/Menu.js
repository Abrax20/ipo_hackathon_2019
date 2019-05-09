import React from "react";
import styled from "styled-components";

const MenuItem = styled.div`
  padding: 5px;
  color: #000000;
  cursor: pointer;
  margin: 0px 10px;
  border: solid 1px;
  border-radius: 5px;
  margin-bottom: 2px;
  background-color: #ffffff;
  font-family: Helvetica, Arial;
`;
const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 200px;
  background-color: #79e880;
`;

export const Menu = ({ actions }) => (
  <Container>
    {actions &&
      actions.map(action => (
        <MenuItem
          draggable
          key={action.title}
          onDragStart={event => {
            event.dataTransfer.setData(
              "storm-diagram-node",
              JSON.stringify(action)
            );
          }}
        >
          {action.title}
        </MenuItem>
      ))}
  </Container>
);
export default Menu;
