<template>
  <div class="vista-contactenos">
    <h1 class="vista-contactenos__titulo">Contáctenos</h1>
    <p>Para consultas, por favor llene el siguiente formulario:</p>
    <form @submit.prevent="submitForm" class="vista-contactenos__form">
      <div class="vista-contactenos__form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="vista-contactenos__form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="vista-contactenos__form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="vista-contactenos__boton">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    // Envía el formulario y resetea los datos
    submitForm() {
      alert('Formulario enviado!');
      this.resetForm();
    },
    // Resetea los campos del formulario
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
/* Estilos para la vista de contacto */
.vista-contactenos {
  text-align: center;
  padding: 2em;
  background-color: #f9f9f9;
}

.vista-contactenos__titulo {
  font-size: 2em;
  color: #333;
  margin-bottom: 1em;
}

.vista-contactenos__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.vista-contactenos__form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

.vista-contactenos__form-group label {
  font-weight: bold;
  margin-bottom: 0.5em;
}

.vista-contactenos__form-group input,
.vista-contactenos__form-group textarea {
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}

.vista-contactenos__boton {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.vista-contactenos__boton:hover {
  background-color: #0056b3;
}
</style>
