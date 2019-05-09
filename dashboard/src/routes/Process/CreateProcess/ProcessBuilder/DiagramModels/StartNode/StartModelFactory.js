import * as SRD from "storm-react-diagrams";
import StartNodeModel from "./StartNodeModel";
import StartNodeWidget from "./StartNodeWidget";
import * as React from "react";

export const START_MODEL_TYPE = "START_MODEL";

export default class StartModelFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super(START_MODEL_TYPE);
  }

  generateReactWidget(diagramEngine, node) {
    return <StartNodeWidget node={node} />;
  }

  getNewInstance() {
    return new StartNodeModel();
  }
}
