# TTADS-TP3-2017

## Integrantes
``` javascript
var tp = {
  anio: 2017,
  integrantes : [{
    nombre : "Andrés de la Grana",
    legajo : 41034
  }, {
    nombre : "Marani Matias Ezequiel",
    legajo : 39710
  }]
}
console.log(tp.integrantes);
```

## Alcance del trabajo

Este proyecto consiste en una aplicación móvil que muestra informacion de partidos de distintos torneos de
handball, así también como de los partidos, equipos, jugadores y cuerpo técnico. Esta información será consumida
de un servidor online a partir de un backend desarrollado con NodeJS el cual puede ser encontrado en la siguiente
dirección https://github.com/andres1790/TTADS-TP2-2017.

## Funcionalidad
* Interactua con la API del backend mencionado anteriormente
* Interfaz adaptable según el dispositivo en el que opere la aplicación
* Módulo de login
* Pantalla de perfil de usuario detallando nombre, apellido, usuario y rol
* Menú dinámico en función del rol del usuario
* Visualización de partidos activos y pasados con filtro por torneo
* Detalle de partidos listando equipos participantes, marcador y eventos ocurridos
* Detalle de los eventos del partido
* Búsqueda de equipos en función de su nombre
* Detalle de equipos listando jugadores, cuerpo técnico y partidos en los que ha participado asi como también la
  cantidad de goles marcados por este equipo.
* Búsqueda de jugadores por nombre o apellido
* Detalle del jugadores
* Si el rol del usuario es administrador puede acceder a las siguientes opciones dentro del menú:
  - Alta y modificacion de partidos
  - Alta de tipos de evento
  - Alta de jugadores
  - Alta de cuerpo Tecnico
  - Alta de equipo
  - Alta de torneo

## Tecnologias utilizadas

* [Cordova](https://cordova.apache.org): Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's capabilities such as sensors, data, network status, etc.
* [VueJS](https://vuejs.org): Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.   
* [OnsenUI](https://onsen.io/): (Frameworck CSS) Onsen UI enriches app users’ mobile experience with natively designed UI elements

## Dependencias utilizadas

- [axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
- [cordova-android](https://github.com/apache/cordova-android): Android application library that allows for Cordova-based projects to be built for the Android Platform
- [cordova-browser](https://github.com/apache/cordova-browser): Target modern web browsers to build Apache Cordova based applications
- [cordova-plugin-dialogs](https://github.com/apache/cordova-plugin-dialogs): This plugin provides access to some native dialog UI elements via a global navigator.notification object
- [cordova-plugin-headercolor](https://github.com/tomloprod/cordova-plugin-headercolor): HeaderColor is a cordova plugin to change color of header in multitask view. Android devices
- [cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen): This plugin displays and hides a splash screen during application launch
[cordova-plugin-statusbar](https://github.com/apache/cordova-plugin-statusbar): Control the device status bar
- [lodash](https://github.com/lodash/lodash): Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
- [morphling](https://github.com/jofftiquez/vue-morphling): A collection of standard and custom VueJs filters and directives.
- [onsenui](https://github.com/OnsenUI/OnsenUI): Onsen UI is a library of UI components to help you create beautiful hybrid and mobile web apps for both Android and iOS using Javascript.
- [vue](https://github.com/vuejs/vue): Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
- [vue-onsenui](https://github.com/OnsenUI/OnsenUI): This package contains Vue.js v2 bindings and components that makes it easy to integrate the Onsen UI components in Vue apps.
- [vue-router](https://github.com/vuejs/vue-router): vue-router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze
- [vuex](https://github.com/vuejs/vuex): Centralized State Management for Vue.js
- [webpack](https://webpack.js.org): webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

## Run App

### Solo en el navegador

```bash
npm install

npm start
```

### Con aplicación móvil

- Para cualquier plataforma soportada por apache cordova.
- Instalar los requisitos para complicar según cada plataforma, por ejemplo SDK y dedemas `npm install cordova -g`
- Compilar la app

  ```bash
  npm run build
  ```
- Crear el paquete de la aplicacion

  ```bash
  cordova platform add android

  cordova run android
  ```

## Notas

En caso de error `Error: spawn EACCES`, darle permiso de ejecucion a `gradle`.
