# Tripleten web_project_around_express
## Descripción del proyecto

Este proyecto corresponde al desarrollo del backend de la aplicación "Alrededor de los EE. UU.".

El objetivo es crear un servidor utilizando Node.js y Express que permita gestionar solicitudes HTTP y devolver información de usuarios y tarjetas mediante una API.

Los datos se almacenan temporalmente en archivos JSON y son leídos desde el servidor utilizando los módulos `fs` y `path` de Node.js.

El proyecto también implementa manejo de errores para solicitudes a recursos inexistentes, usuarios no encontrados y problemas internos relacionados con la lectura o interpretación de los archivos JSON.

## Funcionalidad

La API permite realizar las siguientes solicitudes:

- `GET /users` — devuelve todos los usuarios.
- `GET /users/:id` — devuelve un usuario según su identificador.
- `GET /cards` — devuelve todas las tarjetas.

También se implementan respuestas de error:

- `404` — usuario o recurso no encontrado.
- `500` — error interno del servidor.

## Tecnologías utilizadas

- JavaScript
- Node.js
- Express.js
- JSON
- Git
- GitHub
- Postman
- ESLint
- Airbnb JavaScript Style Guide
- Nodemon

## Técnicas utilizadas

- Creación de un servidor con Express.
- Creación de rutas HTTP.
- Uso de `express.Router()` para modularizar las rutas.
- Lectura de archivos con `fs.readFile()`.
- Construcción de rutas de archivos con `path.join()`.
- Uso de módulos con `require()` y `module.exports`.
- Manejo de códigos de estado HTTP.
- Manejo de errores con condiciones y `try...catch`.
- Separación del proyecto en módulos de rutas y datos.
- Hot reload durante el desarrollo utilizando Nodemon.

## Estructura del proyecto

```text
web_project_around_express/
├── data/
│   ├── cards.json
│   └── users.json
├── routes/
│   ├── cards.js
│   └── users.js
├── app.js
├── package.json
└── README.md
