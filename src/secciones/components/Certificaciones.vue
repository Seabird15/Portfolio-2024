<template>
  <section
    class="bg-gradient-to-b p-7 from-rose-400/20 via-rose-100 to-transparent my-7 rounded-t-3xl"
  >
    <div>
      <h2 class="text-5xl"><__/Certificaciones</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            class="flex justify-center w-full py-4 mb-auto tracking-widest text-center text-white transition-all duration-300 border-2 rounded-full shadow hover:border-solid hover:border-2 hover:border-rose-500 hover:text-rose-500 hover:bg-rose-200 px-7 bg-rose-500"
          >
            ir a certificación
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
    imagen: "https://i.ibb.co/2W4MNzv/1674237619937.jpg",
    fecha: "2021",
  },
  {
    titulo: "Desarrollo Web - CoderHouse",
    descripcion:
      "Curso de Desarrollo Web orientado a Front End con enfoque en las bases de HTML, CSS y JavaScript y su aplicación en proyectos reales.",
    url: "https://ibb.co/QrFqmVR",
    imagen: "https://i.ibb.co/zGhLfgY/6297525145d80e0019d1d928.png",
    fecha: " 2022",
  },
  {
    titulo: "Certificado Tailwind CSS - Udemy",
    descripcion:
      "Curso de Tailwind CSS desde cero, con enfoque en la creación de proyectos reales y la implementación de componentes personalizados",
    url: "https://www.udemy.com/certificate/UC-24e0afbe-29ec-4050-a546-3882a65e664b/",
    imagen:
      "https://i.ibb.co/Rz4kWNm/UC-24e0afbe-29ec-4050-a546-3882a65e664b.jpg",
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
  {
    titulo: "Vue JS 3 - Udemy",
    descripcion:
      "Curso de Vue JS 3 desde cero, con enfoque en la creación de proyectos reales y la implementación de componentes personalizados",
    url: "https://www.udemy.com/certificate/UC-b41df0ee-1f45-4414-a6de-c58938669d09/",
    imagen:
      "https://i.ibb.co/rmWKmK3/UC-b41df0ee-1f45-4414-a6de-c58938669d09.jpg",
    fecha: "2024",
  },
];
</script>
