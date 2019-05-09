import { NodeModel } from "storm-react-diagrams";

import StartPortModel from "./StartPortModel";
import { START_MODEL_TYPE } from "./StartModelFactory";

export default class StartNodeModel extends NodeModel {
  constructor() {
    super(START_MODEL_TYPE);
    this.addPort(new StartPortModel());
  }
}
