<template>
    <div class="vista-planes container">
      <h1 class="vista-planes__titulo">Nuestros Planes</h1>
      <div class="row">
        <div v-for="plan in plans" :key="plan.titulo" class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ plan.titulo }}</h5>
              <p class="card-text">{{ plan.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      plans: [] // Lista de planes
    };
  },
  async mounted() {
    // Carga de planes desde una API cuando el componente se monta
    try {
      const url = 'https://raw.githubusercontent.com/shaka0241/infonet_api/main/home.json' // Asegúrate de que la URL apunte al endpoint correcto
      const response = await axios.get(url);
      this.plans = response.data.planes;
    } catch (error) {
      console.error('Error al cargar los planes:', error);
    }
  }
};
</script>

<style scoped>
/* Estilos para la vista de Planes */
.vista-planes {
  text-align: center;
  padding: 2em 0;
}

.vista-planes__titulo {
  font-size: 2.5em;
  font-family: var(--font-secondary);
  margin-bottom: 1em;
  color: var(--color-primary);
}

.card {
  border: 1px solid var(--color-secondary);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-family: var(--font-secondary);
  color: var(--color-primary);
}

.card-text {
  font-family: var(--font-primary);
}
</style>
