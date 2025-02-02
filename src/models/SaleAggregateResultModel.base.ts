/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * SaleAggregateResultBase
 * auto generated base class for the model SaleAggregateResultModel.
 */
export const SaleAggregateResultModelBase = ModelBase
  .named('SaleAggregateResult')
  .props({
    __typename: types.optional(types.literal("SaleAggregateResult"), "SaleAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    quantityMin: types.union(types.undefined, types.null, types.integer),
    quantityMax: types.union(types.undefined, types.null, types.integer),
    quantitySum: types.union(types.undefined, types.null, types.integer),
    quantityAvg: types.union(types.undefined, types.null, types.number),
    revenueMin: types.union(types.undefined, types.null, types.number),
    revenueMax: types.union(types.undefined, types.null, types.number),
    revenueSum: types.union(types.undefined, types.null, types.number),
    revenueAvg: types.union(types.undefined, types.null, types.number),
    dateMin: types.union(types.undefined, types.null, types.frozen()),
    dateMax: types.union(types.undefined, types.null, types.frozen()),
    regionMin: types.union(types.undefined, types.null, types.string),
    regionMax: types.union(types.undefined, types.null, types.string),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SaleAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get quantityMin() { return this.__attr(`quantityMin`) }
  get quantityMax() { return this.__attr(`quantityMax`) }
  get quantitySum() { return this.__attr(`quantitySum`) }
  get quantityAvg() { return this.__attr(`quantityAvg`) }
  get revenueMin() { return this.__attr(`revenueMin`) }
  get revenueMax() { return this.__attr(`revenueMax`) }
  get revenueSum() { return this.__attr(`revenueSum`) }
  get revenueAvg() { return this.__attr(`revenueAvg`) }
  get dateMin() { return this.__attr(`dateMin`) }
  get dateMax() { return this.__attr(`dateMax`) }
  get regionMin() { return this.__attr(`regionMin`) }
  get regionMax() { return this.__attr(`regionMax`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
}
export function selectFromSaleAggregateResult() {
  return new SaleAggregateResultModelSelector()
}

export const saleAggregateResultModelPrimitives = selectFromSaleAggregateResult().count.quantityMin.quantityMax.quantitySum.quantityAvg.revenueMin.revenueMax.revenueSum.revenueAvg.dateMin.dateMax.regionMin.regionMax.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax
