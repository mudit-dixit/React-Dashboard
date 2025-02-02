/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PointModel, PointModelType } from "./PointModel"
import { PointModelSelector } from "./PointModel.base"
import { RootStoreType } from "./index"


/**
 * PointListBase
 * auto generated base class for the model PointListModel.
 */
export const PointListModelBase = ModelBase
  .named('PointList')
  .props({
    __typename: types.optional(types.literal("PointList"), "PointList"),
    points: types.union(types.undefined, types.array(types.late((): any => PointModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PointListModelSelector extends QueryBuilder {
  points(builder: string | PointModelSelector | ((selector: PointModelSelector) => PointModelSelector) | undefined) { return this.__child(`points`, PointModelSelector, builder) }
}
export function selectFromPointList() {
  return new PointListModelSelector()
}

export const pointListModelPrimitives = selectFromPointList()
