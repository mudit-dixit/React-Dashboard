/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum DgraphIndex {
  int="int",
int64="int64",
float="float",
bool="bool",
hash="hash",
exact="exact",
term="term",
fulltext="fulltext",
trigram="trigram",
regexp="regexp",
year="year",
month="month",
day="day",
hour="hour",
geo="geo",
hnsw="hnsw"
}

/**
* DgraphIndex
*/
export const DgraphIndexEnumType = types.enumeration("DgraphIndex", [
        "int",
  "int64",
  "float",
  "bool",
  "hash",
  "exact",
  "term",
  "fulltext",
  "trigram",
  "regexp",
  "year",
  "month",
  "day",
  "hour",
  "geo",
  "hnsw",
      ])
