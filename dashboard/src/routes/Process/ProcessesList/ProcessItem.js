import React from "react";
import styled from "styled-components";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

const Title = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 90px;
`;

export const ProcessItem = ({ proccess }) => (
  <Container>
    <Title>{proccess.title}</Title>
    <ProgressBar value={proccess.progress} />
  </Container>
);
export default ProcessItem;
