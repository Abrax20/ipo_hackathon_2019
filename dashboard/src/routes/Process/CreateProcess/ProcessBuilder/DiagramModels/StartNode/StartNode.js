import StartPortModel from "./StartPortModel";
import { SimplePortFactory } from "../SimplePortFactory";
import StartModelFactory, { START_MODEL_TYPE } from "./StartModelFactory";

export const setupStartNode = diagramEngine => {
  diagramEngine.registerPortFactory(
    new SimplePortFactory(START_MODEL_TYPE, () => new StartPortModel())
  );
  diagramEngine.registerNodeFactory(new StartModelFactory());
};
