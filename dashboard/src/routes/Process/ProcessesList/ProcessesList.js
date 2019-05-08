import { connect } from "react-redux";
import styled from "styled-components";

import React, { Component } from "react";

import { getAllProcesses } from "../../../actions/api/process";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import ProcessItem from "./ProcessItem";

const List = styled.div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export class ProcessesList extends Component {
  componentDidMount() {
    this.props.getAllProcess();
  }

  render() {
    return (
      <PageWrapper index={2}>
        <List>
          {this.props.processes &&
            Object.values(this.props.processes).map(process => (
              <ProcessItem key={process.id} proccess={process} />
            ))}
        </List>
      </PageWrapper>
    );
  }
}
export default connect(
  state => ({
    processes: state.processes
  }),
  dispatch => ({ getAllProcess: () => dispatch(getAllProcesses()) })
)(ProcessesList);
