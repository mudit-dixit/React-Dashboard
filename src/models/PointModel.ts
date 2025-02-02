import { Instance } from "mobx-state-tree"
import { PointModelBase } from "./PointModel.base"

/* The TypeScript type of an instance of PointModel */
export interface PointModelType extends Instance<typeof PointModel.Type> {}

/* A graphql query fragment builders for PointModel */
export { selectFromPoint, pointModelPrimitives, PointModelSelector } from "./PointModel.base"

/**
 * PointModel
 */
export const PointModel = PointModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
