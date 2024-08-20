<template>
  <div class="carrito-compras">
    <h2 class="carrito-compras__titulo">Carrito de Compras Infonet</h2>
    <ul class="list-group mb-3">
      <li v-for="item in cart" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <h6 class="my-0">{{ item.nombre }}</h6>
          <small class="text-muted">{{ item.precio_infonet.toLocaleString() }} CLP</small>
        </div>
        <span class="text-muted">{{ item.quantity }}</span>
        <div>
          <input type="number" v-model.number="item.quantity" @input="updateQuantity(item.id, item.quantity)" min="1" class="form-control d-inline-block mr-2" style="width: 60px;" />
          <button @click="$emit('remove-from-cart', item.id)" class="btn btn-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </ul>
    <div class="carrito-compras__resumen p-3 bg-light rounded">
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between">
          <span>Subtotal Productos:</span>
          <strong>{{ total.toLocaleString() }} CLP</strong>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Descuentos:</span>
          <strong>{{ discount.toLocaleString() }} CLP</strong>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total:</span>
          <strong>{{ finalAmount.toLocaleString() }} CLP</strong>
        </li>
      </ul>
      <router-link to="/pagar" class="btn btn-success btn-lg btn-block">PAGAR</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'], // Propiedad que recibe los detalles del carrito
  computed: {
    // Calcula el total del carrito
    total() {
      return this.cart.reduce((sum, item) => sum + item.precio_infonet * item.quantity, 0);
    },
    // Calcula el descuento basado en el total
    discount() {
      return this.total >= 1000000 ? this.total * 0.09 : this.total * 0.03;
    },
    // Calcula el monto final después del descuento
    finalAmount() {
      return this.total - this.discount;
    }
  },
  methods: {
    // Actualiza la cantidad de un producto en el carrito
    updateQuantity(productId, quantity) {
      this.$emit('update-quantity', productId, quantity);
    }
  }
};
</script>

<style scoped>
/* Estilos para el carrito de compras */
.carrito-compras__titulo {
  font-size: 1.8em;
  font-family: var(--font-secondary);
  margin-bottom: 1em;
  color: var(--color-primary);
}
</style>
