import styled from "styled-components"

// export const Container = styled.div``;
export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 300px 1fr 100px;
  grid-template-columns: 40% 30% 20% 10%;
`
