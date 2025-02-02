/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ProductBase
 * auto generated base class for the model ProductModel.
 */
export const ProductModelBase = ModelBase
  .named('Product')
  .props({
    __typename: types.optional(types.literal("Product"), "Product"),
    id: types.identifier,
    name: types.union(types.undefined, types.null, types.string),
    category: types.union(types.undefined, types.null, types.string),
    price: types.union(types.undefined, types.number),
    totalRevenue: types.union(types.undefined, types.number),
    totalQuantity: types.union(types.undefined, types.integer),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get category() { return this.__attr(`category`) }
  get price() { return this.__attr(`price`) }
  get totalRevenue() { return this.__attr(`totalRevenue`) }
  get totalQuantity() { return this.__attr(`totalQuantity`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
}
export function selectFromProduct() {
  return new ProductModelSelector()
}

export const productModelPrimitives = selectFromProduct().name.category.price.totalRevenue.totalQuantity.createdOn.updatedOn
