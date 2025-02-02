import { Instance } from "mobx-state-tree"
import { SaleAggregateResultModelBase } from "./SaleAggregateResultModel.base"

/* The TypeScript type of an instance of SaleAggregateResultModel */
export interface SaleAggregateResultModelType extends Instance<typeof SaleAggregateResultModel.Type> {}

/* A graphql query fragment builders for SaleAggregateResultModel */
export { selectFromSaleAggregateResult, saleAggregateResultModelPrimitives, SaleAggregateResultModelSelector } from "./SaleAggregateResultModel.base"

/**
 * SaleAggregateResultModel
 */
export const SaleAggregateResultModel = SaleAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
