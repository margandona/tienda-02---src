import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [] // Estado inicial del carrito de compras
  },
  mutations: {
    // Añade un producto al carrito
    ADD_TO_CART(state, product) {
      const item = state.cart.find(item => item.id === product.id)
      if (item) {
        item.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    // Elimina un producto del carrito
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    // Actualiza la cantidad de un producto en el carrito
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload)
    }
  },
  getters: {
    cart: state => state.cart,
    total: state => state.cart.reduce((sum, item) => sum + item.precio_infonet * item.quantity, 0),
    discount: state => state.total > 1000000 ? state.total * 0.05 : 0,
    finalAmount: (state, getters) => getters.total - getters.discount
  },
  modules: {}
})
