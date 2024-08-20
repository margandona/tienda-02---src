<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Main navigation">
    <router-link class="navbar-brand" to="/">Infonet</router-link>
    <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="['collapse', 'navbar-collapse', { show: menuVisible }]" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/venta">Equipos y Accesorios</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/planes">Planes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/prepago">Prepago</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/sucursales">Sucursales</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contactenos">Contáctenos</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false // Estado para controlar la visibilidad del menú en pantallas pequeñas
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible; // Alterna la visibilidad del menú
    }
  }
};
</script>

<style scoped>
/* Estilos para la barra de navegación */
.navbar-brand {
  font-family: var(--font-secondary);
}
.nav-link {
  font-family: var(--font-primary);
}
</style>
