<template>
  <div>
    <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
      <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group" v-for="product in store.products" :key="product.id">
          <div
            class="flex flex-col w-full max-w-xs my-10 overflow-hidden border border-[#dfdfdf] rounded-xl shadow-md group">
            <nuxt-link class="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl" to="#">
              <img class="absolute top-0 right-0 object-cover w-full h-full peer" :src="product.featured_image" />
            </nuxt-link>
            <div class="px-5 pb-5 mt-4">
              <nuxt-link to="#">
                <h5 class="text-xl tracking-tight text-center text-[#d04c5b] font-medium">
                  {{ product.name }}
                </h5>
              </nuxt-link>
              <div class="text-center">
                <p class="my-2">
                  <span class="text-lg font-normal text-slate-900">{{ product.code }}</span>
                </p>
                <p class="text-lg font-normal uppercase text-slate-900">
                  Capacity: <span class="text-[#d04c5b] capitalize">{{ product.selectTypes[0].values.name }}</span>
                </p>
                <div class="mt-5">
                  <nuxt-link to="#" type="button"
                    class="py-3.5 text-sm font-medium text-center uppercase px-7 text-secondary bg-primary rounded-2xl">ViewProduct</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useMyProductsStoreStore()

onMounted(() => {
  store.getProductsData()
})
</script>