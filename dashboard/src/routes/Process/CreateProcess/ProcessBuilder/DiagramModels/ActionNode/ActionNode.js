import ActionPortModel from "./ActionPortModel";
import { SimplePortFactory } from "../SimplePortFactory";
import ActionModelFactory, { ACTION_MODEL_TYPE } from "./ActionModelFactory";

export const setupActionNode = diagramEngine => {
  diagramEngine.registerPortFactory(
    new SimplePortFactory(ACTION_MODEL_TYPE, () => new ActionPortModel())
  );
  diagramEngine.registerNodeFactory(new ActionModelFactory());
};
