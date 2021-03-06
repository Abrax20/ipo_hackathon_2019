import styled from "styled-components";
import { colors, padding } from "../../styles";

export const Container = styled.div`
  width: 75px;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  padding: ${padding.medium} 0;
  background-color: ${colors.green};
`;
export const Item = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  cursor: pointer;
  overflow: scroll;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin: ${padding.medium} 0;
  background-color: ${({ active }) => (active ? "rgba(0,0,0,0.3)" : "none")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .icon {
    margin-top: -2.5px;
    color: ${colors.white};
  }
`;
