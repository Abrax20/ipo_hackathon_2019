import React, { Component } from "react";
import { Grid } from "./styled";

import PageWrapper from "./../../components/PageWrapper/PageWrapper";
import { Box, WorldMap } from "grommet";
import { connect } from "react-redux";
import { getAllProcesses } from "../../actions/api/process";
import { ProcessOverview } from "../Process/ProcessOverview/ProcessOverview";

export class Company extends Component {
  async componentDidMount() {
    this.props.test();
    const res = await fetch("http://192.168.178.25:8080/get/all", {
      method: "GET"
    });
  }

  render() {
    return (
      <PageWrapper index={0}>
        <Grid>
          <WorldMap
            color="neutral-1"
            continents={[
              {
                name: "Africa",
                color: "light-5",
                onClick: name => {}
              }
            ]}
            onSelectPlace={(lat, lon) => {}}
            places={[
              {
                name: "Sydney",
                location: [-33.8830555556, 151.216666667],
                color: "accent-2",
                onClick: name => {}
              }
            ]}
            selectColor="accent-2"
          />
        </Grid>
      </PageWrapper>
    );
  }
}
export default connect(
  null,
  dispatch => ({ test: () => dispatch(getAllProcesses()) })
)(Company);
