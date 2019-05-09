import React from "react";
import { Meter } from "grommet";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
`;
const MeterView = styled(Meter)`
  flex: 1;
`;

export const ProgressBar = ({ value = 0 }) => (
  <Container>
    <MeterView
      values={[
        {
          value,
          label: "sixty"
        }
      ]}
      aria-label="meter"
    />
  </Container>
);
export default ProgressBar;
