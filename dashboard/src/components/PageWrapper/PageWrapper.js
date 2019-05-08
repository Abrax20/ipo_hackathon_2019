import React from "react"
import styled from "styled-components"
import Sidebar from "../Sidebar/SideBar"

import { padding } from "../../styles"

const Container = styled.div`
  height: 100%;
  display: flex;
  overflow: hidden;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  padding: ${padding.large} ${padding.medium};
`

export const PageWrapper = ({ index, children }) => (
  <Container>
    <Sidebar index={index} />
    <Content>{children}</Content>
  </Container>
)
export default PageWrapper
