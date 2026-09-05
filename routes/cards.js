const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/cards.json'),
    'utf8',
    (err, data) => {
      if (err) {
        return res.status(500).send({
          message: 'Ha ocurrido un error en el servidor',
        });
      }

      try {
        const cards = JSON.parse(data);
        return res.send(cards);
      } catch (parseError) {
        return res.status(500).send({
          message: 'Ha ocurrido un error en el servidor',
        });
      }
    },
  );
});

module.exports = router;
