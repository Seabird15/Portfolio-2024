<template>
  <div class="w-full">
    <div class="container hidden lg:block">
      <h2 class="text-5xl">Skills <i class="ri-braces-fill"></i></h2>
      <div class="grid grid-cols-4 text-center">
        <div
          class="my-5"
          v-for="(habilities, index) in habilities"
          :key="index"
        >
          <span
            class="p-2 px-5 text-2xl text-gray-600 transition-all rounded-full shadow hover:bg-gradient-to-r from-rose-600 hover:border-white to-rose-500 hover:text-white hover:shadow-lg"
            >{{ habilities }}
          </span>
        </div>
      </div>
      <div
        class="container flex justify-center mx-auto text-5xl p-7 my-7 md:justify-evenly md:text-6xl"
      >
        <i class="text-yellow-400 ri-html5-line"></i>
        <i class="text-green-700 ri-vuejs-fill"></i>
        <i class="text-blue-400 ri-reactjs-line"></i>
        <i class="text-blue-500 ri-tailwind-css-fill"></i>
        <i class="text-blue-800 ri-css3-fill"></i>
      </div>
    </div>

    <!--Slider Mobile-->
    <div>
      <div class="overflow-hidden whitespace-nowrap">
        <div class="inline-block text-6xl text-rose-500 animate-scroll">
          <span v-for="(text, index) in skills" :key="index" class="mr-4">
            {{ text.name }} <i :class="text.icon"></i>
          </span>
        </div>
      </div>
    </div>
    <!--Slider Mobile-->
  </div>
</template>

<script setup>
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
