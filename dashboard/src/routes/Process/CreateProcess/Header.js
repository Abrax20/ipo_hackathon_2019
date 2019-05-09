import React from "react";
import styled from "styled-components";

import { Button } from "grommet";
import { padding } from "../../../styles";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${padding.medium};
`;

export const Header = ({ startProcess = () => {}}) => (
  <Container>
    <Button onClick={startProcess}>Start</Button>
  </Container>
);
export default Header;
