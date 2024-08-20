<template>
  <div class="text-center mt-5">
    <h1>404</h1>
    <p>Página no encontrada</p>
    <router-link to="/" class="btn btn-primary">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
/* Estilos para la página de error 404 */
h1 {
  font-size: 5em;
  font-family: var(--font-secondary);
}
p {
  font-size: 1.5em;
  font-family: var(--font-primary);
}
</style>
