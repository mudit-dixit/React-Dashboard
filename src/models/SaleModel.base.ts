/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { ProductFilter } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  product: ProductModelType;
}

/**
 * SaleBase
 * auto generated base class for the model SaleModel.
 */
export const SaleModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Sale')
  .props({
    __typename: types.optional(types.literal("Sale"), "Sale"),
    id: types.identifier,
    product: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => ProductModel))),
    quantity: types.union(types.undefined, types.integer),
    revenue: types.union(types.undefined, types.number),
    date: types.union(types.undefined, types.null, types.frozen()),
    region: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SaleModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get quantity() { return this.__attr(`quantity`) }
  get revenue() { return this.__attr(`revenue`) }
  get date() { return this.__attr(`date`) }
  get region() { return this.__attr(`region`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined, args?: { filter?: (ProductFilter | null) }) { return this.__child(`product`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductModelSelector, builder) }
}
export function selectFromSale() {
  return new SaleModelSelector()
}

export const saleModelPrimitives = selectFromSale().quantity.revenue.date.region.createdOn.updatedOn
