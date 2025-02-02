/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum SaleHasFilter {
  product="product",
quantity="quantity",
revenue="revenue",
date="date",
region="region",
createdOn="createdOn",
updatedOn="updatedOn"
}

/**
* SaleHasFilter
*/
export const SaleHasFilterEnumType = types.enumeration("SaleHasFilter", [
        "product",
  "quantity",
  "revenue",
  "date",
  "region",
  "createdOn",
  "updatedOn",
      ])
