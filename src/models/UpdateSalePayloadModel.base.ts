/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { SaleFilter, SaleOrder } from "./RootStore.base"
import { SaleModel, SaleModelType } from "./SaleModel"
import { SaleModelSelector } from "./SaleModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  sale: IObservableArray<SaleModelType>;
}

/**
 * UpdateSalePayloadBase
 * auto generated base class for the model UpdateSalePayloadModel.
 */
export const UpdateSalePayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateSalePayload')
  .props({
    __typename: types.optional(types.literal("UpdateSalePayload"), "UpdateSalePayload"),
    sale: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => SaleModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateSalePayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  sale(builder: string | SaleModelSelector | ((selector: SaleModelSelector) => SaleModelSelector) | undefined, args?: { filter?: (SaleFilter | null), order?: (SaleOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`sale`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), SaleModelSelector, builder) }
}
export function selectFromUpdateSalePayload() {
  return new UpdateSalePayloadModelSelector()
}

export const updateSalePayloadModelPrimitives = selectFromUpdateSalePayload().numUids
