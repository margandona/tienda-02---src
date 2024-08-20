<template>
  <div id="app">
    <!-- Componente de navegación principal -->
    <BarraNavegacion />
    <!-- Vista del enrutador que cambiará según la ruta activa -->
    <router-view/>
  </div>
</template>

<script>
import BarraNavegacion from './components/BarraNavegacion.vue'; // Importa el componente de navegación

export default {
  components: {
    BarraNavegacion // Registra el componente de navegación
  }
};
</script>

<style scoped>
/* Estilos globales para el cuerpo de la aplicación */
body {
  background-color: var(--color-light);
  color: var(--color-dark);
}
</style>
