<template>
  <div>
    <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
      <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group"> <!-- v-for -->
          <div
            class="flex flex-col w-full max-w-xs my-10 overflow-hidden border border-gray-100 rounded-lg shadow-md group">
            <a class="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl" href="#">
              <img class="absolute top-0 right-0 object-cover w-full h-full peer"
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" />
            </a>
            <div class="px-5 pb-5 mt-4">
              <a href="#">
                <h5 class="text-xl tracking-tight text-slate-900">
                  Nike Air MX Super 2500 - Red
                </h5>
              </a>
              <div class="flex items-center justify-between mt-2 mb-5">
                <p>
                  <span class="text-3xl font-bold text-slate-900">$449</span>
                  <span class="text-sm line-through text-slate-900">$699</span>
                </p>
              </div>
              <a href="#"
                class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMyProductsStoreStore } from '../stores/productsStore'

const store = useMyProductsStoreStore()

onMounted(() => {
  store.getProductsData()
})
</script>