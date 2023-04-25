
$(document).ready(function(){
    console.log("Iniciando scripts");
    var erroresConcurso="";
    var erroresContacto="";
    var erroresReclamo="";


    //Cargado de personas
    console.log("Cargando personas");

    fetch('https://reqres.in/api/users?page=2')
    .then(response => response.text())
    .then(texto => {
      let obj = JSON.parse(texto);
      mostrarUsuarios(obj);
      console.log("Finalizado el cargado de personas");
    })


    function mostrarUsuarios(objetoJSON) {
        let tbody = $('#personalTable');
        let largo=4;
        if(objetoJSON.data.length < largo){
            largo=objetoJSON.data.length;
        }
        for (let i = 0; i < largo; i++) {
          let user = objetoJSON.data[i];
          let userDiv=document.createElement('div');
          userDiv.innerHTML += `
            <div>
              <img src="${user.avatar}"></img>
              <h4>${user.first_name} ${user.last_name}</h4>
              <h4>${user.email}</h4>
            </div>
          `;
          tbody.append(userDiv);
        }
    }

    //Scripts validacion concurso
    $("#concurso-form").submit((event)=>{
      
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        if(validarFormularioConcurso()){
            // Limpiar el formulario
            $("#concurso-form").trigger('reset');
            // Mostrar el mensaje de éxito
            $("#mensaje-exito-concurso").css("display","block");    
        }else{
            alert("Revisar campos del formulario de concurso: "+erroresConcurso);
        }
        
    })

    function validarFormularioConcurso(){
        let elementNombre=$("#nombreConcurso");
        if(estaVacio(elementNombre.val()) || tieneNumero(elementNombre.val())){
            erroresConcurso+=elementNombre.attr('data-error-message');
            return false;
        }
        let elementApellido=$("#apellidoConcurso");
        if(estaVacio(elementApellido.val()) || tieneNumero(elementApellido.val())){
            erroresConcurso+=elementApellido.attr('data-error-message');
            return false;
        }
        let elementEmail=$("#emailConcurso").val();
        if(!esCorreoElectronico(elementEmail)){
            return false;
        }
        return true;
    }


    //Scripts validacion contacto
    $("#contacto-form").submit((event)=>{
      
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        if(validarFormularioContacto()){
            // Limpiar el formulario
            $("#contacto-form").trigger('reset');
            // Mostrar el mensaje de éxito
            $("#mensaje-exito-contacto").css("display","block");    
        }else{
            alert("Revisar campos del formulario de contacto: "+erroresContacto);
        }
        
    })

    function validarFormularioContacto(){
        let elementNombre=$("#nombreContacto");
        if(estaVacio(elementNombre.val()) || tieneNumero(elementNombre.val())){
            erroresContacto+=elementNombre.attr('data-error-message');
            return false;
        }
        let elementEmail=$("#emailContacto");
        if(!esCorreoElectronico(elementEmail.val())){
            erroresContacto+=elementApellido.attr('data-error-message');
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
            alert("Revisar campos del formulario de reclamo: "+erroresReclamo);
        }
        
    })

    function validarFormularioReclamo(){
        let elementNombre=$("#nombreReclamo");
        if(estaVacio(elementNombre.val()) || tieneNumero(elementNombre.val())){
            erroresReclamo+=elementNombre.attr('data-error-message');
            return false;
        }
        let elementApellido=$("#apellidoReclamo");
        if(estaVacio(elementApellido.val()) || tieneNumero(elementApellido.val())){
            erroresReclamo+=elementApellido.attr('data-error-message');
            return false;
        }
        let elementTipoReclamo=$("#tipo-reclamo");
        if(estaVacio(elementTipoReclamo.val())){
            erroresReclamo+=elementTipoReclamo.attr('data-error-message');
            return false;
        }

        let elementTextArea=$("#mensaje-reclamo");
        if(estaVacio(elementTextArea.val())){
            erroresReclamo+=elementTextArea.attr('data-error-message');
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
/*banner2*/
  document.querySelector("#botonBanner2").addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
  })
  //Scripts validacion suscripcion
  document.getElementById("suscripcion-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    document.getElementById("suscripcion-form").reset();
    document.getElementById("mensaje-exito-suscripcion").style.display = "block";
      });
/*Suscripcion*/
$(document).ready(function(){
        $("#suscripcion-form").hide(function(){
          $(this).hide();
        }),
    $("#unite").click(function(){
      $("#suscripcion-form").slideToggle("slow");
    });
  });

