import React from "react"

import { Icon } from "react-icons-kit"
import { home } from "react-icons-kit/icomoon/home"
import { dashboard, signal } from "react-icons-kit/iconic"

import { Container, Item } from "./styled"

export const Sidebar = ({ index }) => (
  <Container>
    <Item active={index === 0}>
      <Icon className="icon" size={25} icon={home} />
    </Item>
    <Item active={index === 1}>
      <Icon className="icon" size={25} icon={dashboard} />
    </Item>
    <Item active={index === 2}>
      <Icon className="icon" size={25} icon={signal} />
    </Item>
  </Container>
)
export default Sidebar
