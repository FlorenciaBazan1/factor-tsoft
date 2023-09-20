const datosClientes = {
    "cliente1": {
      servicios: ["Servicio A"],
      informacion: ["DTV"],
      lider: ["Fabian Orellana"],
      estado: ["En proceso"],
      fechaFin: ["16/09/2023"],
    },
    "cliente2": {
      servicios: ["Servicio C "],
      informacion: ["YPF"],
      lider: ["Juan Peréz"],
      estado: ["Finalizado"],
      fechaFin: ["13/06/2023"],
    },
    "cliente3": {
      servicios: ["Servicio E "],
      informacion: ["Natura"],
      lider: ["Juan Peréz"],
      estado: ["En proceso"],
      fechaFin: ["20/09/2023"],
    },
    "cliente4": {
      servicios: ["Servicio G "],
      informacion: ["Banco Chaco"],
      lider: ["Juan Peréz"],
      estado: ["Finalizado"],
      fechaFin: ["13/08/2023"],
    },
};

function mostrarServicios() {
    const clienteSeleccionado = document.getElementById("clientes").value;
    const clienteInfo = datosClientes[clienteSeleccionado];
    const clienteInfoCampo = document.getElementById("clienteInfo");
    const servicioInfo = datosClientes[clienteSeleccionado];    
    const servicioInfoCampo = document.getElementById("servicioInfo");
    const liderInfo = datosClientes[clienteSeleccionado];    
    const liderInfoCampo = document.getElementById("liderInfo");
    const estadoInfo = datosClientes[clienteSeleccionado];    
    const estadoInfoCampo = document.getElementById("estadoInfo");
    const fechaFinInfo = datosClientes[clienteSeleccionado];    
    const fechaFinInfoCampo = document.getElementById("fechaFinInfo");

    if (clienteInfo) {
      clienteInfoCampo.textContent = "Cliente: " + clienteInfo.informacion;
      servicioInfoCampo.textContent = "Servicio: " + servicioInfo.servicios;
      liderInfoCampo.textContent = "Lider Asignado: " + liderInfo.lider;
      estadoInfoCampo.textContent = "Estado: " + estadoInfo.estado;
      fechaFinInfoCampo.textContent = "Fecha de Finalización: " + fechaFinInfo.fechaFin;   
    } else {
      clienteInfoCampo.textContent = "";
      servicioInfoCampo.textContent = "";
      liderInfoCampo.textContent = "";
      estadoInfoCampo.textContent = "";
      fechaFinInfoCampo.textContent= ""; 
    }
  }


function guardarDatos() {
  var formulario = document.getElementById("miFormulario");
  var elementos = formulario.elements;
  var datos = {};

  var datosAlmacenados = JSON.parse(localStorage.getItem('datos')) || {};

  for (var i = 0; i < elementos.length; i++) {
      var campo = elementos[i];
      if (campo.name) {
          datos[campo.name] = campo.value;
      }
  }
  // datos = {datosAlmacenados, datos}
  datos = Object.assign({},datosAlmacenados,datos)
  localStorage.setItem('datos', JSON.stringify(datos)) // asi tal cual esta pisa los datos viejos

  console.log("Datos guardados:", datos);
}

function enviar(){
  guardarDatos();
  console.log("Preguntas:", localStorage.getItem('datos'))
}