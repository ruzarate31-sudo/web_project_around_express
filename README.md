## TripleTen — web_project_around_express
# Descripción del proyecto

Alrededor de los EE. UU. es una API REST desarrollada como parte del proyecto de Backend del programa de Desarrollo Web de TripleTen.

El proyecto consiste en crear un servidor con Node.js y Express conectado a una base de datos MongoDB, utilizando Mongoose para definir los esquemas, modelos y validaciones de los datos.

La API permite gestionar usuarios y tarjetas con fotografías, así como crear y eliminar tarjetas y agregar o eliminar "Me gusta".

El proyecto también incluye validación de datos y manejo de errores HTTP para responder correctamente ante solicitudes inválidas, recursos inexistentes y errores internos del servidor.

# Funcionalidades
Usuarios

La API permite:

Obtener todos los usuarios.
Obtener un usuario mediante su _id.
Crear un nuevo usuario.
Actualizar el nombre y la descripción del usuario actual.
Actualizar el avatar del usuario actual.

#Tarjetas
La API permite:

Obtener todas las tarjetas.
Crear una nueva tarjeta.
Eliminar una tarjeta mediante su _id.
Dar "Me gusta" a una tarjeta.
Quitar el "Me gusta" de una tarjeta.


# Validación y manejo de errores

El servidor valida los datos recibidos y devuelve códigos de estado HTTP adecuados:

400 — datos proporcionados no válidos.
404 — usuario, tarjeta o recurso no encontrado.
500 — error interno del servidor.

Las respuestas de error contienen un objeto JSON con un campo message.

# Tecnologías utilizadas
JavaScript
Node.js
Express.js
MongoDB
Mongoose
REST API
HTTP
Git
GitHub
Postman
MongoDB Compass
ESLint
Airbnb JavaScript Style Guide
Nodemon

# Técnicas y conceptos utilizados
Creación de un servidor con Express.
Creación y organización de rutas mediante express.Router().
Creación de controladores para usuarios y tarjetas.
Creación de esquemas y modelos con Mongoose.
Conexión de Node.js con MongoDB.
Validación de datos mediante esquemas de Mongoose.
Validación de URLs mediante expresiones regulares.
Uso de ObjectId para relacionar usuarios y tarjetas.
Uso de req.params para obtener identificadores de las URL.
Uso de req.body para recibir datos enviados por el cliente.
Uso de req.user como usuario autenticado temporalmente.
Uso de operadores de MongoDB como $addToSet y $pull.
Manejo de códigos de estado HTTP.
Manejo de errores mediante .catch().
Uso de orFail() para gestionar recursos inexistentes.
Uso de runValidators: true al actualizar datos.
Uso de { new: true } para devolver el documento actualizado.
Separación de rutas, controladores y modelos.
Uso de Nodemon para reiniciar automáticamente el servidor durante el desarrollo.
Aplicación de las reglas de estilo de Airbnb mediante ESLint.

# Estructura del proyecto
web_project_around_express/
│
├── controllers/
│   ├── cards.js
│   └── users.js
│
├── models/
│   ├── card.js
│   └── user.js
│
├── routes/
│   ├── cards.js
│   └── users.js
│
├── .editorconfig
├── .eslintrc
├── .gitignore
├── app.js
├── package.json
└── README.md
