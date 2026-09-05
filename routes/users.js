const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/users.json'),
    'utf8',
    (err, data) => {
      if (err) {
        return res.status(500).send({
          message: 'Ha ocurrido un error en el servidor',
        });
      }

      try {
        const users = JSON.parse(data);
        return res.send(users);
      } catch (parseError) {
        return res.status(500).send({
          message: 'Ha ocurrido un error en el servidor',
        });
      }
    },
  );
});

router.get('/:id', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/users.json'),
    'utf8',
    (err, data) => {
      if (err) {
        return res.status(500).send({
          message: 'Ha ocurrido un error en el servidor',
        });
      }

      try {
        const users = JSON.parse(data);
        const user = users.find((item) => item._id === req.params.id);

        if (!user) {
          return res.status(404).send({
            message: 'ID de usuario no encontrado',
          });
        }
        return res.send(user);
      } catch (parseError) {
        return res.status(500).send({
          message: 'Ha ocurrido un error en el servidor',
        });
      }
    },
  );
});

module.exports = router;
