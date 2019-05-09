import { NodeModel } from "storm-react-diagrams";

import FinishPortModel from "./FinishPortModel";
import { FINISH_MODEL_TYPE } from "./FinishModelFactory";

export default class FinishNodeModel extends NodeModel {
  constructor() {
    super(FINISH_MODEL_TYPE);
    this.addPort(new FinishPortModel());
  }
}
