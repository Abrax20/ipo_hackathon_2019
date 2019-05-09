import React, { Component } from "react";

import Header from "./Header";
import { Content } from "./styled";
import { connect } from "react-redux";
import { getAllActions } from "../../../actions/api";
import ProcessBuilder from "./ProcessBuilder/ProcessBuilder";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import { ApplicationHandler } from "./ProcessBuilder/ApplicationHandler";
import StartPortModel from "./ProcessBuilder/DiagramModels/StartNode/StartPortModel";
import FinishNodeModel from "./ProcessBuilder/DiagramModels/FinishNode/FinishNodeModel";

export class CreateProcess extends Component {
  app = new ApplicationHandler();

  componentDidMount() {
    this.props.getAllActions();
  }

  getPath = link => {
    if (link.targetPort.parent instanceof FinishNodeModel) {
      console.log("End");
      return;
    }
    console.log(link.targetPort.parent.ports.OUTPUT_ACTION);
  };

  startProcess = () => {
    const routes = [];
    const links = this.app.activeModel.links;
    const nodes = this.app.activeModel.nodes;

    const startLinks = Object.values(links).filter(
      link => link.sourcePort instanceof StartPortModel
    );
    if (!startLinks[0]) return;

    startLinks.forEach(link => {
      this.getPath(link);
    });
  };

  render() {
    return (
      <PageWrapper index={2}>
        <Header startProcess={this.startProcess} />
        <Content>
          <ProcessBuilder app={this.app} ref={this.builder} />
        </Content>
      </PageWrapper>
    );
  }
}
export default connect(
  state => ({}),
  dispatch => ({
    getAllActions: () => dispatch(getAllActions())
  })
)(CreateProcess);
