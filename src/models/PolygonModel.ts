import { Instance } from "mobx-state-tree"
import { PolygonModelBase } from "./PolygonModel.base"

/* The TypeScript type of an instance of PolygonModel */
export interface PolygonModelType extends Instance<typeof PolygonModel.Type> {}

/* A graphql query fragment builders for PolygonModel */
export { selectFromPolygon, polygonModelPrimitives, PolygonModelSelector } from "./PolygonModel.base"

/**
 * PolygonModel
 */
export const PolygonModel = PolygonModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
