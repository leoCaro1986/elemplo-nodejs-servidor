

//declaracion de variables 
let descripcion  ;
let referencia ;
let precio  ;
let existencia  ;

class documento {
    
    #fecha
    #nrodocumento
    #valor
    #codcliente
   constructor(fecha, nrodocumento, valor, codcliente)
   {
      this.#fecha = fecha;
      this.#nrodocumento = nrodocumento;
      this.#valor = valor;
      this.#codcliente = codcliente;
   }
    //definicion de propiedades metodos set(cambia contenido) y get(devuelve el contenido del atributo)
    getFecha(){
      return this.#fecha;
   }

   getValor()
   {
      return this.#valor;
   }

    getCodCliente()
    {
       return this.#codcliente;
    }

    setNroDocumento(nrodocumento) 
    { 
       this.#nrodocumento = nrodocumento;
    }

    setFecha(fecha) 
    { 
       this.#fecha = fecha;
    }

    setValor(valor) 
    { 
       this.#valor = valor;
    }

    setCodClient(codclient) 
    { 
       this.#codcliente = codclient;
    }
    
    
    
    getDescripcion() {
        return this.descripcion;
    }
    
     getReferencia(){
        return this.referencia;
     }
    
     getPrecio(){
        return this.precio;
     }
    
     getExistencia()
     {
        return this.existencia;
     }
    
    
     setDescripcion(descripcion) 
     { 
        this.descripcion = descripcion;
     }
    
     setReferencia(referencia) 
     { 
        this.referencia = referencia;
     }
    
    setPrecio(precio) 
     { 
        this.precio = precio;
     }
    
     setExistencia(existencia) 
     { 
        this.existencia = existencia;
     }
     getNroDocumento() 
     { 
        return this.#nrodocumento;
     }

    
 }



 function promocion(valor) {
    return valor * 0,5
 }

 let articulo = new Object();

//segundo punto 



calculo = (tipo)  => {
    function Alerta() {
        return "El tipo de credito es:" + tipo
    }
}

let calcularValorPrestamo = () => {
    tipoCredito();
}

function tipoCredito(){
    let valorPrestamo = document.getElementById('valorPrestamo').value; 
    let numCuotas = document.getElementById('numCuotas').value;  
    let tipoPrestamo = document.getElementById('tipoPrestamo').value; 

    if(tipoPrestamo == "Vivienda")
    {
        resultado = valorPrestamo +  (valorPrestamo * numCuotas *  0.1)
    }

    if(tipoPrestamo == "Vehiculo")
    {
        resultado = valorPrestamo +  (valorPrestamo * numCuotas *  0.2)
    }
  
    alert("El valor a pagar es :" +  resultado);
}
  
    function Calcular(form) {



    calcularValorPrestamo();
    let mensaje = new Promise(function(resolve, reject){
        let valor = document.getElementById('valorPrestamo').value;
        if (valor > 100000000){
            resolve('El valor excede de los 100.000.000');
        }
        else{
            reject("El valor no excede de los 100.000.000");
        }
    });
    mensaje.then(function(mensaje){
        console.log(mensaje);
        alert(mensaje);
    })
    .catch(function(mensaje){
        console.log(mensaje);
        alert(mensaje);
    })
  }






