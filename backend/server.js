const express = require('express');
const colors=require('colors')
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const tareasRoutes = require('./routes/tareasRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require(`cors`)
connectDB();

const app = express();

app.use(cors()) //sino tenemos el cors, y se trata de hacer el front end, pues marcaria error

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

