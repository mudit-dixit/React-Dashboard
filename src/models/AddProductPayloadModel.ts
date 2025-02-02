import { Instance } from "mobx-state-tree"
import { AddProductPayloadModelBase } from "./AddProductPayloadModel.base"

/* The TypeScript type of an instance of AddProductPayloadModel */
export interface AddProductPayloadModelType extends Instance<typeof AddProductPayloadModel.Type> {}

/* A graphql query fragment builders for AddProductPayloadModel */
export { selectFromAddProductPayload, addProductPayloadModelPrimitives, AddProductPayloadModelSelector } from "./AddProductPayloadModel.base"

/**
 * AddProductPayloadModel
 */
export const AddProductPayloadModel = AddProductPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
