/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum SaleOrderable {
  quantity="quantity",
revenue="revenue",
date="date",
region="region",
createdOn="createdOn",
updatedOn="updatedOn"
}

/**
* SaleOrderable
*/
export const SaleOrderableEnumType = types.enumeration("SaleOrderable", [
        "quantity",
  "revenue",
  "date",
  "region",
  "createdOn",
  "updatedOn",
      ])
