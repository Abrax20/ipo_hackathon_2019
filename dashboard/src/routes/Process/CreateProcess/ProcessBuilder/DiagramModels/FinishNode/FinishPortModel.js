import * as _ from "lodash";
import {
  LinkModel,
  DiagramEngine,
  PortModel,
  DefaultLinkModel
} from "storm-react-diagrams";
import { FINISH_MODEL_TYPE } from "./FinishModelFactory";

export default class FinishPortModel extends PortModel {
  position;

  constructor() {
    super("FINISH", FINISH_MODEL_TYPE);
    this.position = "FINISH";
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
