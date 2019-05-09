import * as React from "react";
import styled from "styled-components";
import { PortWidget as SRDPortWidget } from "storm-react-diagrams";
import {padding} from "../../../../../../styles";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: #000 solid 1px;
  justify-content: center;
  background-color: #79e880;
  padding: 0 ${padding.medium};
`;
const PortWidget = styled(SRDPortWidget)`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 20px;
  background-color: #ffffff;
  top: ${({ top }) => `${top}px`};
  ${({ position }) => (position === "left" ? "left: -10px" : "right: -10px")}
`;
const Title = styled.div`
  color: #ffffff;
  text-align: center;
`;

export default class ActionNodeWidget extends React.Component {
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
        <Title>
          {this.props.node &&
            this.props.node.action &&
            this.props.node.action.title}
        </Title>
        <PortWidget
          position="left"
          name="INPUT_ACTION"
          node={this.props.node}
          top={this.props.height / 2 - 10}
        />
        <PortWidget
          position="right"
          name="OUTPUT_ACTION"
          node={this.props.node}
          top={this.props.height / 2 - 10}
        />
      </Container>
    );
  }
}
