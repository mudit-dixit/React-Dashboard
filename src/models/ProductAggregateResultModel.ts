import { Instance } from "mobx-state-tree"
import { ProductAggregateResultModelBase } from "./ProductAggregateResultModel.base"

/* The TypeScript type of an instance of ProductAggregateResultModel */
export interface ProductAggregateResultModelType extends Instance<typeof ProductAggregateResultModel.Type> {}

/* A graphql query fragment builders for ProductAggregateResultModel */
export { selectFromProductAggregateResult, productAggregateResultModelPrimitives, ProductAggregateResultModelSelector } from "./ProductAggregateResultModel.base"

/**
 * ProductAggregateResultModel
 */
export const ProductAggregateResultModel = ProductAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
