<template>
  <div class="mb-10" id="contacto">
    <div class="container flex justify-center mx-auto">
      <button
        @click="openModal"
        class="p-3 text-5xl text-white transition-all duration-300 bg-rose-500 rounded-lg shadow-lg px-7 hover:text-red-500 hover:bg-white hover:shadow-xl hover:border-solid hover:border-[1px]"
      >
        Contactame!
      </button>
      <transition name="fade">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div class="w-11/12 max-w-xl p-6 bg-white rounded-lg shadow-lg">
            <Formulario />
            <button
              @click="closeModal"
              class="px-4 py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Formulario from "./components/Formulario.vue";
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>