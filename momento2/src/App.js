const path = require('path');
const express = require('express');
const app = express();

//modulo para modulos http

const morgan = require('morgan');

//modulo para coneccion a mongoDB
const mongoose = require('mongoose');

//conexion a la base de datos 
mongoose.connect('mongodb://127.0.0.1:27017/dbrestaurante')
.then(db => console.log('La conexion a la base de datos dbrestaurante se realizo ok'))
.catch(error => console.log('error'));

//importar las rutas de
const indexRoutes = require('./routes/index');


app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));

//Definicion del motor de plantillas
app.set('view engine', 'ejs');
//middleware de morgan del
app.use(morgan('dev'));

app.use(express.urlencoded({extended:true})); //parcear los datos de las vistas en formato Json

//pendiente app.use para rutas

app.use('/',indexRoutes);

//subiendo el servidor
app.listen(app.get('port'), ()=>{
    console.log(`El servidor está en http://localhost:${app.get('port')}`);
})