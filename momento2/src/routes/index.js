//definir rutas para el crud
const express = require('express');
const router = express.Router();
const Plato = require('../model/plato');//hace referencia al esquema

router.get('/', async(req, res)=>{
    const platos = await Plato.find(); //retornar todos los documentos de la colección plato
    res.render('index', { //index.ejs (views/index.ejs)
        platos
    });
});

router.post('/add', async(req, res, next)=>{
    const plato = new Plato(req.body) //tomara los datos del formulario (titulo y descripción, precio y disponibilidad)
    await plato.save();
    res.redirect('/');
});

router.get('/turn/:id', async(req, res, next)=>{
    let {id}=req.params;
    const plato = await Plato.findById(id);
    plato.status = !plato.status; //instercambia el estado
    await plato.save();
    res.redirect('/');
});

router.get('/edit/:id', async(req, res, next)=>{
    const plato = await Plato.findById(req.params.id);
    console.log(plato);
    res.render('edit',{plato}); //edit.js -- editar el plato
});

router.post('/edit/:id',async(req, res, next)=>{
    const {id} = req.params;
    await Plato.update({_id:id},req.body);
    res.redirect('/');
});

router.get('/delete/:id',async(req, res, next)=>{
    let {id} = req.params;
    await Plato.remove({_id:id});
    res.redirect('/');
});

module.exports = router;

