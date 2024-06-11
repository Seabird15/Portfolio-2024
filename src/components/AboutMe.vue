<template>
  <main class="my-7">
    <div class="w-full container p-7 mx-auto">
      <div class="">
        <h2 class="text-5xl">< Sobre mi __</h2>
      </div>
      <!--SobreMi-->
      <div class="my-[80px] flex flex-col lg:flex-row gap-7">
        <p class="text-xl leading-9 tracking-wider lg:w-8/12">
          ¡Hola Mundo! Me interesa desarrollarme en el campo laboral tech y
          estoy abierta a desempeñarme en distintos ámbitos que potencien mis
          capacidades.
          <span class="text-rose-400 font-bold"
            >Me considero una persona responsable y ordenada, orientada al logro
            y capaz de trabajar en función de los objetivos y metas planteados
            en mi equipo de trabajo.</span
          >
          <br />
          <br />
          Mi formación profesional me ha permitido adquirir estructura mental y
          habilidades de organización y aprendizaje permanentes que facilitan mi
          inserción en distintos campos laborales. Soy una persona dinamica, me
          gusta tener objetivos claros y avanzar hacia ellos en periodos de
          tiempo cortos y largos. Amante de la musica y los animales, me gusta
          el deporte, leer y escribir.
        </p>

        <img
          src="../assets/imgperson.png"
          class="lg:w-5/12 rounded-e-3xl shadow-lg"
          alt=""
        />
      </div>
      <!--Skills-->
      <div class="my-[100px]">
        <Skills />
      </div>
      <!--Skills-->
    </div>
  </main>
</template>

<script setup>
import Skills from "./Skills.vue";
</script>
