import * as SRD from "storm-react-diagrams";

import { setupStartNode } from "./DiagramModels/StartNode/StartNode";
import StartNodeModel from "./DiagramModels/StartNode/StartNodeModel";
import { setupActionNode } from "./DiagramModels/ActionNode/ActionNode";
import { setupFinishNode } from "./DiagramModels/FinishNode/FinishNode";
import FinishNodeModel from "./DiagramModels/FinishNode/FinishNodeModel";

/**
 * @author Dylan Vorster
 */
export class ApplicationHandler {
  activeModel;
  diagramEngine;

  constructor() {
    this.diagramEngine = new SRD.DiagramEngine();
    this.diagramEngine.installDefaultFactories();
    setupStartNode(this.diagramEngine);
    setupFinishNode(this.diagramEngine);
    setupActionNode(this.diagramEngine);

    this.setupNewProcess();
  }

  entityRemoved = event => event.stopPropagation();

  setupNewProcess = () => {
    this.activeModel = new SRD.DiagramModel();
    this.diagramEngine.setDiagramModel(this.activeModel);

    const node1 = new StartNodeModel();
    node1.setPosition(250, 108);
    node1.addListener({
      entityRemoved: this.entityRemoved
    });

    const node2 = new FinishNodeModel();
    node2.setPosition(700, 100);
    node2.addListener({
      entityRemoved: this.entityRemoved
    });

    this.activeModel.addAll(node1, node2);
  };

  getActiveDiagram = () => {
    return this.activeModel;
  };

  getDiagramEngine = () => {
    return this.diagramEngine;
  };
}
