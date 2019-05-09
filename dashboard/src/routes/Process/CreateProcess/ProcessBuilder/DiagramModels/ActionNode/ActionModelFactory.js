import * as SRD from "storm-react-diagrams";
import ActionNodeModel from "./ActionNodeModel";
import ActionNodeWidget from "./ActionNodeWidget";
import * as React from "react";

export const ACTION_MODEL_TYPE = "ACTION_MODEL_TYPE";

export default class ActionModelFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super(ACTION_MODEL_TYPE);
  }

  generateReactWidget(diagramEngine, node) {
    return <ActionNodeWidget node={node} />;
  }

  getNewInstance() {
    return new ActionNodeModel();
  }
}
