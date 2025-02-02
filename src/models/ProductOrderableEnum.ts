/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum ProductOrderable {
  name="name",
category="category",
price="price",
totalRevenue="totalRevenue",
totalQuantity="totalQuantity",
createdOn="createdOn",
updatedOn="updatedOn"
}

/**
* ProductOrderable
*/
export const ProductOrderableEnumType = types.enumeration("ProductOrderable", [
        "name",
  "category",
  "price",
  "totalRevenue",
  "totalQuantity",
  "createdOn",
  "updatedOn",
      ])
