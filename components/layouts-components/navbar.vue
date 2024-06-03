<template>
  <div>
    <header class="z-30 flex items-center w-full h-24 sm:h-24">
      <div class="container flex items-center justify-between px-3 mx-auto sm:px-5 lg:px-7">
        <div>
          <nuxt-link to="/" class="block text-3xl uppercase font-semibold text-[#c9203c]">
            Toyota
          </nuxt-link>
          <span class="block mt-2 font-medium">Toyota Material Handling International</span>
        </div>
        <div class="flex items-center">
          <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen lg:flex">
            <nuxt-link to="/" class="flex px-6 py-2">Products</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">Services</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">Training</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">About Us</nuxt-link>
            <nuxt-link to="#" class="flex px-6 py-2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </nuxt-link>
            <nuxt-link to="#" type="button"
              class="flex items-center px-6 py-2 border rounded-xl text-secondary ms-2 bg-primary">Get
              Quote</nuxt-link>
          </nav>
          <button type="button" class="flex flex-col ml-4 lg:hidden" @click="toggleMenu">
            <i class="mb-1 fa-solid fa-bars fa-lg"></i>
          </button>
        </div>
      </div>
    </header>
    <transition name="menu-fade">
      <div v-if="isMenuOpen" class="px-6 py-4 space-y-2 bg-white shadow-md lg:hidden">
        <nuxt-link to="/" class="block py-2">Products</nuxt-link>
        <nuxt-link to="#" class="block py-2">Services</nuxt-link>
        <nuxt-link to="#" class="block py-2">Training</nuxt-link>
        <nuxt-link to="#" class="block py-2">About Us</nuxt-link>
        <div class="flex gap-2 mt-2">
          <nuxt-link to="#" class="flex px-6 py-2 mt-1">
            <i class="fa-solid fa-magnifying-glass"></i>
          </nuxt-link>
          <nuxt-link to="#" type="button"
            class="flex items-center px-6 py-2 border rounded-xl text-secondary ms-2 bg-primary">Get
            Quote</nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.5s;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-to,
.menu-fade-leave-from {
  opacity: 1;
}

.get {
  color: white !important
}
</style>