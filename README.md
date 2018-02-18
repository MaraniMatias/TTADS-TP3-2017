# TTADS-TP3-2017

Nuestro trabajo practico final consiste en ampliar el trabajo practico 2, completando el front-end, agregando permisos de usuarios, actualizaciones en tiempo real y una aplicaion mobile.

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

Desarrollar un sistema que permitan llevar estadísticas de handball con las siguientes caracterísitcas:
* El backend debe ser programado en JavaScript con NodeJS y usaremos Express
* La persistencia debe realizarse utilizando MongoDB.
* El frontend se realizara con Vue para la parte web y para mobil Cordova y Vue HTML5 y para CSS.

## Funcionalidad
### API REST
* ABMC de equipos deportivos: listar todos, uno, crear, modificar y eliminar.
* Alta de juegos (partidos) indicando los id de los equipos y la fecha y hora de inicio.
* Informe de finalización de juego y baja de juego indicando el id del juego.
* ABMC de tipo de eventos (goles, amonestaciones, cambios): listar todos, uno, crear, modificar y eliminar.
* Informar nuevo evento indicando juego y datos necesarios según el evento (i.e. tipo, equipo, hora, etc).
* Eliminar un evento con su id.
* Consulta de juegos.
* Consulta de juegos activos (no finalizados).
* Consulta de detalle de un juego informando equipos y eventos.
* Acceso restringido para funcionalidades que lo requieran

### Frontend y Mobil

* Permitir interactuar completamente con la API.
* Usaremos VueJS y Semantic-ui (frameworck css) para la pagina web
* Para mobil usaremos Cordova, VueJS y OnsenUI (Frameworck CSS)

## Reuniones de avance

|Fecha|Tareas completadas desde la última reunión| Blockers |Tareas a realizar hasta la próxima reunión|
|-----|------------------------------------------|----------|------------------------------------------|
||||||


## Bibliografía

* [nodejs](http://nodejs.org)
* [mongoDB](http://mongodb.com)
* [express](http://expressjs.com)
* [mongoose](http://mongoosejs.com)
* [socket.io](https://socket.io)

* [webpack](https://webpack.js.org)
* [vue](https://vuejs.org)
  * [vue-router](https://github.com/vuejs/vue-router)
  * [vuex](https://github.com/vuejs/vuex)
  * [axios](https://github.com/mzabriskie/axios)
* [vuetifyjs](https://vuetifyjs.com)
* [onsen](https://onsen.io)

* [eslint](https://eslint.org) [reglas](https://eslint.org/docs/rules/)

## Notas

En caso de error `Error: spawn EACCES`, darle permiso de ejecucion a `gradle`.

