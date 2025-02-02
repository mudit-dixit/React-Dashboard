/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PointBase
 * auto generated base class for the model PointModel.
 */
export const PointModelBase = ModelBase
  .named('Point')
  .props({
    __typename: types.optional(types.literal("Point"), "Point"),
    longitude: types.union(types.undefined, types.number),
    latitude: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PointModelSelector extends QueryBuilder {
  get longitude() { return this.__attr(`longitude`) }
  get latitude() { return this.__attr(`latitude`) }
}
export function selectFromPoint() {
  return new PointModelSelector()
}

export const pointModelPrimitives = selectFromPoint().longitude.latitude
