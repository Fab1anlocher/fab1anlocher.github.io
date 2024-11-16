<template>


    <main class="contact-main">
      <section class="contact">
      <h1>Kontakt</h1>
      <form id="contactForm" @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required maxlength="60" />

        <label for="email">E-Mail:</label>
        <input type="email" id="email" v-model="email" required />

        <label for="message">Nachricht:</label>
        <textarea
        id="message"
        v-model="message"
        required
        maxlength="400"
        ></textarea>

        <button type="submit">Absenden</button>
      </form>
      </section>

      <!-- Modal for Success Message -->
      <div v-if="showModal" id="myModal" class="modal">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
        <h2>Danke! 🎉</h2>
        <p>Ihre Nachricht wurde erfolgreich gesendet.</p>
      </div>
      </div>
    </main>

    <footer>
      <p>© 2024 Fabian Locher</p>
    </footer>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      showModal: false,
    };
  },
  methods: {
    submitForm() {
      // Simuliere das Senden des Formulars
      this.showModal = true;
      this.name = "";
      this.email = "";
      this.message = "";
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* Kontaktformular-Stile */
.contact {
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  transition: transform 0.3s;
}

.contact:hover {
  transform: scale(1.05);
}

label {
  margin: 15px 0 5px;
  display: block;
  font-weight: bold;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border 0.3s;
  font-size: 16px;
}

input:focus,
textarea:focus {
  border: 1px solid #333;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

/* Modal Styles */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 60px;
}

.modal-content {
  background-color: #fff;
  margin: 5% auto;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
