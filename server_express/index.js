//Creamos constante para el modulo de express
const express = require('express');
const app = express(); //vamos a subir el servidor del
let port = 3700;
//se definen las rutas
app.get('/', (req, res) =>{
     res.sendFile('/nav.html' , { root : __dirname});
});

app.get('/contactenos',function (req, res){
    res.sendFile('/form.html' , { root : __dirname});

    console.log(`El metodo es :${req.method}`);
})

app.post('/post',(req, res)=>{
    res.send("<h2>Cliente insertado completamente</h2>")
})

app.put('/put',(req, res)=>{
    res.send("<h2>Cliente editado corrrectamente</h2>")
})

app.delete('/delete',(req, res)=>{
    res.send("<h2>Cliente eliminado correctamente</h2>")
})


app.listen(port, ()=>{
    console.log(`El servidor esta en http://localhost:${port}`);

})
