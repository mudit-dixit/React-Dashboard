import { Instance } from "mobx-state-tree"
import { UpdateProductPayloadModelBase } from "./UpdateProductPayloadModel.base"

/* The TypeScript type of an instance of UpdateProductPayloadModel */
export interface UpdateProductPayloadModelType extends Instance<typeof UpdateProductPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateProductPayloadModel */
export { selectFromUpdateProductPayload, updateProductPayloadModelPrimitives, UpdateProductPayloadModelSelector } from "./UpdateProductPayloadModel.base"

/**
 * UpdateProductPayloadModel
 */
export const UpdateProductPayloadModel = UpdateProductPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
