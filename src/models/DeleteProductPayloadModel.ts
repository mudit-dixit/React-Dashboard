import { Instance } from "mobx-state-tree"
import { DeleteProductPayloadModelBase } from "./DeleteProductPayloadModel.base"

/* The TypeScript type of an instance of DeleteProductPayloadModel */
export interface DeleteProductPayloadModelType extends Instance<typeof DeleteProductPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteProductPayloadModel */
export { selectFromDeleteProductPayload, deleteProductPayloadModelPrimitives, DeleteProductPayloadModelSelector } from "./DeleteProductPayloadModel.base"

/**
 * DeleteProductPayloadModel
 */
export const DeleteProductPayloadModel = DeleteProductPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
