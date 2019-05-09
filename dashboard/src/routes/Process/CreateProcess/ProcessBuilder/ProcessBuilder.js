import * as React from "react";
import * as _ from "lodash";

import Menu from "./Menu";
import { connect } from "react-redux";
import { Container, Header, Title, Content, Diagram } from "./styled";
import { DiagramWidget } from "storm-react-diagrams";
import ActionNodeModel from "./DiagramModels/ActionNode/ActionNodeModel";

export class ProcessBuilder extends React.Component {
  state = {};
  onDrop = event => {
    const action = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));

    let node = null;
    node = new ActionNodeModel(action);
    const points = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
    node.x = points.x;
    node.y = points.y;
    this.props.app
      .getDiagramEngine()
      .getDiagramModel()
      .addNode(node);
    this.forceUpdate();
  };

  onDragOver = event => event.preventDefault();

  render() {
    return (
      <Container>
        <Header>
          <Title>My Awsome Process</Title>
        </Header>
        <Content>
          <Menu actions={this.props.actions} />
          <Diagram onDrop={this.onDrop} onDragOver={this.onDragOver}>
            <DiagramWidget diagramEngine={this.props.app.getDiagramEngine()} />
          </Diagram>
        </Content>
      </Container>
    );
  }
}
export default connect(state => ({
  actions: Object.values(state.actions).map(action => ({
    ...action,
    model: { type: "out" }
  }))
}))(ProcessBuilder);
