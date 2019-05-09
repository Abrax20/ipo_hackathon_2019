import * as _ from "lodash";
import {
  LinkModel,
  DiagramEngine,
  PortModel,
  DefaultLinkModel
} from "storm-react-diagrams";
import { START_MODEL_TYPE } from "./StartModelFactory";

export default class StartPortModel extends PortModel {
  position;

  constructor() {
    super("START", START_MODEL_TYPE);
    this.position = "START";
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
