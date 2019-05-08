// @flow
import React from "react";
import { Route } from "react-router";

import ProcessesList from "./ProcessesList/ProcessesList";
import ProcessOverview from "./ProcessOverview/ProcessOverview";

export const Routes = () => (
  <React.Fragment>
    <Route path="/process/:id" component={ProcessOverview} />
    <Route exact path="/process/" component={ProcessesList} />
  </React.Fragment>
);
export default Routes;
