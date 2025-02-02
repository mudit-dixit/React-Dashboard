/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { PointModel, PointModelType } from "./PointModel"
import { pointModelPrimitives, PointModelSelector } from "./PointModel.base"
import { ProductAggregateResultModel, ProductAggregateResultModelType } from "./ProductAggregateResultModel"
import { productAggregateResultModelPrimitives, ProductAggregateResultModelSelector } from "./ProductAggregateResultModel.base"
import { DeleteProductPayloadModel, DeleteProductPayloadModelType } from "./DeleteProductPayloadModel"
import { deleteProductPayloadModelPrimitives, DeleteProductPayloadModelSelector } from "./DeleteProductPayloadModel.base"
import { MultiPolygonModel, MultiPolygonModelType } from "./MultiPolygonModel"
import { multiPolygonModelPrimitives, MultiPolygonModelSelector } from "./MultiPolygonModel.base"
import { UpdateProductPayloadModel, UpdateProductPayloadModelType } from "./UpdateProductPayloadModel"
import { updateProductPayloadModelPrimitives, UpdateProductPayloadModelSelector } from "./UpdateProductPayloadModel.base"
import { PointListModel, PointListModelType } from "./PointListModel"
import { pointListModelPrimitives, PointListModelSelector } from "./PointListModel.base"
import { AddSalePayloadModel, AddSalePayloadModelType } from "./AddSalePayloadModel"
import { addSalePayloadModelPrimitives, AddSalePayloadModelSelector } from "./AddSalePayloadModel.base"
import { SaleModel, SaleModelType } from "./SaleModel"
import { saleModelPrimitives, SaleModelSelector } from "./SaleModel.base"
import { PolygonModel, PolygonModelType } from "./PolygonModel"
import { polygonModelPrimitives, PolygonModelSelector } from "./PolygonModel.base"
import { DeleteSalePayloadModel, DeleteSalePayloadModelType } from "./DeleteSalePayloadModel"
import { deleteSalePayloadModelPrimitives, DeleteSalePayloadModelSelector } from "./DeleteSalePayloadModel.base"
import { ProductModel, ProductModelType } from "./ProductModel"
import { productModelPrimitives, ProductModelSelector } from "./ProductModel.base"
import { AddProductPayloadModel, AddProductPayloadModelType } from "./AddProductPayloadModel"
import { addProductPayloadModelPrimitives, AddProductPayloadModelSelector } from "./AddProductPayloadModel.base"
import { UpdateSalePayloadModel, UpdateSalePayloadModelType } from "./UpdateSalePayloadModel"
import { updateSalePayloadModelPrimitives, UpdateSalePayloadModelSelector } from "./UpdateSalePayloadModel.base"
import { SaleAggregateResultModel, SaleAggregateResultModelType } from "./SaleAggregateResultModel"
import { saleAggregateResultModelPrimitives, SaleAggregateResultModelSelector } from "./SaleAggregateResultModel.base"


import { SaleHasFilter } from "./SaleHasFilterEnum"
import { ProductHasFilter } from "./ProductHasFilterEnum"
import { Mode } from "./ModeEnum"
import { DgraphIndex } from "./DgraphIndexEnum"
import { ProductOrderable } from "./ProductOrderableEnum"
import { HttpMethod } from "./HttpMethodEnum"
import { SaleOrderable } from "./SaleOrderableEnum"

