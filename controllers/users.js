const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => res.status(500).send({
      message: 'Ha ocurrido un error en el servidor',
    }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
  .orFail(() => {
    const error = new Error('ID de usuario no encontrado');
    error.statusCode = 404;
    throw error;
  })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({
          message: 'ID de usuario no válido',
        });
      }
      return res.status(err.statusCode || 500).send({
        message: err.message || 'Ha ocurrido un error en el servidor',
      });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({
          message: 'Los datos proporcionados no son válidos',
        });
      }

      return res.status(500).send({
        message: 'Ha ocurrido un error en el servidor',
      });
    });
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
  .orFail(() => {
    const error = new Error('ID de usuario no encontrado');
    error.statusCode = 404;
    throw error;
  })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({
          message: 'Los datos proporcionados no son válidos',
        });
      }
      return res.status(err.statusCode || 500).send({
        message: err.message || 'Ha ocurrido un error en el servidor',
      });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
  .orFail(() => {
  const error = new Error('ID de usuario no encontrado');
  error.statusCode = 404;
  throw error;
})
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({
          message: 'Los datos proporcionados no son válidos',
        });
      }
      return res.status(err.statusCode || 500).send({
         message: err.message || 'Ha ocurrido un error en el servidor',
     });
    });
};
