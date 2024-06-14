<template>
  <section class="w-full pt-16" id="experiencia">
    <div
      class="h-screen bg-gradient-to-b from-rose-400/20 via-rose-100 to-transparent my-7 rounded-t-3xl"
    >
      <div class="text-right p-7">
        <h2 class="text-5xl">Experiencia___ /></h2>
      </div>
      <div class="mx-auto">
        <div class="flex gap-2 px-7">
          <div class="w-3/6 my-auto">
            <img
              src="../assets/2brainslat_logo.jpeg"
              class="rounded-md"
              alt=""
            />
          </div>
          <div class="my-auto">
            <p class="text-3xl">
              Front End Developer <i class="ri-code-s-slash-line"></i>
            </p>
            <p class="my-4 text-2xl text-gray-500">
              abr. 2023 - actualidad · 1 año 3 mesesabr. 2023 - actualidad · 1
              año 3 meses En remoto
            </p>
            <p class="my-2 text-xl">
              Equipo de Métricas y Desarrollo - Front End Developer
              Especializado en Vue.js y Tailwind CSS utilizando Modyo 8 y Modyo
              9:
            </p>
            <p class="text-xl tracking-wider">
              Como miembro del equipo de métricas y desarrollo de los sitios
              públicos del Banco de Chile, me especializo en el desarrollo y
              mantenimiento de aplicaciones web utilizando Vue.js 3 y las
              últimas versiones de Tailwind CSS. Actualmente, contribuyo
              activamente al proyecto de migración de los sitios públicos del
              Banco de Chile de Modyo 8 a Modyo 9, asegurando una transición sin
              contratiempos y mejorando la experiencia del usuario. Además,
              colaboro estrechamente con el equipo de diseño para implementar
              maquetas y garantizar la coherencia visual en landing pages y
              sitios web. A través de mi experiencia y habilidades técnicas,
              contribuyo al desarrollo de funcionalidades clave y colaboro en la
              implementación de soluciones de seguimiento y análisis de datos
              que impulsan la toma de decisiones informada
            </p>
          </div>
        </div>
      </div>
      <div class="mx-auto my-[100px]">
        <div class="relative flex gap-2 px-7">
          <div class="order-2 w-4/6 my-auto">
            <img
              src="../assets/bbk2brains_logo.jpeg"
              class="mx-auto rounded-md"
              alt=""
            />
          </div>
          <div class="my-auto">
            <p class="text-3xl">
              <i class="ri-code-s-slash-line"></i> Front End QA Trainee
            </p>
            <p class="my-4 text-2xl text-gray-500">
              BBK+2Brains · Contrato de formaciónBBK+2Brains · Contrato de
              formación ene. 2023 - abr. 2023 · 4 mesesene. 2023 - abr. 2023 · 4
              meses En remoto
            </p>
            <p class="my-2 text-xl">QA Trainee para Caja Los Andes</p>
            <p class="text-xl tracking-wider">
              Como Front End QA Trainee, mis principales responsabilidades
              incluyen la realización de pruebas exhaustivas en builds de
              Chromatic y componentes en local, construcción de widgets de
              pruebas en Modyo, coordinación con UX/UI, pruebas en React y
              Angular, identificación y reporte de errores, aprendizaje en
              pruebas automatizadas, comunicación efectiva y reportes regulares
              sobre el progreso del trabajo.
            </p>
          </div>
        </div>
      </div>
      <Certificaciones />
    </div>
  </section>
</template>
<script setup>
import Certificaciones from "./components/Certificaciones.vue";
</script>
