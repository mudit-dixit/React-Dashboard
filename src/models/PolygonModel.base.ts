/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PointListModel, PointListModelType } from "./PointListModel"
import { PointListModelSelector } from "./PointListModel.base"
import { RootStoreType } from "./index"


/**
 * PolygonBase
 * auto generated base class for the model PolygonModel.
 */
export const PolygonModelBase = ModelBase
  .named('Polygon')
  .props({
    __typename: types.optional(types.literal("Polygon"), "Polygon"),
    coordinates: types.union(types.undefined, types.array(types.late((): any => PointListModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PolygonModelSelector extends QueryBuilder {
  coordinates(builder: string | PointListModelSelector | ((selector: PointListModelSelector) => PointListModelSelector) | undefined) { return this.__child(`coordinates`, PointListModelSelector, builder) }
}
export function selectFromPolygon() {
  return new PolygonModelSelector()
}

export const polygonModelPrimitives = selectFromPolygon()
