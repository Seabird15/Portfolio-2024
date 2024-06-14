<template>
  <div class="w-full">
    <div class="container">
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:flex justify-around mx-auto"
      >
        <div class="my-5" v-for="(i, index) in skills" :key="index">
          <span
            class="border-2 hover:bg-gradient-to-r from-rose-600 hover:border-white to-rose-500 hover:text-white hover:shadow-lg transition-all md:text-3xl border-black w-fit p-4 rounded-full px-7"
            >{{ i.name }}</span
          >
        </div>
      </div>
      <div
        class="container p-7 my-7 mx-auto flex justify-center md:justify-evenly text-5xl md:text-6xl"
      >
        <i class="ri-html5-line text-yellow-400"></i>
        <i class="ri-vuejs-fill text-green-700"></i>
        <i class="ri-reactjs-line text-blue-400"></i>
        <i class="ri-tailwind-css-fill text-blue-500"></i>
        <i class="ri-css3-fill text-blue-800"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { name: "HTML" },
  { name: "Tailwind CSS" },
  { name: "Git" },
  { name: "Modyo" },
  { name: "CSS" },
  { name: "VUE JS" },
  { name: "React js" },
  { name: "React Native" },
];
</script>
