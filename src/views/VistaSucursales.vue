<template>
  <div class="vista-sucursales">
    <h1 class="vista-sucursales__titulo">Sucursales</h1>
    <ul class="vista-sucursales__lista">
      <li v-for="branch in branches" :key="branch.id" class="vista-sucursales__item">
        <h2>{{ branch.nombre }}</h2>
        <p>Dirección: {{ branch.direccion }}</p>
        <p>Teléfono: {{ branch.telefono }}</p>
        <p>Horario: {{ branch.horario }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      branches: [
        {
          id: 1,
          nombre: 'Sucursal Centro',
          direccion: 'Av. Libertador 1234, Santiago',
          telefono: '+56 2 1234 5678',
          horario: 'Lunes a Viernes, 9:00 - 18:00'
        },
        {
          id: 2,
          nombre: 'Sucursal Norte',
          direccion: 'Av. El Salto 5678, Santiago',
          telefono: '+56 2 9876 5432',
          horario: 'Lunes a Viernes, 9:00 - 18:00'
        },
        {
          id: 3,
          nombre: 'Sucursal Sur',
          direccion: 'Av. Los Andes 4321, Santiago',
          telefono: '+56 2 5678 1234',
          horario: 'Lunes a Viernes, 9:00 - 18:00'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Estilos para la vista de sucursales */
.vista-sucursales {
  text-align: center;
  padding: 2em;
  background-color: var(--color-light);
  color: var(--color-dark);
}

.vista-sucursales__titulo {
  font-size: 2em;
  font-family: var(--font-secondary);
  margin-bottom: 1em;
}

.vista-sucursales__lista {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.vista-sucursales__item {
  border: 1px solid var(--color-secondary);
  border-radius: 10px;
  padding: 1em;
  background-color: var(--color-light);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
}
</style>
