import styled from "styled-components";

export const Title = styled.div``;
export const Header = styled.div`
  display: flex;
  background: #79e880;
  flex-grow: 0;
  flex-shrink: 0;
  color: white;
  font-family: Helvetica, Arial;
  padding: 10px;
  > * {
    align-self: center;
  }
`;
export const Content = styled.div`
  flex: 1;
  display: flex;
  background-color: #dfdfdf;
`;
export const Diagram = styled.div`
  flex: 1;
  display: flex;
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(0, 0, 0, 0.5) 25%,
      rgba(0, 0, 0, 0.5) 26%,
      transparent 27%,
      transparent 74%,
      rgba(0, 0, 0, 0.5) 75%,
      rgba(0, 0, 0, 0.5) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(0, 0, 0, 0.5) 25%,
      rgba(0, 0, 0, 0.5) 26%,
      transparent 27%,
      transparent 74%,
      rgba(0, 0, 0, 0.5) 75%,
      rgba(0, 0, 0, 0.5) 76%,
      transparent 77%,
      transparent
    );
  height: 100%;
  background-size: 50px 50px;
`;
export const Container = styled.div`
  flex: 1;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
