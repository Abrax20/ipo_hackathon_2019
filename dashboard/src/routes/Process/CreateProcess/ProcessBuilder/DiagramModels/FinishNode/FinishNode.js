import FinishPortModel from "./FinishPortModel";
import { SimplePortFactory } from "../SimplePortFactory";
import FinishModelFactory, { FINISH_MODEL_TYPE } from "./FinishModelFactory";

export const setupFinishNode = diagramEngine => {
  diagramEngine.registerPortFactory(
    new SimplePortFactory(FINISH_MODEL_TYPE, () => new FinishPortModel())
  );
  diagramEngine.registerNodeFactory(new FinishModelFactory());
};
