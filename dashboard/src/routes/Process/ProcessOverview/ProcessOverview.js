import React, { Component } from "react";

import { connect } from "react-redux";

import { Button } from "grommet";

import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";

import { Header, Content, Footer } from "./styled";
import { getProcessById } from "../../../actions/api/process";

export class ProcessOverview extends Component {
  componentDidMount() {
    const { params } = (this.props && this.props.match) || {};
    const { id } = params || {};
    this.props.getProcess(id);
  }

  render() {
    const { title, progress } = this.props.process || {};
    return (
      <PageWrapper>
        <Header>{title || "None"}</Header>
        <Content>
          <ProgressBar value={progress} />
        </Content>
        <Footer>
          <Button label="Stop" />
          <Button label="Reset" />
        </Footer>
      </PageWrapper>
    );
  }
}
export default connect(
  (state, props) => ({
    process: state.processes[props.match.params.id]
  }),
  dispatch => ({ getProcess: id => dispatch(getProcessById(id)) })
)(ProcessOverview);
