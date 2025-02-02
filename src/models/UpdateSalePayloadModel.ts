import { Instance } from "mobx-state-tree"
import { UpdateSalePayloadModelBase } from "./UpdateSalePayloadModel.base"

/* The TypeScript type of an instance of UpdateSalePayloadModel */
export interface UpdateSalePayloadModelType extends Instance<typeof UpdateSalePayloadModel.Type> {}

/* A graphql query fragment builders for UpdateSalePayloadModel */
export { selectFromUpdateSalePayload, updateSalePayloadModelPrimitives, UpdateSalePayloadModelSelector } from "./UpdateSalePayloadModel.base"

/**
 * UpdateSalePayloadModel
 */
export const UpdateSalePayloadModel = UpdateSalePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
