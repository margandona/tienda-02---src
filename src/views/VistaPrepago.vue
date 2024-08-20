<template>
    <div class="vista-prepago container">
      <h1 class="vista-prepago__titulo">Productos de Prepago</h1>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ product.nombre }}</h5>
              <ul class="list-unstyled">
                <li v-for="caracteristica in product.caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
              </ul>
              <p class="card-text text-muted">Precio Normal: {{ product.precio_normal.toLocaleString() }} CLP</p>
              <p class="card-text">Precio Infonet: <strong>{{ product.precio_infonet.toLocaleString() }} CLP</strong></p>
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
      products: [] // Lista de productos de prepago
    };
  },
  async mounted() {
    // Carga de productos desde una API cuando el componente se monta
    try {
      const url = 'https://raw.githubusercontent.com/shaka0241/infonet_api/main/productos.json' // Asegúrate de que la URL apunte al endpoint correcto
      const response = await axios.get(url);
      this.products = response.data.productos;
    } catch (error) {
      console.error('Error al cargar los productos de prepago:', error);
    }
  }
};
</script>

<style scoped>
/* Estilos para la vista de Prepago */
.vista-prepago {
  text-align: center;
  padding: 2em 0;
}

.vista-prepago__titulo {
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
