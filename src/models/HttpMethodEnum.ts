/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum HttpMethod {
  GET="GET",
POST="POST",
PUT="PUT",
PATCH="PATCH",
DELETE="DELETE"
}

/**
* HttpMethod
*/
export const HttpMethodEnumType = types.enumeration("HttpMethod", [
        "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
      ])
