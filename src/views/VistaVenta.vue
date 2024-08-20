<template>
  <div class="container vista-venta">
    <h1 class="vista-venta__titulo">Productos</h1>
    <div class="row">
      <div class="col-md-8">
        <!-- Grid de productos -->
        <div class="row">
          <TarjetaProducto 
            v-for="product in products" 
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
            class="col-lg-4 col-md-6 mb-4"
          />
        </div>
      </div>
      <div class="col-md-4">
        <!-- Componente del carrito de compras -->
        <CarritoCompras :cart="cart" @remove-from-cart="removeFromCart" @update-quantity="updateQuantity"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP
import TarjetaProducto from '../components/TarjetaProducto.vue'; // Importa el componente TarjetaProducto
import CarritoCompras from '../components/CarritoCompras.vue'; // Importa el componente CarritoCompras

export default {
  components: { TarjetaProducto, CarritoCompras },
  data() {
    return {
      products: [], // Lista de productos
      cart: [] // Carrito de compras
    };
  },
  async mounted() {
    // Carga de productos desde una API cuando el componente se monta
    try {
      const url = 'https://raw.githubusercontent.com/shaka0241/infonet_api/main/productos.json'
      const response = await axios.get(url);
      this.products = response.data.productos;
    } catch (error) {
      console.error('Error al cargar las ofertas o comentarios:', error);
    }
  },
  methods: {
    // Método para añadir un producto al carrito
    addToCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    // Método para eliminar un producto del carrito
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
    // Método para actualizar la cantidad de un producto en el carrito
    updateQuantity(productId, quantity) {
      const item = this.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para el título de la vista de venta */
.vista-venta__titulo {
  font-size: 2.5em;
  font-family: var(--font-secondary);
  margin-bottom: 1em;
  color: var(--color-primary);
}
.vista-venta__productos-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}
</style>
