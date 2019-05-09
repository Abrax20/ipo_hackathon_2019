import * as React from "react";
import styled from "styled-components";
import { PortWidget as SRDPortWidget } from "storm-react-diagrams";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: #000 solid 1px;
  justify-content: center;
  background-color: #79e880;
`;
const PortWidget = styled(SRDPortWidget)`
  width: 20px;
  right: -10px;
  height: 20px;
  position: absolute;
  border-radius: 20px;
  background-color: #ffffff;
  top: ${({ top }) => `${top}px`};
`;
const Title = styled.div`
  color: #ffffff;
  text-align: center;
`;

export default class StartNodeWidget extends React.Component {
  static defaultProps = {
    height: 50,
    width: 150,
    node: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container
        style={{
          position: "relative",
          width: this.props.width,
          height: this.props.height
        }}
      >
        <Title>Start</Title>
        <PortWidget
          name="START"
          node={this.props.node}
          top={this.props.height / 2 - 10}
        />
      </Container>
    );
  }
}
