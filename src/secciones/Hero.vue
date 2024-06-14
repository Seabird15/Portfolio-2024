<template>
  <header class="overflow-hidden bg-hero">
    <div class="w-screen h-screen text-white">
      <div>
        <Menu />
      </div>
      <div
        class="flex flex-col items-center justify-center h-full text-3xl md:text-5xl lg:text-7xl"
      >
        <h1
          class="bg-white text-black p-4 rounded-md hover:scale-[1.05] transition-all drop-shadow-2xl hover:text-rose-400 hover:bg-white/10"
        >
          FRONT END DEVELOPER - VUE JS
        </h1>
        <p
          class="p-2 transition-all rounded-sm my-7 drop-shadow-2xl hover:text-rose-400 hover:bg-white/10"
        >
          TAILWIND CSS - GIT - MODYO - REACT
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped>
html {
  background-color: #f7f7f7;
}
.bg-hero {
  background-image: url(../assets/bg-hero.jpg);
}
</style>

<script setup>
import Menu from "./Menu.vue";
</script>
