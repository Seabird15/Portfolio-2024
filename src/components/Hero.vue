<template>
  <header class="bg-hero overflow-hidden">
    <div class="w-screen h-screen text-white">
      <div>
        <Menu />
      </div>
      <div
        class="flex flex-col h-full text-3xl md:text-5xl lg:text-7xl justify-center items-center"
      >
        <h1
          class="bg-white text-black p-4 rounded-md hover:scale-[1.05] transition-all"
        >
          FRONT END DEVELOPER - VUE JS
        </h1>
        <p
          class="my-7 drop-shadow-2xl hover:text-rose-400 p-2 rounded-sm hover:bg-white/10 transition-all"
        >
          TAILWIND CSS - GIT - MODYO - REACT
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.bg-hero {
  background-image: url(../assets/bg-hero.jpg);
}
</style>

<script setup>
import Menu from "./Menu.vue";
</script>
