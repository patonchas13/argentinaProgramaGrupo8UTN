
$(document).ready(function(){
    console.log("Iniciando scripts");
    //Scripts validacion reclamo
    $("#concurso-form").submit((event)=>{
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        if(validarFormularioConcurso()){
            // Limpiar el formulario
            $("#concurso-form").trigger('reset');
            // Mostrar el mensaje de éxito
            $("#mensaje-exito-concurso").css("display","block");    
        }else{
            alert("Revisar campos del formulario de concurso");
        }
        
    })

    function validarFormularioConcurso(){
        let elementNombre=$("#nombreConcurso").val();
        if(estaVacio(elementNombre) || tieneNumero(elementNombre)){
            return false;
        }
        let elementApellido=$("#apellidoConcurso").val();
        if(estaVacio(elementApellido) || tieneNumero(elementApellido)){
            return false;
        }
        let elementEmail=$("#emailConcurso").val();
        if(!esCorreoElectronico(elementEmail)){
            return false;
        }
        return true;
    }


    //Scripts validacion reclamo
    $("#reclamo-form").submit((event)=>{
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        if(validarFormularioReclamo()){
            // Limpiar el formulario
            $("#reclamo-form").trigger('reset');
            // Mostrar el mensaje de éxito
            $("#mensaje-exito-reclamo").css("display","block");    
        }else{
            //todo: ver que hacer cuando falla
            alert("Revisar campos del formulario de reclamo");
        }
        
    })

    function validarFormularioReclamo(){
        let elementNombre=$("#nombreReclamo").val();
        if(estaVacio(elementNombre) || tieneNumero(elementNombre)){
            return false;
        }
        let elementApellido=$("#apellidoReclamo").val();
        if(estaVacio(elementApellido) || tieneNumero(elementApellido)){
            return false;
        }
        let elementTipoReclamo=$("#tipo-reclamo").val();
        if(estaVacio(elementTipoReclamo)){
            return false;
        }
        let elementEmail=$("#emailReclamo").val();
        if(!esCorreoElectronico(elementEmail)){
            return false;
        }
        return true;
    }




    //Utils

    function estaVacio(texto) {
        if (texto.trim() === '') {
          return true;
        } else {
          return false;
        }
    }
    function tieneNumero(texto) {
        var regex = /\d+/; // Expresión regular para buscar números
        return regex.test(texto);
    }
    function esCorreoElectronico(texto) {
        var regex = /\S+@\S+\.\S+/; // Expresión regular para validar el correo electrónico
        return regex.test(texto);
      }

    console.log("Terminado scripts");
});

