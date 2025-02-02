/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { ProductFilter, ProductOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  product: IObservableArray<ProductModelType>;
}

/**
 * AddProductPayloadBase
 * auto generated base class for the model AddProductPayloadModel.
 */
export const AddProductPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddProductPayload')
  .props({
    __typename: types.optional(types.literal("AddProductPayload"), "AddProductPayload"),
    product: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ProductModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddProductPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  product(builder: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector) | undefined, args?: { filter?: (ProductFilter | null), order?: (ProductOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`product`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ProductModelSelector, builder) }
}
export function selectFromAddProductPayload() {
  return new AddProductPayloadModelSelector()
}

export const addProductPayloadModelPrimitives = selectFromAddProductPayload().numUids
