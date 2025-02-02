import { Instance } from "mobx-state-tree"
import { SaleModelBase, selectFromSale } from "./SaleModel.base"
import { productModelPrimitives } from "./ProductModel.base"

/* The TypeScript type of an instance of SaleModel */
export interface SaleModelType extends Instance<typeof SaleModel.Type> {}

/* A graphql query fragment builders for SaleModel */
export { selectFromSale, saleModelPrimitives, SaleModelSelector } from "./SaleModel.base"

/**
 * SaleModel
 */
export const SaleModel = SaleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

  export const saleModelSelector = selectFromSale().quantity.revenue.date.region.createdOn.updatedOn.product(productModelPrimitives);