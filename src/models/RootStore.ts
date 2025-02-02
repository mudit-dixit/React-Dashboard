import { Instance } from "mobx-state-tree"
import { RootStoreBase } from "./RootStore.base"
import { productModelPrimitives } from "./ProductModel.base";
import { saleModelPrimitives } from "./SaleModel.base";

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase
  .actions(self => ({

    fetchAllProducts() {
      const variables = { };
      const fetchProductResultSelector = productModelPrimitives.toString();
      const fetchProductQuery = self.queryQueryProduct(variables, fetchProductResultSelector);
      
      console.log("********** fetchProduct Query STARTS **********");
      console.log({ query: fetchProductQuery.query });
      console.log(fetchProductQuery.variables);
      console.log("********** fetchProduct Query ENDS **********");
      
      return fetchProductQuery;
    },

    fetchSalesByDate(startDate?: string, endDate?: string) {
      const variables = {filter: { date :{ between:{min: startDate,
        max: endDate}} }  };
      const fetchSalesResultSelector = saleModelPrimitives.toString();
      const fetchSalesQuery = self.queryQuerySale(variables, fetchSalesResultSelector);
      
      console.log("********** fetchSales Query STARTS **********");
      console.log({ query: fetchSalesQuery.query });
      console.log(fetchSalesQuery.variables);
      console.log("********** fetchSales Query ENDS **********");
      
      return fetchSalesQuery;
    }
    
  }))
