// @flow
import React, { Component } from "react"
import { Route } from "react-router"

import Wrapper from "./components/Wrapper"
import Company from "./routes/Company/Company"

export const Routes = () => (
  <Wrapper>
    <Route path="/" component={Company} />
  </Wrapper>
)
export default Routes
