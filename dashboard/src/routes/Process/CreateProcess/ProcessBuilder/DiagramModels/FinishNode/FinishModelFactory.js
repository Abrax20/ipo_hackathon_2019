import * as SRD from "storm-react-diagrams";
import FinishNodeModel from "./FinishNodeModel";
import FinishNodeWidget from "./FinishNodeWidget";
import * as React from "react";

export const FINISH_MODEL_TYPE = "FINISH_MODEL_TYPE";

export default class FinishModelFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super(FINISH_MODEL_TYPE);
  }

  generateReactWidget(diagramEngine, node) {
    return <FinishNodeWidget node={node} />;
  }

  getNewInstance() {
    return new FinishNodeModel();
  }
}
