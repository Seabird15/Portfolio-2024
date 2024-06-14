<template>
  <section class="fixed z-50 w-full">
    <!-- Barra de navegación para pantallas grandes -->
    <nav
      :class="{ 'bg-white': isMenuBackgroundWhite }"
      class="hidden py-4 transition-all shadow-xl md:flex md:justify-between md:items-center md:px-[52px] text-2xl"
    >
      <div class="flex gap-4 my-auto">
        <h2 class="text-4xl text-rose-500">Dani L. Aravena</h2>
        <RRSS />
      </div>
      <div class="flex justify-between my-auto gap-7 text-rose-500">
        <a href="#proyectos" class="transition-all hover:text-white"
          >Proyectos</a
        >
        <a href="#experiencia" class="transition-all hover:text-white"
          >Experiencia</a
        >
        <a href="#sobre-mi" class="transition-all hover:text-white">Sobre Mi</a>
        <a href="#contacto" class="transition-all hover:text-white">Contacto</a>
      </div>
    </nav>

    <!-- Menú hamburguesa para dispositivos móviles -->
    <div
      :class="{ 'bg-white': isMenuBackgroundWhite }"
      class="flex gap-4 p-2 md:hidden"
    >
      <button
        @click="isOpen = !isOpen"
        class="flex items-center px-3 py-2 transition duration-150 ease-in-out border rounded text-rose-500 border-rose-500 hover:text-white hover:bg-rose-500 focus:outline-none focus:bg-rose-500"
      >
        <i class="text-2xl ri-menu-2-line"></i>
      </button>
      <div class="my-auto">
        <RRSS />
      </div>
      <div
        v-if="isOpen"
        class="fixed inset-0 flex w-2/4 bg-white bg-opacity-95"
      >
        <!-- Contenido del menú desplegable -->
        <div class="flex flex-col w-full p-4 text-rose-500">
          <button @click="close()">
            <i class="flex justify-end text-black ri-close-large-line"></i>
          </button>

          <a href="#proyectos" class="px-2 py-2 mt-2 shadow">Proyectos</a>
          <a href="#experiencia" class="px-2 py-2 mt-2 shadow">Experiencia</a>
          <a href="#sobre-mi" class="px-2 py-2 mt-2 shadow">Sobre Mi</a>
          <a href="#contacto" class="px-2 py-2 mt-2 shadow">Contacto</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import RRSS from "./components/RRSS.vue";

import { ref, onMounted, onUnmounted } from "vue";

const isMenuBackgroundWhite = ref(false);
const isOpen = ref(false);

const handleScroll = () => {
  const scrollDistance = 400; // Distancia de scroll en píxeles para cambiar el color de fondo

  isMenuBackgroundWhite.value = window.scrollY > scrollDistance;
};

const close = () => {
  isOpen.value = false;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Aquí puedes definir estilos específicos si es necesario */
.bg-white {
  background-color: white;
  transition: all 0.5s ease-in-out;
}
</style>
