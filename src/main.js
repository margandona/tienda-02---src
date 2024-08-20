import { createApp } from 'vue' // Importa la función createApp de Vue
import App from './App.vue' // Importa el componente raíz App
import router from './router' // Importa el enrutador
import store from './store' // Importa el store de Vuex
import 'bootstrap/dist/css/bootstrap.min.css' // Importa los estilos de Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css' // Importa los estilos de Font Awesome
import './assets/styles/_global.scss' // Importa los estilos globales personalizados

// Crea una instancia de la aplicación Vue, añade el enrutador y el store, y monta la aplicación en el elemento con id "app"
createApp(App).use(store).use(router).mount('#app')
