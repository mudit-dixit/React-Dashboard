/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum ProductHasFilter {
  name="name",
category="category",
price="price",
totalRevenue="totalRevenue",
totalQuantity="totalQuantity",
createdOn="createdOn",
updatedOn="updatedOn"
}

/**
* ProductHasFilter
*/
export const ProductHasFilterEnumType = types.enumeration("ProductHasFilter", [
        "name",
  "category",
  "price",
  "totalRevenue",
  "totalQuantity",
  "createdOn",
  "updatedOn",
      ])
