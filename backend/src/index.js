const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://yrimaciel:yrimaciel@cluster0-iawai.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, err => {
    try {
        console.log('Servidor Rodando..')
    } catch (err) {
        console.log(err)
    }
});