const Card = require('../models/card');
const { BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR } = require('../utils/errors');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => res.status(INTERNAL_SERVER_ERROR).send({
      message: 'Ha ocurrido un error en el servidor',
    }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(BAD_REQUEST).send({
          message: 'Los datos proporcionados no son válidos',
        });
      }
      return res.status(INTERNAL_SERVER_ERROR).send({
        message: 'Ha ocurrido un error en el servidor',
      });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail(() => {
      const error = new Error('ID de tarjeta no encontrado');
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(BAD_REQUEST).send({
          message: 'ID de tarjeta no válido',
        });
      }
      return res.status(err.statusCode || INTERNAL_SERVER_ERROR).send({
        message: 'Ha ocurrido un error en el servidor',
      });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const error = new Error('ID de tarjeta no encontrado');
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(BAD_REQUEST).send({
          message: 'ID de tarjeta no válido',
        });
      }
      return res.status(err.statusCode || INTERNAL_SERVER_ERROR).send({
        message: 'Ha ocurrido un error en el servidor',
      });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const error = new Error('ID de tarjeta no encontrado');
      error.statusCode = NOT_FOUND;
      throw error;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(BAD_REQUEST).send({
          message: 'ID de tarjeta no válido',
        });
      }
      return res.status(err.statusCode || INTERNAL_SERVER_ERROR).send({
        message: 'Ha ocurrido un error en el servidor',
      });
    });
};
