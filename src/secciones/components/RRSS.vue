<template>
  <div class="flex gap-4">
    <a
      href="https://www.linkedin.com/in/danielalizamaaravenadv/"
      target="_blank"
    >
      <i
        :class="{ 'text-rose-600': isMenuBackgroundWhite }"
        class="transition-all cursor-pointer hover:text-rose-600 ri-linkedin-box-fill"
      ></i>
    </a>
    <a href="https://github.com/Seabird15" target="_blank">
      <i
        :class="{ 'text-rose-600': isMenuBackgroundWhite }"
        class="transition-all cursor-pointer hover:text-rose-600 ri-github-fill"
      ></i>
    </a>
    <a
      href="https://drive.google.com/file/d/1iwtnAlZ5eKGfngd2QJ8xQ0uPwBpCXtX-/view"
      target="_blank"
    >
      <i
        :class="{ 'text-rose-600': isMenuBackgroundWhite }"
        class="transition-all cursor-pointer hover:text-rose-600 ri-article-fill"
      ></i>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuBackgroundWhite = ref(false);

const handleScroll = () => {
  const scrollDistance = 400; // Distancia de scroll en píxeles para cambiar el color de fondo

  isMenuBackgroundWhite.value = window.scrollY > scrollDistance;
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
