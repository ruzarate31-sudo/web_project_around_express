const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6ab45c9262bcc80fa119b667',
  };
  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

mongoose.connect('mongodb://localhost:27017/aroundb');

app.use((req, res) => {
  res.status(404).send({
    message: 'Recurso solicitado no encontrado',
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
