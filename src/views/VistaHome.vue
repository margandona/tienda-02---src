<template>
  <div class="vista-home">
    <h1 class="vista-home__titulo">Ofertas Especiales de Planes</h1>
    <div class="vista-home__ofertas">
      <div v-for="offer in offers" :key="offer.titulo" class="vista-home__oferta-card">
        <h2>{{ offer.titulo }}</h2>
        <p>{{ offer.descripcion }}</p>
      </div>
    </div>
    <section class="vista-home__feedbacks">
      <h2 class="vista-home__titulo">Comentarios de Nuestros Clientes</h2>
      <div v-if="comments.length > 0">
        <ul>
          <li v-for="(comment, index) in comments" :key="index" class="vista-home__feedback-item">
            <p><strong>{{ comment.nombre }}:</strong> {{ comment.descripcion }}</p>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No hay comentarios disponibles.</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

export default {
  data() {
    return {
      offers: [], // Lista de ofertas
      comments: [] // Lista de comentarios de clientes
    };
  },
  async mounted() {
    // Carga de ofertas y comentarios desde una API cuando el componente se monta
    try {
      const url = 'https://raw.githubusercontent.com/shaka0241/infonet_api/main/home.json'
      const response = await axios.get(url);
      this.offers = response.data.planes;
      this.comments = response.data.feedback;
    } catch (error) {
      console.error('Error al cargar las ofertas o comentarios:', error);
    }
  }
};
</script>

<style scoped>
/* Estilos para la vista de Home */
.vista-home {
  text-align: center;
  padding: 2em;
  background-color: var(--color-light);
  color: var(--color-dark);
}

.vista-home__titulo {
  font-size: 2.5em;
  font-family: var(--font-secondary);
  margin-bottom: 1em;
  color: var(--color-primary);
}

.vista-home__ofertas {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.vista-home__oferta-card {
  background-color: var(--color-light);
  border: 1px solid var(--color-secondary);
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.vista-home__oferta-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.vista-home__feedbacks {
  margin-top: 2em;
}

.vista-home__feedback-item {
  list-style-type: none;
  padding: 10px;
  background-color: var(--color-light);
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
