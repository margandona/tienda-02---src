<template>
  <div class="vista-confirmacion">
    <h1 class="vista-confirmacion__titulo">Confirmación</h1>
    <div v-if="orderDetails" class="vista-confirmacion__detalles">
      <p>Orden # {{ orderDetails.orderNumber }}</p>
      <p>Estado: {{ orderDetails.status }}</p>
    </div>
    <div v-else>
      <p>Cargando detalles de la orden...</p>
    </div>
    <router-link to="/">
      <button class="vista-confirmacion__boton">Volver a Home</button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

export default {
  data() {
    return {
      orderDetails: null // Detalles de la orden
    };
  },
  async mounted() {
    // Carga los detalles de la orden desde una API cuando el componente se monta
    try {
      const url = 'https://raw.githubusercontent.com/shaka0241/infonet_api/main/ordercheckresp.json'
      const response = await axios.get(url);
      this.orderDetails = response.data;
    } catch (error) {
      console.error('Error al obtener los detalles de la orden:', error);
    }
  }
};
</script>

<style scoped>
/* Estilos para la vista de confirmación */
.vista-confirmacion {
  text-align: center;
  padding: 2em;
}

.vista-confirmacion__titulo {
  font-size: 2em;
  color: #333;
  margin-bottom: 1em;
}

.vista-confirmacion__detalles {
  margin-bottom: 2em;
}

.vista-confirmacion__boton {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.vista-confirmacion__boton:hover {
  background-color: #0056b3;
}
</style>
