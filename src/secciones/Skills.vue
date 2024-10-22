<template>
  <div class="w-full">
    <div class="container">
      <h2 class="text-5xl">Skills <i class="ri-braces-fill"></i></h2>

      <Galeria />
    </div>

    <!--Slider Mobile-->
    <!-- <div>
      <div class="overflow-hidden whitespace-nowrap">
        <div class="inline-block text-6xl text-rose-500 animate-scroll">
          <span v-for="(text, index) in skills" :key="index" class="mr-4">
            {{ text.name }} <i :class="text.icon"></i>
          </span>
        </div>
      </div>
    </div> -->
    <!--Slider Mobile-->
  </div>
</template>

<script setup>
import Galeria from "./components/Galeria.vue";

const habilities = [
  "Trabajo en equipo",
  "Comunicación",
  "Adaptabilidad",
  "Resolución de problemas",
  "Empatía",
  "Organización",
  "Responsabilidad",
  "Puntualidad",
];
const skills = [
  { name: "HTML", icon: "ri-html5-line" },
  { name: "Tailwind CSS", icon: "ri-tailwind-css-fill" },
  { name: "Git", icon: "ri-git-repository-fill" },
  { name: "Modyo", icon: "ri-reactjs-line" },
  { name: "CSS", icon: "ri-css3-fill" },
  { name: "VUE JS", icon: "ri-vuejs-fill" },
  { name: "React js", icon: "ri-reactjs-line" },
  { name: "React Native", icon: "ri-reactjs-line" },
];

import { onMounted } from "vue";

onMounted(() => {
  const animationKeyframes = `
    @keyframes scroll {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(animationKeyframes, styleSheet.cssRules.length);
});
</script>

<style>
.animate-scroll {
  display: inline-block;
  animation: scroll 18s linear infinite;
}
</style>
