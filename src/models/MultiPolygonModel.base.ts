/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PolygonModel, PolygonModelType } from "./PolygonModel"
import { PolygonModelSelector } from "./PolygonModel.base"
import { RootStoreType } from "./index"


/**
 * MultiPolygonBase
 * auto generated base class for the model MultiPolygonModel.
 */
export const MultiPolygonModelBase = ModelBase
  .named('MultiPolygon')
  .props({
    __typename: types.optional(types.literal("MultiPolygon"), "MultiPolygon"),
    polygons: types.union(types.undefined, types.array(types.late((): any => PolygonModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MultiPolygonModelSelector extends QueryBuilder {
  polygons(builder: string | PolygonModelSelector | ((selector: PolygonModelSelector) => PolygonModelSelector) | undefined) { return this.__child(`polygons`, PolygonModelSelector, builder) }
}
export function selectFromMultiPolygon() {
  return new MultiPolygonModelSelector()
}

export const multiPolygonModelPrimitives = selectFromMultiPolygon()
