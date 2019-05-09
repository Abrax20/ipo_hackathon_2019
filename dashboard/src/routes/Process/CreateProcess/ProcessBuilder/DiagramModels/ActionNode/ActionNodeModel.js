import { NodeModel } from "storm-react-diagrams";

import ActionPortModel from "./ActionPortModel";
import { ACTION_MODEL_TYPE } from "./ActionModelFactory";

export default class ActionNodeModel extends NodeModel {
  action;
  constructor(action = {}) {
    super(ACTION_MODEL_TYPE);
    this.action = action;
    this.addPort(new ActionPortModel("INPUT_ACTION"));
    this.addPort(new ActionPortModel("OUTPUT_ACTION"));
  }
}
