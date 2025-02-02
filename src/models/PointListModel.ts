import { Instance } from "mobx-state-tree"
import { PointListModelBase } from "./PointListModel.base"

/* The TypeScript type of an instance of PointListModel */
export interface PointListModelType extends Instance<typeof PointListModel.Type> {}

/* A graphql query fragment builders for PointListModel */
export { selectFromPointList, pointListModelPrimitives, PointListModelSelector } from "./PointListModel.base"

/**
 * PointListModel
 */
export const PointListModel = PointListModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
