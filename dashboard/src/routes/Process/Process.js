// @flow
import React from "react";
import { Route } from "react-router";

import CreateProcess from "./CreateProcess/CreateProcess";
import ProcessesList from "./ProcessesList/ProcessesList";
import ProcessOverview from "./ProcessOverview/ProcessOverview";

export const Routes = () => (
  <React.Fragment>
    <Route exact path="/process/" component={ProcessesList} />
    <Route path="/process/view/:id" component={ProcessOverview} />
    <Route exact path="/process/create" component={CreateProcess} />
  </React.Fragment>
);
export default Routes;
