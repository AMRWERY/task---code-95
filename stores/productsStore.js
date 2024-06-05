import { defineStore } from "pinia";

export const useMyProductsStoreStore = defineStore({
  id: "myProductsStoreStore",
  state: () => ({
    products: [],
  }),

  actions: {
    async getProductsData() {
      const productsListData = await $fetch(
        "https://api-forklift.code95.info/v1/products/getJson"
      );
      // console.log(productsListData);
      this.products = productsListData.data;
    },

    async filterProducts() {
      const filterProducts = await $fetch(
        "https://api-forklift.code95.info/v1/products/filters"
      );
      console.log(filterProducts);
      this.products = filterProducts.data;
    },
  },
});
