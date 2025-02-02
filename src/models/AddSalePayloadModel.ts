import { Instance } from "mobx-state-tree"
import { AddSalePayloadModelBase } from "./AddSalePayloadModel.base"

/* The TypeScript type of an instance of AddSalePayloadModel */
export interface AddSalePayloadModelType extends Instance<typeof AddSalePayloadModel.Type> {}

/* A graphql query fragment builders for AddSalePayloadModel */
export { selectFromAddSalePayload, addSalePayloadModelPrimitives, AddSalePayloadModelSelector } from "./AddSalePayloadModel.base"

/**
 * AddSalePayloadModel
 */
export const AddSalePayloadModel = AddSalePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
