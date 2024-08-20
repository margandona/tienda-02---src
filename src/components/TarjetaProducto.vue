<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">{{ product.nombre }}</h5>
      <ul class="list-unstyled">
        <li v-for="caracteristica in product.caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
      </ul>
      <p class="card-text text-muted">Precio Normal: {{ product.precio_normal.toLocaleString() }} CLP</p>
      <p class="card-text">Precio Infonet: <strong>{{ product.precio_infonet.toLocaleString() }} CLP</strong></p>
      <button @click="$emit('add-to-cart', product)" class="btn btn-primary btn-block">Agregar al Carrito</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object // Propiedad que recibe los detalles del producto
  }
};
</script>

<style scoped>
/* Estilos para la tarjeta del producto */
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
