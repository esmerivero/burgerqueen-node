const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const orders = require('./routes/api/orders');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

//  Configuración de la base de datos
const db = require('./config/keys').mongoURI;

// Conectar con mongo
mongoose
    .connect(db)
    .then(() => console.log('mongodb conectado'))
    .catch(err => console.log(err));

// Usando rutas
app.use('/api/orders', orders);

// Servidor estatico para producción
if(process.env.NODE_ENV === 'production'){
    // Guardamos el folder estatico
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`servidor en el puerto ${port}`));