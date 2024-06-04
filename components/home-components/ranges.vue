<template>
  <div>
    <div class="text-center">
      <p class="mt-12 text-2xl font-bold uppercase">Ranges</p>
      <div class="w-[30px] h-[1.5px] bg-[#c9203c] mt-2 mx-auto"></div>
    </div>

    <div class="container mx-auto mt-12">
      <!-- Grid Container -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Card 1 -->
        <div class="h-48 p-4 bg-[#efeff0] rounded-lg shadow-sm">
          <h2 class="text-xl font-normal">Usage Intensity</h2>
          <div class="mb-6 text-center">
          </div>
          <div class="container mx-auto mt-12">
            <!-- Timeline Container -->
            <div class="flex flex-wrap justify-between">
              <!-- Timeline Item 1 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold">Low</h4>
              </div>
              <!-- Timeline Item 2 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold"></h4>
              </div>
              <!-- Timeline Item 3 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold">Medium</h4>
              </div>
              <!-- Timeline Item 4 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold"></h4>
              </div>
              <!-- Timeline Item 5 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold">High</h4>
              </div>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="h-48 p-4 bg-[#efeff0] rounded-lg shadow-sm">
          <h2 class="text-xl font-semibold">Transport Distance</h2>
          <div class="container mx-auto mt-12">
            <!-- Timeline Container -->
            <div class="flex flex-wrap justify-between">
              <!-- Timeline Item 1 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold">Short</h4>
              </div>
              <!-- Timeline Item 2 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold"></h4>
              </div>
              <!-- Timeline Item 3 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold">Medium</h4>
              </div>
              <!-- Timeline Item 4 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold"></h4>
              </div>
              <!-- Timeline Item 5 -->
              <div class="timeline-item">
                <div class="w-7 h-7 bg-[#dfdfdf] rounded-full mb-2"></div>
                <h4 class="text-lg font-semibold">Long</h4>
              </div>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="h-48 p-4 bg-[#efeff0] rounded-lg shadow-sm">
          <h2 class="text-xl font-semibold">Load Capacity</h2>
          <p class="mt-2 text-gray-600">
          <div class="container mx-auto mt-12">
            <!-- Timeline Container -->
            <input type="range"
              class="transparent h-[6px] w-full cursor-pointer appearance-none border-transparent bg-[#f2c3c4] rounded-xl mr-2"
              id="customRange1" />
            <div class="flex items-center justify-center mt-4 space-x-12">
              <input type="text" value="0kg" class="w-24 px-2 py-2 border border-gray-400 rounded outline-none" />
              <span class="mx-2 font-bold">-</span>
              <input type="text" value="0kg" class="w-24 px-2 py-2 border border-gray-400 rounded outline-none" />
            </div>
          </div>
          </p>
        </div>
        <!-- Empty Column -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.timeline-item {
  flex: 0 0 calc(20% - 1rem);
  max-width: calc(20% - 1.5rem);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>