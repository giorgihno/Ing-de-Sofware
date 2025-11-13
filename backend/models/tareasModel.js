const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // <-- Aquí estaba el error
      ref: 'User',
      required: true
    },

    texto: {
      type: String,
      required: [true, 'Por favor teclea el texto de la tarea'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tarea', tareaSchema);
