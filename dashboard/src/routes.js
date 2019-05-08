// @flow
import React from "react";
import { Route } from "react-router";

import Wrapper from "./components/Wrapper";
import Company from "./routes/Company/Company";
import Process from "./routes/Process/Process";

export const Routes = () => (
  <Wrapper>
    <Route path="/process/" component={Process} />
    <Route exact path="/" component={Company} />
  </Wrapper>
);
export default Routes;
