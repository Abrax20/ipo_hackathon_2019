import * as _ from "lodash";
import {
  LinkModel,
  DiagramEngine,
  PortModel,
  DefaultLinkModel
} from "storm-react-diagrams";
import { ACTION_MODEL_TYPE } from "./ActionModelFactory";

export default class ActionPortModel extends PortModel {
  position;

  constructor(position = "INPUT_ACTION") {
    super(position, ACTION_MODEL_TYPE);
    this.position = position;
  }

  serialize() {
    return _.merge(super.serialize(), {
      position: this.position
    });
  }

  deSerialize(data: any, engine: DiagramEngine) {
    super.deSerialize(data, engine);
    this.position = data.position;
  }

  createLinkModel(): LinkModel {
    return new DefaultLinkModel();
  }
}
