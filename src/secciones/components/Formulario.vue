<template>
  <section id="contact" class="py-10">
    <h2 class="mb-6 text-3xl font-semibold text-center">Contacto</h2>
    <form ref="form" @submit.prevent="sendEmail" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="user_name" class="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label for="user_email" class="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium">Mensaje</label>
        <textarea
          name="message"
          id="message"
          class="w-full p-2 border rounded"
          rows="5"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full py-2 text-white bg-green-600 rounded hover:bg-blue-500"
      >
        Enviar
      </button>
    </form>
    <p v-if="successMessage" class="mt-4 text-green-500">
      {{ successMessage }}
    </p>
    <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
  </section>
</template>
  
  <script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref(null);
const successMessage = ref("");
const errorMessage = ref("");

const sendEmail = () => {
  emailjs
    .sendForm("service_u6044lj", "template_frhw5n6", form.value, {
      publicKey: "8CJ07fRWuJTanQOtg",
    })
    .then(
      () => {
        successMessage.value = "¡Correo enviado con éxito!";
        errorMessage.value = "";
        form.value.reset(); // Reinicia el formulario después de enviar
      },
      (error) => {
        errorMessage.value = "Error al enviar el correo: " + error.text;
        successMessage.value = "";
      }
    );
};
</script>
  
  <style scoped>
/* Aquí puedes agregar tus estilos personalizados */
</style>
  