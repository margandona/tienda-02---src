<template>
  <div class="vista-pagar">
    <h2 class="vista-pagar__titulo">Detalles del despacho</h2>
    <form @submit.prevent="submitOrder" class="vista-pagar__form">
      <div class="vista-pagar__form-group">
        <label>Nombre:</label>
        <input v-model="name" required>
      </div>
      <div class="vista-pagar__form-group">
        <label>Dirección:</label>
        <input v-model="address" required>
      </div>
      <div class="vista-pagar__form-group">
        <label>Correo Electrónico:</label>
        <input type="email" v-model="email" @input="validateConfirmEmail" required>
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>
      <div class="vista-pagar__form-group">
        <label>Repetir Correo Electrónico:</label>
        <input type="email" v-model="confirmEmail" @input="validateConfirmEmail" required>
        <span v-if="confirmEmailError" class="error">{{ confirmEmailError }}</span>
      </div>
      <div class="vista-pagar__form-group">
        <label>Teléfono:</label>
        <input type="tel" v-model="phone" @input="validatePhone" required>
        <span v-if="phoneError" class="error">{{ phoneError }}</span>
      </div>
      <h2 class="vista-pagar__titulo">Forma de Pago</h2>
      <div class="vista-pagar__form-group">
        <label>Método de Pago:</label>
        <select v-model="paymentMethod" required>
          <option value="credit-card">Tarjeta de Crédito</option>
          <option value="paypal">PayPal</option>
          <option value="webpay">WebPay</option>
          <option value="bank-transfer">Transferencia Bancaria</option>
        </select>
      </div>
      <button type="submit" class="vista-pagar__boton">Confirmar</button>
      <span v-if="formError" class="error">{{ formError }}</span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      address: '',
      email: '',
      confirmEmail: '',
      phone: '',
      paymentMethod: 'credit-card',
      emailError: '',
      confirmEmailError: '',
      phoneError: '',
      formError: ''
    };
  },
  methods: {
    // Valida que los correos electrónicos coincidan
    validateConfirmEmail() {
      this.confirmEmailError = this.email === this.confirmEmail ? '' : 'Los correos electrónicos no coinciden.';
    },
    // Valida el número de teléfono
    validatePhone() {
      const phonePattern = /^[0-9]{9}$/;
      this.phoneError = phonePattern.test(this.phone) ? '' : 'Número de teléfono no válido, deben ser 9 números.';
    },
    // Envía el pedido
    submitOrder() {
      this.validateConfirmEmail();
      this.validatePhone();

      if (this.confirmEmailError || this.phoneError) {
        this.formError = 'Por favor, corrige los errores antes de enviar el formulario.';
        return;
      }

      // Simula el envío del pedido y redirige a la página de confirmación
      this.$router.push('/confirmacion');
    }
  }
};
</script>

<style scoped>
/* Estilos para la vista de pagar */
.vista-pagar {
  text-align: center;
  padding: 2em;
}

.vista-pagar__titulo {
  font-size: 2em;
  color: #333;
  margin-bottom: 1em;
}

.vista-pagar__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.vista-pagar__form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

.error {
  color: red;
  font-size: 0.9em;
}

.vista-pagar__boton {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.vista-pagar__boton:hover {
  background-color: #0056b3;
}
</style>
