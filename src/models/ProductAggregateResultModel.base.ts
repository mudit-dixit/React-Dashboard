/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ProductAggregateResultBase
 * auto generated base class for the model ProductAggregateResultModel.
 */
export const ProductAggregateResultModelBase = ModelBase
  .named('ProductAggregateResult')
  .props({
    __typename: types.optional(types.literal("ProductAggregateResult"), "ProductAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    nameMin: types.union(types.undefined, types.null, types.string),
    nameMax: types.union(types.undefined, types.null, types.string),
    categoryMin: types.union(types.undefined, types.null, types.string),
    categoryMax: types.union(types.undefined, types.null, types.string),
    priceMin: types.union(types.undefined, types.null, types.number),
    priceMax: types.union(types.undefined, types.null, types.number),
    priceSum: types.union(types.undefined, types.null, types.number),
    priceAvg: types.union(types.undefined, types.null, types.number),
    totalRevenueMin: types.union(types.undefined, types.null, types.number),
    totalRevenueMax: types.union(types.undefined, types.null, types.number),
    totalRevenueSum: types.union(types.undefined, types.null, types.number),
    totalRevenueAvg: types.union(types.undefined, types.null, types.number),
    totalQuantityMin: types.union(types.undefined, types.null, types.integer),
    totalQuantityMax: types.union(types.undefined, types.null, types.integer),
    totalQuantitySum: types.union(types.undefined, types.null, types.integer),
    totalQuantityAvg: types.union(types.undefined, types.null, types.number),
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

export class ProductAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get nameMin() { return this.__attr(`nameMin`) }
  get nameMax() { return this.__attr(`nameMax`) }
  get categoryMin() { return this.__attr(`categoryMin`) }
  get categoryMax() { return this.__attr(`categoryMax`) }
  get priceMin() { return this.__attr(`priceMin`) }
  get priceMax() { return this.__attr(`priceMax`) }
  get priceSum() { return this.__attr(`priceSum`) }
  get priceAvg() { return this.__attr(`priceAvg`) }
  get totalRevenueMin() { return this.__attr(`totalRevenueMin`) }
  get totalRevenueMax() { return this.__attr(`totalRevenueMax`) }
  get totalRevenueSum() { return this.__attr(`totalRevenueSum`) }
  get totalRevenueAvg() { return this.__attr(`totalRevenueAvg`) }
  get totalQuantityMin() { return this.__attr(`totalQuantityMin`) }
  get totalQuantityMax() { return this.__attr(`totalQuantityMax`) }
  get totalQuantitySum() { return this.__attr(`totalQuantitySum`) }
  get totalQuantityAvg() { return this.__attr(`totalQuantityAvg`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
}
export function selectFromProductAggregateResult() {
  return new ProductAggregateResultModelSelector()
}

export const productAggregateResultModelPrimitives = selectFromProductAggregateResult().count.nameMin.nameMax.categoryMin.categoryMax.priceMin.priceMax.priceSum.priceAvg.totalRevenueMin.totalRevenueMax.totalRevenueSum.totalRevenueAvg.totalQuantityMin.totalQuantityMax.totalQuantitySum.totalQuantityAvg.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax
