import { Instance } from "mobx-state-tree"
import { MultiPolygonModelBase } from "./MultiPolygonModel.base"

/* The TypeScript type of an instance of MultiPolygonModel */
export interface MultiPolygonModelType extends Instance<typeof MultiPolygonModel.Type> {}

/* A graphql query fragment builders for MultiPolygonModel */
export { selectFromMultiPolygon, multiPolygonModelPrimitives, MultiPolygonModelSelector } from "./MultiPolygonModel.base"

/**
 * MultiPolygonModel
 */
export const MultiPolygonModel = MultiPolygonModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
