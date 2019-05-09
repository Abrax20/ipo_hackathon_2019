import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { dashboard, signal } from "react-icons-kit/iconic";

import { Container, Item } from "./styled";

export const Sidebar = ({
  index,
  openHome = () => {},
  openProcesses = () => {}
}) => (
  <Container>
    <Item onClick={openHome} active={index === 0}>
      <Icon className="icon" size={25} icon={home} />
    </Item>
    <Item active={index === 1}>
      <Icon className="icon" size={25} icon={dashboard} />
    </Item>
    <Item active={index === 2}>
      <Icon onClick={openProcesses} className="icon" size={25} icon={signal} />
    </Item>
  </Container>
);
export default connect(
  null,
  dispatch => ({
    openHome: () => dispatch(push("/")),
    openProcesses: () => dispatch(push("/process/"))
  })
)(Sidebar);
