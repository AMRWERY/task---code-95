import { defineStore } from "pinia";

export const useMyProductsStoreStore = defineStore({
  id: "myProductsStoreStore",
  state: () => ({
    products: [],
  }),

  actions: {
    async getProductsData() {
      const productsListData = await $fetch(
        // "https://api-forklift.code95.info/v1/products/getJson"
        "https://fakestoreapi.com/products"
      );
      console.log(productsListData);
      // this.products = productsListData.data;
    },
  },
});
