<script setup>
import "remixicon/fonts/remixicon.css";

import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import Experiencia from "./components/Experiencia.vue";
</script>

<template>
  <Hero />
  <AboutMe />
  <hr class="h-1 mx-4 bg-gray-300 rounded-full" />
  <Experiencia />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

* {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
