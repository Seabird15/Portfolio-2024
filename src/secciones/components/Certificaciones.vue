<template>
  <section
    class="h-screen bg-gradient-to-b p-7 from-rose-400/20 via-rose-100 to-transparent my-7 rounded-t-3xl"
  >
    <div>
      <h2 class="text-5xl"><__/Certificaciones</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div
        class="container p-7 hover:scale-[1.02] transition-all"
        v-for="(i, index) in certis"
        :key="index"
      >
        <div class="p-4 bg-white rounded-md shadow-lg bg-opacity-20 h-[550px]">
          <img :src="i.imagen" alt="image" class="w-auto mx-auto max-h-44" />
          <h3 class="my-4 text-2xl tracking-wider text-center">
            {{ i.titulo }}
          </h3>
          <p class="text-center">
            {{ i.descripcion }}
          </p>
          <p class="my-4 text-center">{{ i.fecha }}</p>
          <a
            :href="i.url"
            class="flex justify-center py-4 mx-auto tracking-widest text-center text-white border-2 rounded-full shadow w-fit px-7 bg-rose-300"
          >
            ver más
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const certis = [
  {
    titulo: "Bootcamp Front End Laboratoria",
    descripcion:
      "Bootcamp destinado a mujeres interesadas en desarrollar una carrera den Desarrollo Web Front End. Duración de 6 meses, con un enfoque en HTML, CSS, JavaScript, React y Node.js.",
    url: "https://www.credential.net/c3374281-8955-4ba3-8c28-26b61f4cdb31",
    imagen: "https://i.ibb.co/ZX76Twq/Labo-Front.jpg",
    fecha: "2021",
  },
  {
    titulo: "Desarrollo Web - CoderHouse",
    descripcion:
      "Curso de Desarrollo Web orientado a Front End con enfoque en las bases de HTML, CSS y JavaScript y su aplicación en proyectos reales.",
    url: "https://ibb.co/QrFqmVR",
    imagen: "https://i.ibb.co/zGhLfgY/6297525145d80e0019d1d928.png",
    fecha: "Abril 2022",
  },
  {
    titulo: "Certificado Tailwind CSS - Udemy",
    descripcion:
      "Curso de Tailwind CSS desde cero, con enfoque en la creación de proyectos reales y la implementación de componentes personalizados",
    url: "https://www.udemy.com/certificate/UC-24e0afbe-29ec-4050-a546-3882a65e664b/",
    imagen: "https://i.ibb.co/4ZRcwcY/certiudemy1.jpg",
    fecha: "2022",
  },
  {
    titulo: "Front End Developer - Platzi",
    descripcion:
      "Curso de Front End Developer con enfoque en HTML, CSS y JavaScript además de reforzar las bases del Front, la interacción con el usuario y el diseño responsivo.",
    url: "https://platzi.com/p/danielalizama.a/curso/2467-frontend-developer/diploma/detalle/",
    imagen:
      "https://i.ibb.co/YTQtV8M/Captura-de-pantalla-2024-06-14-a-la-s-5-24-59-p-m.png",
    fecha: "2022",
  },
];
</script>