export type AuthRule = {
  and?: (AuthRule | null)[] | null
  or?: (AuthRule | null)[] | null
  not?: (AuthRule | null)
  rule?: (string | null)
}
export type MultiPolygonRef = {
  polygons: PolygonRef[]
}
export type IntFilter = {
  eq?: (number | null)
  in?: (number | null)[] | null
  le?: (number | null)
  lt?: (number | null)
  ge?: (number | null)
  gt?: (number | null)
  between?: (IntRange | null)
}
export type PolygonRef = {
  coordinates: PointListRef[]
}
export type UpdateSaleInput = {
  filter: SaleFilter
  set?: (SalePatch | null)
  remove?: (SalePatch | null)
}
export type Int64Range = {
  min: any
  max: any
}
export type PointGeoFilter = {
  near?: (NearFilter | null)
  within?: (WithinFilter | null)
}
export type IntRange = {
  min: number
  max: number
}
export type ContainsFilter = {
  point?: (PointRef | null)
  polygon?: (PolygonRef | null)
}
export type IntersectsFilter = {
  polygon?: (PolygonRef | null)
  multiPolygon?: (MultiPolygonRef | null)
}
export type GenerateMutationParams = {
  add?: (boolean | null)
  update?: (boolean | null)
  delete?: (boolean | null)
}
export type ProductPatch = {
  name?: (string | null)
  category?: (string | null)
  price?: (number | null)
  totalRevenue?: (number | null)
  totalQuantity?: (number | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
}
export type SalePatch = {
  product?: (ProductRef | null)
  quantity?: (number | null)
  revenue?: (number | null)
  date?: (any | null)
  region?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
}
export type UpdateProductInput = {
  filter: ProductFilter
  set?: (ProductPatch | null)
  remove?: (ProductPatch | null)
}
export type FloatRange = {
  min: number
  max: number
}
export type PointRef = {
  longitude: number
  latitude: number
}
export type ProductOrder = {
  asc?: (ProductOrderable | null)
  desc?: (ProductOrderable | null)
  then?: (ProductOrder | null)
}
export type StringRange = {
  min: string
  max: string
}
export type PointListRef = {
  points: PointRef[]
}
export type StringHashFilter = {
  eq?: (string | null)
  in?: (string | null)[] | null
}
export type NearFilter = {
  distance: number
  coordinate: PointRef
}
export type Int64Filter = {
  eq?: (any | null)
  in?: (any | null)[] | null
  le?: (any | null)
  lt?: (any | null)
  ge?: (any | null)
  gt?: (any | null)
  between?: (Int64Range | null)
}
export type SaleOrder = {
  asc?: (SaleOrderable | null)
  desc?: (SaleOrderable | null)
  then?: (SaleOrder | null)
}
export type AddProductInput = {
  name?: (string | null)
  category?: (string | null)
  price: number
  totalRevenue: number
  totalQuantity: number
  createdOn?: (any | null)
  updatedOn?: (any | null)
}
export type WithinFilter = {
  polygon: PolygonRef
}
export type StringExactFilter = {
  eq?: (string | null)
  in?: (string | null)[] | null
  le?: (string | null)
  lt?: (string | null)
  ge?: (string | null)
  gt?: (string | null)
  between?: (StringRange | null)
}
export type DateTimeRange = {
  min: any
  max: any
}
export type DateTimeFilter = {
  eq?: (any | null)
  in?: (any | null)[] | null
  le?: (any | null)
  lt?: (any | null)
  ge?: (any | null)
  gt?: (any | null)
  between?: (DateTimeRange | null)
}
export type StringTermFilter = {
  allofterms?: (string | null)
  anyofterms?: (string | null)
}
export type ProductRef = {
  id?: (string | null)
  name?: (string | null)
  category?: (string | null)
  price?: (number | null)
  totalRevenue?: (number | null)
  totalQuantity?: (number | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
}
export type FloatFilter = {
  eq?: (number | null)
  in?: (number | null)[] | null
  le?: (number | null)
  lt?: (number | null)
  ge?: (number | null)
  gt?: (number | null)
  between?: (FloatRange | null)
}
export type StringRegExpFilter = {
  regexp?: (string | null)
}
export type DgraphDefault = {
  value?: (string | null)
}
export type SaleRef = {
  id?: (string | null)
  product?: (ProductRef | null)
  quantity?: (number | null)
  revenue?: (number | null)
  date?: (any | null)
  region?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
}
export type GenerateQueryParams = {
  get?: (boolean | null)
  query?: (boolean | null)
  password?: (boolean | null)
  aggregate?: (boolean | null)
}
export type StringFullTextFilter = {
  alloftext?: (string | null)
  anyoftext?: (string | null)
}
export type SaleFilter = {
  id?: string[] | null
  date?: (DateTimeFilter | null)
  region?: (StringTermFilter | null)
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  has?: (SaleHasFilter | null)[] | null
  and?: (SaleFilter | null)[] | null
  or?: (SaleFilter | null)[] | null
  not?: (SaleFilter | null)
}
export type CustomHttp = {
  url: string
  method: HttpMethod
  body?: (string | null)
  graphql?: (string | null)
  mode?: (Mode | null)
  forwardHeaders?: string[] | null
  secretHeaders?: string[] | null
  introspectionHeaders?: string[] | null
  skipIntrospection?: (boolean | null)
}
export type PolygonGeoFilter = {
  near?: (NearFilter | null)
  within?: (WithinFilter | null)
  contains?: (ContainsFilter | null)
  intersects?: (IntersectsFilter | null)
}
export type AddSaleInput = {
  product?: (ProductRef | null)
  quantity: number
  revenue: number
  date?: (any | null)
  region?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
}
export type ProductFilter = {
  id?: string[] | null
  name?: (StringTermFilter | null)
  category?: (StringTermFilter | null)
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  has?: (ProductHasFilter | null)[] | null
  and?: (ProductFilter | null)[] | null
  or?: (ProductFilter | null)[] | null
  not?: (ProductFilter | null)
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  sales: ObservableMap<string, SaleModelType>,
  products: ObservableMap<string, ProductModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryGetProduct="queryGetProduct",
queryQueryProduct="queryQueryProduct",
queryAggregateProduct="queryAggregateProduct",
queryGetSale="queryGetSale",
queryQuerySale="queryQuerySale",
queryAggregateSale="queryAggregateSale"
}
export enum RootStoreBaseMutations {
mutateAddProduct="mutateAddProduct",
mutateUpdateProduct="mutateUpdateProduct",
mutateDeleteProduct="mutateDeleteProduct",
mutateAddSale="mutateAddSale",
mutateUpdateSale="mutateUpdateSale",
mutateDeleteSale="mutateDeleteSale"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Point', () => PointModel], ['ProductAggregateResult', () => ProductAggregateResultModel], ['DeleteProductPayload', () => DeleteProductPayloadModel], ['MultiPolygon', () => MultiPolygonModel], ['UpdateProductPayload', () => UpdateProductPayloadModel], ['PointList', () => PointListModel], ['AddSalePayload', () => AddSalePayloadModel], ['Sale', () => SaleModel], ['Polygon', () => PolygonModel], ['DeleteSalePayload', () => DeleteSalePayloadModel], ['Product', () => ProductModel], ['AddProductPayload', () => AddProductPayloadModel], ['UpdateSalePayload', () => UpdateSalePayloadModel], ['SaleAggregateResult', () => SaleAggregateResultModel]], ['Sale', 'Product'], "js"))
  .props({
    sales: types.optional(types.map(types.late((): any => SaleModel)), {}),
    products: types.optional(types.map(types.late((): any => ProductModel)), {})
  })
  .actions(self => ({
    queryGetProduct(variables: { id: string }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getProduct: ProductModelType }>(`query getProduct($id: ID!) { getProduct(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryProduct(variables: { filter?: (ProductFilter | null), order?: (ProductOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryProduct: ProductModelType[] }>(`query queryProduct($filter: ProductFilter, $order: ProductOrder, $first: Int, $offset: Int) { queryProduct(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateProduct(variables: { filter?: (ProductFilter | null) }, resultSelector: string | ((qb: ProductAggregateResultModelSelector) => ProductAggregateResultModelSelector) = productAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateProduct: ProductAggregateResultModelType }>(`query aggregateProduct($filter: ProductFilter) { aggregateProduct(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetSale(variables: { id: string }, resultSelector: string | ((qb: SaleModelSelector) => SaleModelSelector) = saleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getSale: SaleModelType }>(`query getSale($id: ID!) { getSale(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new SaleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQuerySale(variables: { filter?: (SaleFilter | null), order?: (SaleOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: SaleModelSelector) => SaleModelSelector) = saleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ querySale: SaleModelType[] }>(`query querySale($filter: SaleFilter, $order: SaleOrder, $first: Int, $offset: Int) { querySale(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new SaleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateSale(variables: { filter?: (SaleFilter | null) }, resultSelector: string | ((qb: SaleAggregateResultModelSelector) => SaleAggregateResultModelSelector) = saleAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateSale: SaleAggregateResultModelType }>(`query aggregateSale($filter: SaleFilter) { aggregateSale(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new SaleAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateAddProduct(variables: { input: AddProductInput[] }, resultSelector: string | ((qb: AddProductPayloadModelSelector) => AddProductPayloadModelSelector) = addProductPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addProduct: AddProductPayloadModelType }>(`mutation addProduct($input: [AddProductInput!]!) { addProduct(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddProductPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateProduct(variables: { input: UpdateProductInput }, resultSelector: string | ((qb: UpdateProductPayloadModelSelector) => UpdateProductPayloadModelSelector) = updateProductPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProduct: UpdateProductPayloadModelType }>(`mutation updateProduct($input: UpdateProductInput!) { updateProduct(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateProductPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteProduct(variables: { filter: ProductFilter }, resultSelector: string | ((qb: DeleteProductPayloadModelSelector) => DeleteProductPayloadModelSelector) = deleteProductPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProduct: DeleteProductPayloadModelType }>(`mutation deleteProduct($filter: ProductFilter!) { deleteProduct(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteProductPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddSale(variables: { input: AddSaleInput[] }, resultSelector: string | ((qb: AddSalePayloadModelSelector) => AddSalePayloadModelSelector) = addSalePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addSale: AddSalePayloadModelType }>(`mutation addSale($input: [AddSaleInput!]!) { addSale(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddSalePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateSale(variables: { input: UpdateSaleInput }, resultSelector: string | ((qb: UpdateSalePayloadModelSelector) => UpdateSalePayloadModelSelector) = updateSalePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateSale: UpdateSalePayloadModelType }>(`mutation updateSale($input: UpdateSaleInput!) { updateSale(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateSalePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteSale(variables: { filter: SaleFilter }, resultSelector: string | ((qb: DeleteSalePayloadModelSelector) => DeleteSalePayloadModelSelector) = deleteSalePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteSale: DeleteSalePayloadModelType }>(`mutation deleteSale($filter: SaleFilter!) { deleteSale(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteSalePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
