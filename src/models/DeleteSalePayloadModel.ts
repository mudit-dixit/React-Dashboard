import { Instance } from "mobx-state-tree"
import { DeleteSalePayloadModelBase } from "./DeleteSalePayloadModel.base"

/* The TypeScript type of an instance of DeleteSalePayloadModel */
export interface DeleteSalePayloadModelType extends Instance<typeof DeleteSalePayloadModel.Type> {}

/* A graphql query fragment builders for DeleteSalePayloadModel */
export { selectFromDeleteSalePayload, deleteSalePayloadModelPrimitives, DeleteSalePayloadModelSelector } from "./DeleteSalePayloadModel.base"

/**
 * DeleteSalePayloadModel
 */
export const DeleteSalePayloadModel = DeleteSalePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
