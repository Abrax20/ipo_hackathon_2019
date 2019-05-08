import React, { Component } from "react"
import { Grid } from "./styled"

import PageWrapper from "./../../components/PageWrapper/PageWrapper"
import { Box, WorldMap } from "grommet"

export default class Company extends Component {
  async componentDidMount() {
    // const res = await fetch('http://192.168.178.25:8080/update/employees', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: 3, name: "Chris" })});
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
    )
  }
}
